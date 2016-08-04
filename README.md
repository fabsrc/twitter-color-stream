# Twitter Color Stream

Transforms tweeted colors to colors on a LED strip connected to a Raspberry Pi.

## Requirements

* Raspberry Pi
* WS281x LED Strip

Follow these [instructions](https://learn.adafruit.com/neopixels-on-raspberry-pi/wiring) to set up the Raspberry Pi with the LED strip.

## Install

```bash
npm install
touch .env
```

This application requires Twitter credentials. Add your `TWITTER_CONSUMER_KEY`, `TWITTER_CONSUMER_SECRET`, `TWITTER_ACCESS_TOKEN` and `TWITTER_ACCESS_TOKEN_SECRET` to a `.env` file.


## Use

```bash
sudo npm start
```

## Licence

Licensed under the [MIT License](http://opensource.org/licenses/mit-license.php).