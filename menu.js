/* global AFRAME */
AFRAME.registerComponent('menu', {
  init: function () {
    var el = this.el;
    var menuBackGroundEl = document.createElement('a-rounded');
    menuBackGroundEl.setAttribute('width', '0.25');
    menuBackGroundEl.setAttribute('height', '0.15');
    menuBackGroundEl.setAttribute('radius', '0.03');
    
    menuBackGroundEl.setAttribute('material', {
      color: '#282828',
      side: 'double'
    });
    menuBackGroundEl.setAttribute('position', '-0.126 -0.075 -0.021');
    el.appendChild(menuBackGroundEl);
  }
});
