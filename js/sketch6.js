let t=0, i, z;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(185, 200, 213);
	noStroke();
	t += (mouseY / height) * 3;
	for (i=0; ++i<100;) { 
		z = n(0) -t;
	  z*= z/99;
		fill(n(7), n(8), n(9), 100);
	  ellipse(n(2),n(3),z,z);
	}
}

function n(a){
	return noise(t/2000+a+i)*512;
}

function mousePressed() {
	t = 0;
}