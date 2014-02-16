# Flat New World
or The Land of the H(ij)acked Self

## Cindy Sherman Bishop, @cindyloo


Flat New World
or The Land of the H(ij)acked Self
Mark-making and story-telling are innate human traits.  This interactive installation/app examines portrait-making by compositing a cartoon-feed (perhaps stop-motion/frame extraction] over the "h(ij)acked" live video stream.  Participants can author additional images and/or text bubbles to augment the feed (via app touch or oF hand-tracking). As such, it examines the proliferation and consumption of the modern day digital "portrait."

As an artist, I have sketched and painted all my life.  With the advent of the digital selfie, I find this digital portraiture very curious. Are selfies portraits or are they more like caricatures?  If portraiture may be defined as a captured moment in time embeding an emotional quality then yes, they are portraits... I think?  How about our ever-growing video library? Where is the creative process now that we do not require painterly expertise, a skilled hand, nor expensive photography equipment?   Furthermore, how are these images interpreted and consumed by others?

As a software developer, I will reverse-engineer the digital image-making process.  I want to deconstruct digital video via opencv and go backwards into the nexus of portraiture, promoting the tenderness of a line, the emotional connection to a moment in time.  I am curious to see this composited live video, broken down frame-by-frame, and reconstructed not as a carbon-copy of the present moment but more of an artistic interpretation.  Can I leverage video's reflexive nature in a commentary about the origin and rise of the selfie? Will this result in merely another avatar or something more meaningful? The installation will capture these individual narratives and compose them into an ongoing mashup movie, a mediated video stream that is more than your average 'selfie' feed, as our data and online identities are more than just fodder for rabid consumption.



#Link to Prototype
coming soon...

[Example Link](http://www.google.com "Example Link")

## Edge detection algorithms...
The opencv::Canny algorithm is fairly easy/straightforward to employ, even more so thanks to Kyle McDonald's [ofxCv lib](https://github.com/kylemcdonald/ofxCv/wiki/Intermediate-Computer-Vision-with-openFrameworks "ofxCv")lib.  If I mess around with the blur, invert, erode and dilate, I get closer to the kind of portrait I want to make... 
```
	if(cam.isFrameNew()) {
        
        blur(cam, inter, 11);
        blur(cam, inter2, 11);
		convertColor(inter, gray, CV_RGB2GRAY);
        Canny(gray, edge, mouseX, mouseY, 3);
        
        threshold(gray, edge2, thresh);
        
        //blur(gray,edge,3);


         invert(inter2, inter2);
        convertColor(inter2, edge3, CV_RGB2GRAY);
         
        Canny(edge3, edge3, mouseX, mouseY, 3);
        invert(edge3,edge3);
        
        erode(edge3, edge3);
        
```

On the other hand, it's good to write code using some of the basic kernels for edge detections so I can play around with internals of line extraction....eg:
```
void ofApp::sobel(){
    
    float kV[3][3] = {-1,0,1,
        -2,0,2,
        -1,0,1};
    
    float kH[3][3] = {-1,-2,-1,
        0,0,0,
        1,2,1};
        
      //or prewitt
       
    float prewittV[3][3] = {1,0,-1,
        1,0,-1,
        1,0,-1};
    
    float prewittH[3][3] = {-1,-1,-1,
        0,0,0,
        1,1,1};

```
## Links to External Libraries
 NOTE: You can also use this space to link to external libraries or Github repositories you used on your project.
openFrameworks
Google web speech or Android API
YouTube API
##[Example Link](http://www.google.com "Example Link")

## Images & Videos
NOTE: For additional images you can either use a relative link to an image on this repo or an absolute link to an externally hosted image.


