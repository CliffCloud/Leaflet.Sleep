### Let your maps sleep!

[demo](https://cliffcloud.github.io/Leaflet.Sleep)

Just include `Leaflet.Sleep.js` right after leaflet!

#### New Options availabe for `L.map` (and defaults)

```
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
```
