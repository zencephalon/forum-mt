Conversations = new Meteor.Collection("conversations");

createConversation = function(title, text, author) {
  conv_id = Conversations.insert({
    title: title,
    author: author._id,
    comments: 0,
    date: new Date(),
  });
  createComment(conv_id, text, author);
}