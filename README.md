### Let your maps sleep!

> When scrolling down a page, if you cursor hits a leaflet map, the scroll is
> stopped in it's tracks and the map starts zooming. This is annoying!
>
> `L.Sleep` removes the dilemma between
> **A) disabling scrollZoom for the pages sake**
> and **B) enabling scrollZoom for the map's sake**.
> It's an interaction-manager for your map:
> with user-interest it wakes the map and
> when ignored the map won't interfere.

[demo](https://cliffcloud.github.io/Leaflet.Sleep)

Just include `Leaflet.Sleep.js` right after leaflet!

#### New Options availabe for `L.map` (and defaults)

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
      hoverToWake: true
    }
