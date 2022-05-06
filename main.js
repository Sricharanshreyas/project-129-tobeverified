sound = "";
sound2 = ""; 
leftWristx = 0;
leftWristy = 0;
RightWristx = 0;
RightWristy = 0;
scoreleftWrist=0;
scoreRightWrist=0;
function preload(){
sound = loadSound("music.mp3");
sound2 = loadSound("music2.mp3");
}
function setup(){
 canvas = createCanvas(450, 400);
 canvas.position(400, 200);
 video = createCapture(VIDEO);
 video.hide(); 
 posenet = ml5.poseNet(video, modelloaded);
 posenet.on("pose", gotposess);
}
function draw(){
 image(video, 0, 0, 450, 400);
 fill("Red");
 stroke("Blue");
 
 if(scoreleftWrist > 0.02){
   fill("Red");
   stroke("Blue");
   circle(leftWristx,leftWristy,25);
   integer=Number(leftWristy);
   float=floor(integer);
   sound.play();
 }
 if(scoreRightWrist > 0.02){
    fill("Red");
    stroke("Blue");
    circle(RightWristx.RightWristy,25);
    numerical=Number(RightWristy);
    flight=floor(numerical);
    sound2.play();
 }
 if(scoreleftWrist.isPlaying() == false){
    sound="";
 }
 else{
    sound.play();
 }
 if(scoreRightWrist.isPlaying() == false){
    sound2="";
 }
 else{
    sound2.play();
 }
 
}
function modelloaded(){
   console.log("Posenet is loaded");
}
function gotposess(results){
  if(results.length > 0){
     console.log(results);
     leftWristx = results[0].pose.leftWrist.x;
     leftWristy = results[0].pose.leftWrist.y;
     RightWristx = results[0].pose.rightWrist.x;
     RightWristy = results[0].pose.rightWrist.y;
     console.log("leftWristx ="+leftWristx+"leftwristy ="+leftWristy);
     console.log("RightWristx ="+RightWristx+"RightWristy ="+RightWristy);
     scoreleftWrist= results[0].pose.keypoints[9].score;
     console.log("ScoreLeftWrist="+scoreleftWrist);
     scoreRightWrist= results[0].pose.keypoints[10].score;
     console.log("ScoreRightWrist="+scoreRightWrist);
  }
}
function play(){
   sound.play();
   sound2.play();
}
