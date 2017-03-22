import Ember from 'ember';

export default Ember.Component.extend({

  //set in template
  message: '',

  //set in template
  smallMessage: '',

  isSmall: false,

  classNames: ["shrinking-box"],
  classNameBindings: ['isSmall:is-small'],

  click: function(/*evt*/){

  }

});