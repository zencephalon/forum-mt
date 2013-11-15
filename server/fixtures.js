if (Conversations.find().count() === 0) {
  author = createAuthor({_id: "XXX", username: "zen", createdAt: new Date()});

  conv_id = createConversation("My conversation!", "I love Daria so much!", author._id);
  createComment(conv_id, "Yes, Daria is quite lovely, isn't she?", author._id);
  conv_id = createConversation("Another conversation!", "I love Daria so so so much!", author._id);
  createComment(conv_id, "Yes, Daria is quite lovely, isn't she?", author._id);
}