//The setup function only happens once
let pg;
let y = 100;
var tilt = 0;
var slice = 0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
	pg = createGraphics(400, 250);
}

//The draw function happens over and over again
function draw() {
	
	textSize(55);
	textFont('Helvetica');
	textAlign(CENTER);
	fill("#7F7B80");
	noStroke();
	text('Weee!', 333, 333);
	
	
	fill("#8C3698");
  	noStroke();
  	ellipse(mouseX, mouseY, 90, 60);
	
	pg.background(51);
  	pg.noFill();
  	pg.stroke(255);
  	pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);


  	
  	fill(0, 12);
 	rect(0, 0, width, height);
  	fill(255);
	fill("#EB28FF");
	stroke("#00E3FF");
	strokeWeight (3);
  	triangle(0,tilt, tilt, tilt, tilt, 500);


  	fill("#00E3FF");
	stroke("#EB28FF");
  	triangle(slice, 0, 0, 500, slice, slice);
	



}

function mouseDragged (){
	tilt = tilt + 5;
	if (tilt >2000) {
		tilt = 0;
	}
	slice = slice +7;
		if (slice >2000) {
		slice = 0;
	}
}

 




