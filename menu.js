/* global AFRAME */
AFRAME.registerComponent('menu', {
  init: function () {
    var el = this.el;
    var menuBackGroundEl = document.createElement('a-entity');
    menuBackGroundEl.setAttribute('geometry', {
      primitive: 'box',
      width: 0.25,
      height: 0.15,
      depth: 0.01
    });
    menuBackGroundEl.setAttribute('material', {
      color: '#282828'
    });
    menuBackGroundEl.setAttribute('position', '0 0 -0.025');
    el.appendChild(menuBackGroundEl);
  }
});
