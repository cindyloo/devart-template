for ease of documentation, the comic strip feed is combined into the same window as the video feed.
In installation-land, each feed would have its own (large) screen (see cover photo).

the comic strip stutters on purpose - I am repainting the video every 2 seconds.  The original Mickey Mouse and Popeye had a kind of jitter between cells that I want to reproduce....  I need to add more scratchy effects etc...

I am currently typing into the text balloon.  TO DO:  enable the user to move the box around the view, and to change the box to various and well-known comic strip balloons [the comment, the whisper, the gasp, the VO, etc].  Also, get comic strip feed to self-sort by tags....

http://www.youtube.com/watch?v=0mTRI24ZoFc

I delved into node-opencv only to get a lazy symbol binding error.  I thought it might make sense
to just code everything in javascript, but as it is now, I'm going to just send it via http/ofxJSON.
the node.js and couchdb document and views are rolling fine though.

JSON structure:
{
id:"12345",
name:"cindy",  //if provided.. twitter handle?
description: "the #powerfulplay goes on",
tags: {["goes":1,"on":1, "#powerfulplay":1, "the":1]}
}


