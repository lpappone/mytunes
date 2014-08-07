// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'li',

  template: _.template('<li><span><strong><%= artist %>:&nbsp&nbsp</strong></span><span><%= title %></span></li>'),

  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
