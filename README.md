### Let your maps sleep!

[demo](https://cliffcloud.github.io/Leaflet.TameScrolling)

Just include `Leaflet.TameScrolling.js` right after leaflet!

#### New Options availabe for `L.map` (and defaults)

```
{
  // true by default, false if you want a wild map
  tameScrolling: true, 

  // time it takes for the map to fall asleep once out mouseout
  sleepTime: 750,      

  // time(ms) until map wakes on mouseover
  wakeTime: 750,       

  // defines whether or not the user is prompted oh how to wake map
  sleepNote: true,     

  // should only hovering wake the map?
  hoverToWake: true    
}
```
