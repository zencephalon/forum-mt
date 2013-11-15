Meteor.startup(function () {
  Meteor.publish("conversations", function() {
    return Conversations.find({});
  });

  Meteor.publish("authors", function() {
    return Authors.find({});
  })

  Meteor.publish("comments", function(_id) {
    return Comments.find({conv: _id});
  })
});