createAuthor = function(user) {
  author = {};
  author['user_id'] = user._id;
  author['name'] = user.username;
  author['join_date'] = user.createdAt;
  author['conversations'] = 0;
  author['comments'] = 0;
  author['subscriptions'] = {};
  Authors.insert(author);
};

Accounts.onCreateUser(function(options, user) {
  console.log(options);
  console.log(user);
  createAuthor(user);
  return user;
});