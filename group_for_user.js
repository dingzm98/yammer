function group_for_user(){
  var useridg = document.getElementById('userid').value;
    yam.platform.request({
        url: "groups/for_user/"+useridg+".json",     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "User_Id": useridg,
        },
        success: function (user) { //print message response information to the console
          alert("The request was successful.");
          console.dir(user);
        },
        error: function (user) {
          alert("There was an error with the request.");
        }
      });
}
