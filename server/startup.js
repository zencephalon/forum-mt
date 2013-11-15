Meteor.startup(function () {
  Meteor.publish("authors", function() {
    return Authors.find({});
  });
});