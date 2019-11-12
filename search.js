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
          console.dir(search);
          console.log(search.messages.messages[0].content_excerpt);
          var i;
          for (i = 0; i < search.count.messages; i++) {
            console.log(search.messages.messages[i].content_excerpt);
          }
          
        },
        error: function (search) {
          alert("There was an error with the request.");
        }
      });
}
