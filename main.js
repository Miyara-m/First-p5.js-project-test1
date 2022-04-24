function setup(){
    canvas = createCanvas(300,310);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    }
    function preload(){   
    }
    function draw(){
        image(video, 0, 0, 300, 300);
    }
    function takeSnapshot(){
    save('MyBirthdayPhoto.png')
    }
    function modelLoaded(){
        console.log('PoseNest Is Initialized');
    }