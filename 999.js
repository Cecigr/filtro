function preload() {
    nariz perro = loadImage("https://i.postimg.cc/sXsLdhQ8/nariz-perro-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();


    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
} 

function modelLoaded() {
    console.log("PoseNet está inicializando");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y ="  + noseY);
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(nariz perro, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save("nariz perro.png");
}

noseX=0;
noseY=0;

