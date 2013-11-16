Template.comment_form.events({
  'click input.comment-post': function() {
    conv_id = Session.get("current_conversation");
    author_id = getAuthor();
    text = $('#comment-text').val();
    createComment(conv_id, text, author_id);
  }
})