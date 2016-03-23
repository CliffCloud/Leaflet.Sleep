## Leaflet.Sleep

> When scrolling down a page, if you cursor hits a leaflet map, the scroll is
> stopped in it's tracks and the map starts zooming. This is annoying!
>
> `L.Sleep` removes the **dilemma** between
>
>   * disabling scrollZoom for the pages sake
>   * enabling scrollZoom for the map's sake
>
> It's an interaction-manager for your map:
> with user-interest it wakes the map and
> when ignored the map won't interfere.

### [demo](https://cliffcloud.github.io/Leaflet.Sleep)

### Use

* Include `Leaflet.Sleep.js` *right after leaflet*!
* Specify plugin options *before creating a new map object*:
```js
L.Map.mergeOptions({
    sleep: true,
    sleepTime: 750,
    wakeTime: 750,
    sleepNote: true,
    hoverToWake: true,
    sleepOpacity:.7
});
```

#### Config

##### sleep

Type: `boolean`
Default: `true`

Whether you want an unruly map.

##### sleepTime

Type: `number`
Default: `750`

Time(ms) until map sleeps on `mouseout`.

##### wakeTime

Type: `number`
Default: `750`

Time(ms) until map wakes on `mouseover`.

##### sleepNote

Type: `boolean`
Default: `true`

Whether the user is prompted on how to wake map.

##### hoverToWake

Type: `boolean`
Default: `true`

Whether hovering should wake the map.

##### wakeMessage

Type: `string`
Default: `'Click ' + (hoverToWake?' or Hover ' : '') + 'to Wake'`

Specify a custom message to notify users how to wake

##### sleepOpacity

Type: `number`
Default: `.7`

Opacity (between 0 and 1) of inactive map.

### MIT Licensed
