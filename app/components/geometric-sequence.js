import Ember from 'ember';

export default Ember.Component.extend({

  init: function(){
    this.initializeSequence();
    this._super();
  },

  initializeSequence: function(){
    //geometric sequence of ^2: 1, 2, 4, 8, 16, etc...
    this.set("geometricSequence", Ember.A([1, 2, 4]));
  },

  classNames: ["geometric-sequence"],

  //set in component initializer
  geometricSequence: null,

  //reverse sequence is rendered in geometric-sequence.hbs
  reverseSequence: Ember.computed('geometricSequence', 'geometricSequence.@each', function() {
    var sequence = this.get("geometricSequence");
    var reverse = sequence;
    //reverse the array here
    reverse.sort(function(a, b){return b - a});
    return reverse;
  }),

  actions:{
    updateSequence: function(){
      var sequence = this.get("geometricSequence");
      //Modify the sequence here
      var highestValue = Math.max.apply(Math, sequence);
      sequence.unshiftObject(highestValue * 2);
      if(sequence.length > 10) {
        sequence.pop();
      }
      if(highestValue === Math.pow(2, 15)) {
        console.log("&&&&&&&&&&&&&&&&&&&&&&")
      }
    }
  }
});