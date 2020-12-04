function setup() {
	createCanvas(windowWidth, windowHeight);
	background(183,200,213);
}

function draw() {
	translate(width/2,height/2);
	noFill();
	background(183,200,213);
	stroke(255);
	strokeWeight(1);
	
	for(var i=0;i<30;i++){
		let angDelta = 2*PI/(i+5)
		strokeWeight( (i % 5)*1 );
		for(var o=0;o<10;o++){
			stroke( i,249-mouseY,mouseX+10,60);
			var stAng = noise(i*10,frameCount/4000)*30 + o*2*PI/10 + mouseX/50/o + frameCount/(100+mouseY)
			var r = i * 50 + sin(o*10+mouseY/20)*30
			arc(0,0,r,r,stAng+angDelta*o, stAng+angDelta*(o+1) );
		
		}
	}
}