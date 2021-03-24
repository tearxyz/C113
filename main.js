function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
  


  tint_color = "";
}



function draw() {
  
  fill(128, 0, 128);
  stroke(128, 0, 128);
  circle(80, 40, 70);
  circle(80, 430, 70);
  circle(500, 40, 70);
  circle(500, 430, 70);
  fill(255, 215, 0);
  stroke(255, 215, 0);
  rect(115,30,350,20);
  rect(115,420,350,20);
  rect(70,75,20,320);
  rect(490,75,20,320);
  
  image(video, 130, 80, 300, 300);
  tint(tint_color);
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}

