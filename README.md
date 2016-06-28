# Leaflet.Sleep

Leaflet's stock maps are event-greedy and interfere with scrolling.

You can think of `Leaflet.Sleep` as an interaction manager, to help your
map do what you want when you want.

### [demo](http://cliffcloud.github.io/Leaflet.Sleep)

## Use

Either
[`npm install leaflet-sleep`](https://www.npmjs.com/package/leaflet-sleep)
or copy/paste the
[source](https://github.com/CliffCloud/Leaflet.Sleep/blob/master/Leaflet.Sleep.js)

all you need to do is include the plugin and you'll be good to go

    <script src="Leaflet.Sleep.js"></script>

## Config

These are the new options available for `L.map` and their defaults.

    {
        // false if you want an unruly map
        sleep: true,

        // time(ms) until map sleeps on mouseout
        sleepTime: 750,

        // time(ms) until map wakes on mouseover
        wakeTime: 750,

        // defines whether the user is prompted on how to wake map
        sleepNote: true,

        // should hovering wake the map? (non-touch devices only)
        hoverToWake: true,

        // a message to inform users about waking the map
        wakeMessage: 'Click or Hover to Wake',

        // a constructor for a control button
        sleepButton: L.Control.sleepMapControl,

        // opacity (between 0 and 1) of inactive map
        sleepOpacity: .7
    }

## MIT Licensed
