var getUser = (id, cb) => {
  var user = {
    id: 31,
    name: 'Gopal'
  }
  setTimeout(function() {
    cb(user);
  }, 3000);
};


getUser(31, (data) => {
  console.log(data);
});