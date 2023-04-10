function preload() {

}


function setup() {
canvas= createCanvas(300, 300);
canvas.position(540, 250);
video= createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet= ml5.poseNet(video, modeLoaded);
poseNet.on("pose", gotPose)
}

function modeLoaded() {
    console.log("posenet is initialized");
}

function gotPose(result) {
if (result.length > 0) {
    console.log(result);
    console.log("nose x = " + result[0].pose.nose.x);
    console.log("nose y = " + result[0].pose.nose.y);
}
}

function draw() {
image(video, 0, 0, 300, 300);
}

function snapshot() {
    save("myPhoto");
}