Meteor.startup(function () {
  Meteor.publish("conversations", function() {
    return Conversations.find({});
  });
});