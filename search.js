function search(){
  var search1 = document.getElementById('search').value;
    yam.platform.request({
        url: "search.json",     //this is one of many REST endpoints that are available
        method: "GET",
        data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
          "search": search1,
          "page": "1",
          "num_per_page":"4",
          "search_group":"9734488064",
        },
        success: function (search) { //print message response information to the console
          alert("The request was successful.");
          var obj = JSON.parse(search)
          console.dir(search);
          console.log(obj.message);
        },
        error: function (search) {
          alert("There was an error with the request.");
        }
      });
}
