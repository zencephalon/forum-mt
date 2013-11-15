Comments = new Meteor.Collection("comments");

createComment = function(conv_id, text, author) {
  Comments.insert({
    text: text,
    author: author._id,
    conv: conv_id,
    date: new Date()
  });
  Conversations.update(conv_id, {"$inc":{comments:1}});
}