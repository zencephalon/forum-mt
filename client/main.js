Meteor.subscribe("conversations");
Meteor.subscribe("authors");

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Deps.autorun(function() {
  Meteor.subscribe("comments", Session.get("current_conversation"));
});