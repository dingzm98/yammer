function messages_about_topic(){
  var about_topic_id = document.getElementById('about_topic_id').value;
    yam.platform.request({
        url: "messages/about_topic/"+about_topic_id+".json",     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "Topic_ID": about_topic_id,
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
