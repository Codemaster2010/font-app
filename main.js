function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150)
    poseNet = ml5.poseNet(video, modelLoaded);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results){
    leftWristX = results[0].pose.leftWristX.x;
    rightWristX = results[0].pose.rightWristX.x;
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
    if(results.length > 0)
    {
      console.log(results);

      leftWristX = results[0].pose.leftWristX.x;
      rightWristX = results[0].pose.rightWristX.x;
      difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background('#f3f6f4');
    textSize(20);
    fill('#FFE787');
    text('Malachi', 50, 400)
}