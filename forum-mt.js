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