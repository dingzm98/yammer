function search(){
    yam.platform.request({
        url: "search.json",     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "search": "Howdy",
          "page": "1",
          "num_per_page":"3",
          "search_group":"9734488064",
        },
        success: function (search) { //print message response information to the console
          alert("The request was successful.");
          console.log(search.message);
        },
        error: function (search) {
          alert("There was an error with the request.");
        }
      });
}
