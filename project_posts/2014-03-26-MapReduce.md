pretty basic map/reduce functions in CouchDB that will aggregate tags and suss out the more popular words
and use that to tie the frames together.

eg, if I type "where did it all go? #whoknows"
and Martha types "where am i?"
the "where" will aggregate to the sum of two, so that would be one word that connects two cartoon
"frames" together.

if Ryan comes in and types/says "madness, madness, everywhere #whoknows", then madness and #whoknows would also
have a sum of 2.	
```
function(doc) {
  if (doc.tags){
	var num,words
	for (words in doc.tags){
		num = doc.tags[words]
		val = num
		emit(words, num);
	}
	}
}
function(words, num){
	return sum(num)
}

"#whoknows"	
2
"all"	
1
"am"	
1
"did"	
1
"everywhere"	
1
"go"	
1
"i"	
1
"it"	
```
1
"madness"	
2
"where"	
2


To insert a new document, the js service will live here, and a parser will have tallied up the strings,
although I am pretty sure I could do this in CouchDB itself - parse the description and have it create
the keys ...

app.get("/insert", function(request,response) {
    	db.insert({"name":"caroline", "description":"look at me!","keys":{"look":1,"at":1,"me":1}});
    });call will look pretty much like this
