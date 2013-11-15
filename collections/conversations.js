Conversations = new Meteor.Collection("conversations");

createConversation = function(title, text, author_id) {
  conv_id = Conversations.insert({
    title: title,
    author: author_id,
    comments: 0,
    date: new Date(),
  });
  createComment(conv_id, text, author_id);
  return conv_id;
}