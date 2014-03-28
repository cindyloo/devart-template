var express = require('express')
   , nano    = require('nano')('http://localhost:5984')
   , app     = express()
   , db_name = "storyfaceme"
   , db      = nano.use(db_name);



  function insert_doc(doc, tried) {
    db.insert(doc,
      function (error,http_body,http_headers) {
        if(error) {
          if(error.message === 'no_db_file'  && tried < 1) {
            // create database and retry
            return nano.db.create(db_name, function () {
              insert_doc(doc, tried+1);
            });
          }
          else { return console.log(error); }
        }
        console.log(http_body);
    });
  }
//get image filename and location from osc, and all info
  //insert_doc({nano: true}, 0);
  
  
    // {} for empty body as parameter is required but will be piped in

app.get("/", function(request,response) {
      response.send(
      	db.view("keys_view", "keys_view",function(err, body) {
		  	if (err) {
			console.log(err);
			callback(err, null);
		  	}
		  	else if (body.rows.length == 0) {
			  var msg = 'No match for: ' + view + ', ' + params;
			  console.log(msg);
			  callback(msg, null);
			}
			else {
				console.log("success!");
				var event = body.rows[0].value;
				console.log(event);
				}
  		  })
  		);
    });
    
    app.get("/insert", function(request,response) {
    	db.insert({"name":"caroline", "description":"look at me!","keys":{"look":1,"at":1,"me":1}});
    });





app.listen(3333);
console.log("server is running. check expressjs.org for more cool tricks");
