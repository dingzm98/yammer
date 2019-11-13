function current_user(){
    yam.platform.request({
        url: "users/current.json",     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "page": "2",
        },
        success: function (user) { //print message response information to the console
          alert("The request was successful.");
          console.dir(user.full_name);
        },
        error: function (user) {
          alert("There was an error with the request.");
        }
      });
}
