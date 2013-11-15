Comments = new Meteor.Collection("comments");

createComment = function(conv_id, text, author_id) {
  Comments.insert({
    text: text,
    author: author_id,
    conv: conv_id,
    date: new Date()
  });
  Conversations.update(conv_id, {"$inc":{comments:1}});
}