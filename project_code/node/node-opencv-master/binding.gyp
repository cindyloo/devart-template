{
  "targets": [{ 
      "target_name": "opencv"
      , "sources": [ 
          "src/init.cc"
        , "src/Matrix.cc"
        , "src/OpenCV.cc"
        , "src/CascadeClassifierWrap.cc"
        , "src/Contours.cc"
        , "src/Point.cc"
        , "src/VideoCaptureWrap.cc"
        , "src/CamShift.cc"
        , "src/HighGUI.cc"
        , "src/FaceRecognizer.cc"
        ]
      , 'libraries': [
          '<!@(pkg-config --libs opencv)',
	'-framework OpenCL',
	'-lc++ -lc++abi'
        ]
        
      # For windows
      ,'include_dirs': [
          '<!@(pkg-config --cflags opencv)'
          ]
          
      , 'cflags': [
            '<!@(pkg-config --cflags "opencv >= 2.3.1" )'
            , '-Wall'
          ]
      , 'cflags!' : [ '-fno-exceptions']
      , 'cflags_cc!': [ '-fno-rtti',  '-fno-exceptions']
      , "conditions": [
        ['OS=="mac"', {
          # cflags on OS X are stupid and have to be defined like this
          'xcode_settings': {
	'MACOSX_DEPLOYMENT_TARGET':'10.7',
            'OTHER_CFLAGS': [
	'-g',
              "-mmacosx-version-min=10.8",
              "-std=c++11",
              "-stdlib=libc++",
	-03,
              '<!@(pkg-config --cflags opencv)'
            ]
            , "GCC_ENABLE_CPP_EXCEPTIONS": "YES"
          }
        }]        
      
    ]
  }]
}

