function messages_sent(){
  var newer_than = document.getElementById('sent_newer_than').value;
    yam.platform.request({
        url: "messages/sent.json",     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "newer_than": newer_than,
          "threaded": true,
          "limit": 10,
        },
        success: function (user) { //print message response information to the console
          alert("The request was successful.");
          console.dir(user);
          var i;
          for (i = 0; i < user.messages.length; i++) {
            console.log(user.messages[i].content_excerpt);
          }
        },
        error: function (user) {
          alert("There was an error with the request.");
        }
      });
}
