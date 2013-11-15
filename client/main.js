Meteor.subscribe("conversations");

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Deps.autorun(function() {
  Meteor.subscribe("comments", Session.get("current_conversation"));
});