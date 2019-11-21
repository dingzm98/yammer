function messages_private(){
  var newer_than = document.getElementById('private_newer_than').value;
    yam.platform.request({
        url: "messages/private.json",     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "newer_than": newer_than,
          "threaded": true,
          "limit": 5,
        },
        success: function (user) { //print message response information to the console
          alert("The request was successful.");
          console.dir(user);
          var i;
          for (i = 0; i < user.users.length; i++) {
            console.log(user.users[i].full_name);
          }
        },
        error: function (user) {
          alert("There was an error with the request.");
        }
      });
}
