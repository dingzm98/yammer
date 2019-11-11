function current_network(){
    yam.platform.request({
        url: "networks/current.json",     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "include_suspended": "false"
        },
        success: function (current_network) { //print message response information to the console
          alert("The request was successful.");
          console.dir(current_network);
        },
        error: function (current_network) {
          alert("There was an error with the request.");
        }
      });
}