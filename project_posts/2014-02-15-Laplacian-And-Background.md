so, the openCV examples in Mastering OpenCV With Practical Computer Vision Projects are pretty great. 
The simple kernels I was using aren't nearly as good as the Laplacian filter 
I've got a sketch-image that I am going to work with for now.  I'll come back to tweaking the 
sketch- making it more scratchy/grainy-what have you.  I learned today about scale invariance and contour continuation...

```
    Mat gray;
    cv::cvtColor(frame, gray, CV_BGR2GRAY);
    const int MEDIAN_BLUR_FILTER_SIZE = 11;
    medianBlur(gray, gray, MEDIAN_BLUR_FILTER_SIZE);
    Mat edges;
    const int LAPLACIAN_FILTER_SIZE = 5;
    cv::Laplacian(gray, edges, CV_8U, LAPLACIAN_FILTER_SIZE);
    
    Mat mask;
    const int EDGES_THRESHOLD =80;
    threshold(edges, mask, EDGES_THRESHOLD, 255, THRESH_BINARY);
       // cv::erode(fore,fore,cv::Mat());
        //cv::dilate(fore,fore,cv::Mat());
       // cv::findContours(fore,contours,CV_RETR_EXTERNAL,CV_CHAIN_APPROX_NONE);
       // cv::drawContours(frame,contours,-1,cv::Scalar(0,0,255),2);
        drawMat(gray, 0,0);
    //cv::erode(edges,edges, cv::Mat());
    //cv::dilate(edges,edges, cv::Mat());
    cv::bitwise_not(edges, edges);
        drawMat(edges, 640,0);
        
```    

![](https://raw.github.com/cindyloo/devart-template/master/project_images/laplacian2.png)

Background subtraction on a flat video feed is next on the list, and seems more confounding than doing it with the Kinect and the ofxKinect library.  I was working with it today, I'm grasping the power of the Mat object much better although first derivative and related functions are still confounding me because cv::subtract etc are still not producing what I expect. Eg, right now the foreground and the background mask are blended... need to modify the alpha channel I guess...

