function likemessage(){
  var messageid = document.getElementById('likemessage').value;
    yam.platform.request({
        url: "messages/liked_by/current.json,     //this is one of many REST endpoints that are available
        method: "POST",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "message_id": messageid,
        },
        success: function (user) { //print message response information to the console
          alert("The request was successful.");
        },
        error: function (user) {
          alert("There was an error with the request.");
        }
      });
}
