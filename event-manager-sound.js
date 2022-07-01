/* global AFRAME */
AFRAME.registerComponent('event-manager-sound', {

  init: function () {
    this.bindMethods();

    this.soundEl = document.querySelector('#Sound');
    

    this.playButtonEl = document.querySelector('#playSound');
    

    this.buttonToGeometry = {
      'playButton': this.soundEl,
      
    };

    this.playButtonEl.addEventListener('click', this.onClick);
    
    //this.playButtonEl.addState('pressed');
  },

  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
  },

  onClick: function (evt) {
    var targetEl = evt.target;
    if (targetEl === this.playButtonEl ) {
      this.playButtonEl.removeState('pressed');
      
      this.soundEl.components.sound.playSound();
      
      //this.buttonToGeometry[targetEl.id].object3D.visible = true;
    }

    if (targetEl === this.darkModeButtonEl) {
      if (this.el.sceneEl.is('starry')) {
        targetEl.setAttribute('button', 'label', 'Dark Mode');
        this.el.sceneEl.setAttribute('environment', {preset: 'default'});
        this.el.sceneEl.removeState('starry');
      } else {
        targetEl.setAttribute('button', 'label', 'Light Mode');
        this.el.sceneEl.setAttribute('environment', {preset: 'starry'});
        this.el.sceneEl.addState('starry');
      }
    } else {
      targetEl.addState('pressed');
    }
  }
});
