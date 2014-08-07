// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'li',

  template: _.template('<li><span><strong><%= artist %>:&nbsp&nbsp</strong></span><span><%= title %></span></li>'),

  events: {
    'click': function() {
    this.remove();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
