const user = function(data) {
  return `${data} is logged in`;
}

// console.log(helper('Alex'));

let id = function(id) {
  return `${id}`;
};

let email = function(email) {
  return email;
}

// module.exports = helper;  // Exporting the helper() function


// Returning the functions as objects

/*  module.exports.user = user;
    module.exports.id = id;
    module.exports.email = email;   */


// Alternative way of returning the functions as objects

module.exports = {
  user: user,
  id: id,
  email: email
}
