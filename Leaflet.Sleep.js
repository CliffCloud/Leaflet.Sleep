L.Map.mergeOptions({
  sleep: true,
  sleepTime: 750,
  wakeTime: 750,
  sleepNote: true,
  hoverToWake: true,
  sleepOpacity:.7
});

L.Map.Sleep = L.Handler.extend({
  addHooks: function () {
    this.sleepNote = L.DomUtil.create('p', 'sleep-note', this._map._container);
    this._sleepMap();
    this._enterTimeout = null;
    this._exitTimeout = null;


    var mapStyle = this._map.getContainer().style;
    mapStyle.WebkitTransition += 'opacity .5s';
    mapStyle.MozTransition += 'opacity .5s';

    var noteString = this._map.options.wakeMessage ||
                     ('Click ' + (this._map.options.hoverToWake?'or Hover ':'') + 'to Wake');
    var style = this.sleepNote.style;
    if( this._map.options.sleepNote ){
      this.sleepNote.appendChild(document.createTextNode( noteString ));
      style.pointerEvents = 'none';
      style.maxWidth = '150px';
      style.transitionDuration = '.2s';
      style.zIndex = 5000;
      style.opacity = '.6';
      style.margin = 'auto';
      style.textAlign = 'center';
      style.borderRadius = '4px';
      style.top = '50%';
      style.position = 'relative';
      style.padding = '5px';
      style.border = 'solid 2px black';
      style.background = 'white';
    }
  },

  removeHooks: function () {
    if (!this._map.scrollWheelZoom.enabled()){
      this._map.scrollWheelZoom.enable();
    }
    L.DomUtil.setOpacity( this._map._container, 1);
    L.DomUtil.setOpacity( this.sleepNote, 0);
    this._removeSleepingListeners();
    this._removeAwakeListeners();
  },

  _wakeMap: function () {
    this._stopWaiting();
    this._map.scrollWheelZoom.enable();
    L.DomUtil.setOpacity( this._map._container, 1);
    this.sleepNote.style.opacity = 0;
    this._addAwakeListeners();
  },

  _sleepMap: function () {
    this._stopWaiting();
    this._map.scrollWheelZoom.disable();
    L.DomUtil.setOpacity( this._map._container, this._map.options.sleepOpacity);
    this.sleepNote.style.opacity = .4;
    this._addSleepingListeners();
  },

  _wakePending: function () {
    this._map.once('mousedown', this._wakeMap, this);
    if (this._map.options.hoverToWake){
      var self = this;
      this._map.once('mouseout', this._sleepMap, this);
      self._enterTimeout = setTimeout(function(){
          self._map.off('mouseout', self._sleepMap, self);
          self._wakeMap();
      } , self._map.options.wakeTime);
    }
  },

  _sleepPending: function () {
    var self = this;
    self._map.once('mouseover', self._wakeMap, self);
    self._exitTimeout = setTimeout(function(){
        self._map.off('mouseover', self._wakeMap, self);
        self._sleepMap();
    } , self._map.options.sleepTime);
  },

  _addSleepingListeners: function(){
    this._map.once('mouseover', this._wakePending, this);
  },

  _addAwakeListeners: function(){
    this._map.once('mouseout', this._sleepPending, this);
  },

  _removeSleepingListeners: function(){
    this._map.options.hoverToWake &&
      this._map.off('mouseover', this._wakePending, this);
    this._map.off('mousedown', this._wakeMap, this);
  },

  _removeAwakeListeners: function(){
    this._map.off('mouseout', this._sleepPending, this);
  },

  _stopWaiting: function () {
    this._removeSleepingListeners();
    this._removeAwakeListeners();
    var self = this;
    if(this._enterTimeout) clearTimeout(self._enterTimeout);
    if(this._exitTimeout) clearTimeout(self._exitTimeout);
    this._enterTimeout = null;
    this._exitTimeout = null;
  }
});

L.Map.addInitHook('addHandler', 'sleep', L.Map.Sleep);
