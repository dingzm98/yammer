function messages_inthread(){
  var threadid = document.getElementById('inthreadid').value;
    yam.platform.request({
        url: "messages/in_thread/"+threadid+".json",     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "Thread_id": threadid,
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
