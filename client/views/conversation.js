Template.conversation.conversation = function() {
  return Conversations.findOne(Session.get("current_conversation"));
}

Template.conversation.comments = function() {
  return Comments.find({conv: Session.get("current_conversation")}, {sort: {date: -1}}).map(function(comment) {
    comment.author = Authors.findOne(comment.author).name
    return comment;
  });
}