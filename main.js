video="";
status="";

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}

function preload(){
    video=createVideo('.mp4');
    video.hide();

}
function draw(){
    image(video,0,0,480,380);

}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status-detecting objects";

}

function modelLoaded(){
    console.log("modelloaded");
    status=true;
    video.loop();
    video.speed(2);
    video.volume(0);

}
