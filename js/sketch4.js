let c,temp 
function setup() {
	o=createCanvas(windowWidth, windowHeight);
	background(185,200,213);
	temp = createGraphics(windowWidth, windowHeight)
	colorMode(HSB)
}

function draw() {
	temp.image(o,0,0)
	image(temp,2,0,width+sin(frameCount/50),height+sin(frameCount/50))
				
	noFill()
	strokeWeight(100)
	let r = noise(frameCount/100)*mouseX/1.5
	let deg = frameCount/50
	let colorR = noise(frameCount/100,2000)*370
	let colorG = noise(frameCount/100,3000)*255
	let colorB = noise(frameCount/100,4000)*255
	stroke(colorR,colorG,colorB,50)
	arc(mouseX,mouseY,r,r,deg,50);
}