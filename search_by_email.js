function search_by_email(){
  var email = document.getElementById('email').value;
    yam.platform.request({
        url: "users/by_email.json?email="+email,     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "User_Email": email,
        },
        success: function (user) { //print message response information to the console
          alert("The request was successful.");
          console.dir(user);
          var i;
          for (i = 0; i < user.length; i++) {
            console.log(user[i].full_name);
          }
        },
        error: function (user) {
          alert("There was an error with the request.");
        }
      });
}
