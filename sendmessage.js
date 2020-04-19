function sendyam(groupin,contentin,tagin){
  yam.platform.request({
    url: "messages.json",     //this is one of many REST endpoints that are available
    method: "POST",
    data: {    //use the data object literal to specify parameters, as documented in the REST API section of this developer site
      "body": contentin,
      "group_id": groupin,
      "topic1": tagin
    },
    success: function (user) { //print message response information to the console
      alert("The request was successful.");
    },
    error: function (user) {
      alert("There was an error with the request.");
    }
  });
 }

function sendmessage(){
  var groupid = document.getElementById('sendgroup').value;
  var content = document.getElementById('sendcontent').value;

  let req = new XMLHttpRequest();
        req.open('POST', 'https://cors-anywhere.herokuapp.com/http://a089ec8b4801511eaaf7502ed822b4dd-589797411.us-west-2.elb.amazonaws.com/mml-test-api');
        req.setRequestHeader('Content-Type', 'application/json');
        req.onload = function() {
            let response = JSON.parse(req.responseText);
            console.log('success');
            var tag = response[0];
            console.log(tag);
            sendyam(groupid,content,response[0]);
            
        }
        let sendData = JSON.stringify(
            {
                "body": content
              }
            );
        req.send(sendData);
      

        


      
        
}
