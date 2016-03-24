# Leaflet.Sleep

When scrolling a page and your cursor crosses a leaflet map, the scroll is
stopped and the map zooms &mdash; not friendly.

`L.Sleep` removes the **dilemma** between

  * disabling scrollZoom for the pages sake
  * enabling scrollZoom for the map's sake

It's an interaction-manager for your map:
with user-interest it wakes the map and
when ignored the map won't interfere.

### [demo/example](https://cliffcloud.github.io/Leaflet.Sleep)

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

        // should hovering wake the map?
        hoverToWake: true,

        // specify a custom message to notify users how to wake
        wakeMessage: ('Click ' + (hoverToWake?' or Hover ' : '') + 'to Wake'),

        // opacity (between 0 and 1) of inactive map
        sleepOpacity: .7
    }

## MIT Licensed
