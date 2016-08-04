require('dotenv').config()
const Twit = require('twit')
const ws281x = require('rpi-ws281x-native')
const util = require('./util')
const colors = util.objToStrMap(require('./colors'))

const NUM_LEDS = parseInt(process.argv[2], 10) || 150
let pixelData = new Uint32Array(NUM_LEDS)

ws281x.init(NUM_LEDS)

let T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

let stream = T.stream('statuses/sample')
let offset = 0

stream.on('tweet', tweet => {
  let tokens = tweet.text.match(/\S+/g).map(t => t.toLowerCase())
  let foundColors = tokens.filter(t => colors.has(t))

  if (foundColors.length) {
    console.log(tweet.text, foundColors)

    foundColors
      .map(c => util.stringToHexColor(colors.get(c)))
      .forEach(color => {
        pixelData[offset] = color
        offset = (offset + 1) % NUM_LEDS
        ws281x.render(pixelData)
      })
  }
})

process.on('SIGINT', () => {
  ws281x.reset()
  process.nextTick(() => { process.exit(0) })
})
