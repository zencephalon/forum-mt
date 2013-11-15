if (Conversations.find().count() === 0) {
  author = createAuthor({_id: "XXX", name: "zen", join_date: new Date()});

  createConversation("My conversation!", "I love Daria so much!", author);
}