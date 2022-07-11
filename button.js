/* global AFRAME */
AFRAME.registerComponent('button', {
  schema: {
    label: {default: ''},
    image: {default: ' '},
    width: {default: 0.11},
    toggable: {default: false}
  },
  init: function () {
    var el = this.el;
    var labelEl = this.labelEl = document.createElement('a-entity');

    this.color = '#5B5B5B';
    el.setAttribute('geometry', {
      primitive: 'cylinder',
      radius: 0.04,
      height: 0.02
    });

    el.setAttribute('material', {color: this.color, src: this.data.image});
    el.setAttribute('pressable', '');
    
    el.setAttribute('rotation', '-90 0 0');
    labelEl.setAttribute('position', '0 0 0.02');
    
    /*labelEl.setAttribute('text', {
      value: this.data.label,
      color: 'white',
      align: 'center'
    });*/

    labelEl.setAttribute('scale', '0.75 0.75 0.75');
    this.el.appendChild(labelEl);

    this.bindMethods();
    this.el.addEventListener('stateadded', this.stateChanged);
    this.el.addEventListener('stateremoved', this.stateChanged);
    this.el.addEventListener('pressedstarted', this.onPressedStarted);
    this.el.addEventListener('pressedended', this.onPressedEnded);
  },

  bindMethods: function () {
    this.stateChanged = this.stateChanged.bind(this);
    this.onPressedStarted = this.onPressedStarted.bind(this);
    this.onPressedEnded = this.onPressedEnded.bind(this);
  },

  update: function (oldData) {
    if (oldData.label !== this.data.label) {
      this.labelEl.setAttribute('text', 'value', this.data.label);
    }
  },

  stateChanged: function () {
    var color = this.el.is('pressed') ? '#323232' : this.color;
    this.el.setAttribute('material', {color: color});
  },

  onPressedStarted: function () {
    var el = this.el;
    el.setAttribute('material', {color: '#323232'});
    el.emit('click');
    if (this.data.togabble) {
      if (el.is('pressed')) {
        el.removeState('pressed');
      } else {
        el.addState('pressed');
      }
    }
  },

  onPressedEnded: function () {
    if (this.el.is('pressed')) { return; }
    this.el.setAttribute('material', {color: this.color});
  }
});
