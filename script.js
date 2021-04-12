var username = document.getElementById ('username').value;
var password = document.getElementById ('password').value;
var users = {
    username: "user1",
    password: "pass1"
};



document.getElementById("submit").onclick = function () {
  if (username=="" || password=="") {
    alert('please fill in');
    return false;
  }
  else {
    if (username == users.username && password == users.password)
       { alert('incorrect');
    } else {
        alert('try again');
    }
     return false;
    }
}