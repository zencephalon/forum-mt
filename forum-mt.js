Authors = new Meteor.Collection("authors");
Conversations = new Meteor.Collection("conversations");
Comments = new Meteor.Collection("comments");
Mentions = new Meteor.Collection("mentions");

if (Meteor.isServer) {
  createAuthor = function(user) {
    author = {};
    author['user_id'] = user._id;
    author['name'] = user.username;
    author['join_date'] = user.createdAt;
    author['conversations'] = 0;
    author['comments'] = 0;
    author['subscriptions'] = {};
    Authors.insert(author);
  };

  Accounts.onCreateUser(function(options, user) {
    console.log(options);
    console.log(user);
    createAuthor(user);
    return user;
  });

  Meteor.startup(function () {
    Meteor.publish("authors", function() {
      return Authors.find({});
    });

    // code to run on server at startup
  });
}


if (Meteor.isClient) {
  Meteor.subscribe("authors");

  Template.hello.greeting = function () {
    if (Authors.findOne({}) !== undefined)
      return Authors.findOne({}).name;
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });
}