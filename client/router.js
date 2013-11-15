Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    template: "village"
  });

  this.route('conversation', {
    path: '/c/:_id',
    template: "conversation",
    before: function() {
      Session.set("current_conversation", this.params._id);
    }
  })
})