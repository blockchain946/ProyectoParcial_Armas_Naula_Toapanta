const User = require('../models/user');

class UserFactory {
  static createUser(data) {
    return User.build(data);
  }
}

module.exports = UserFactory;