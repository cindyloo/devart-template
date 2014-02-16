researching edge detection algorithms.  I'm familiar with Canny and Sobel/Prewitt, not sure what combination
will result in my desired form....

I took a Coursera course this summer- it was really challenging wrapping my head around the Maths
"Coding The Matrix: Linear Algebra Through Computer Science Application".  Weekly course assignments
learning Python AND discrete mathematics proved too much for a contiguous 8 weeks during my summer break,
but I really learned a huge amount.  Understanding dot- and cross-matrix calculations is a pre-requisite for hacking
digital images/video... I like to refer to the maths as the May-tricksies...

![](http://edgedetection.webs.com/)

![](https://raw.github.com/cindyloo/devart-template/master/project_images/sobel.png)
![](https://raw.github.com/cindyloo/devart-template/master/project_images/prewitt.png)
![](https://raw.github.com/cindyloo/devart-template/master/project_images/prewitt2.png)




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
