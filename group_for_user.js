function group_for_user(){
    yam.platform.request({
        url: "groups/for_user/:User_Id.json.json",     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "letter": "a",
          "page": "2",
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
