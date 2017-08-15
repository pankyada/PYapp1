//$.getJSON('json/actor.json', function(data) {
//  console.log(data);
//});

function login() {

  var user = document.getElementById('username');
  var password = document.getElementById('password');
  var loggedin = false;

  $.ajax({
    url: 'json/actor.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data) {
      $(data.users).each(function(index, value) {
        if ((value.userName == user.value) && (value.password == password.value)) {
          console.log(value.userName);
          console.log(user.value);
          console.log(value.password);
          console.log(password.value);
        }
      });
    }
  });


  alert(loggedin);
  if(loggedin == true) {
    alert("You are loggged in Successfully as "+ user.value);
  } else {
    alert("Login Failed, check your Username/Password");
  }
}
  /*if (user.value == coruser) {

    if (password.value == corpass) {
      window.alert("you are logged in as " + user.value);
    } else {
      window.alert("Incorrect userName or password");
    }
  } else {
    window.alert("Incorrect userName or password");

  }
}
*/
