function sendmessage(){
  var groupid = document.getElementById('sendgroup').value;
  var content = document.getElementById('sendcontent').value;
    yam.platform.request({
        url: "messages.json",     //this is one of many REST endpoints that are available
        method: "POST",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "body": content,
          "group_id": groupid,
          "topic1": "tag",
        },
        success: function (user) { //print message response information to the console
          alert("The request was successful.");
        },
        error: function (user) {
          alert("There was an error with the request.");
        }
      });
}
