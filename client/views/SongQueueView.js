// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.bind('add', this.render, this);
    this.collection.bind('remove', this.render, this); // may be able to combine this with the add listener
  },

  render: function() {
    // return this.$el;
    // iterate through each child and create a SongQueueEntryView
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
