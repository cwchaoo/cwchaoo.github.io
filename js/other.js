let colors = "233d4d-fe7f2d-fcca46-a1c181-619b8a-fff".split("-").map(a=>"#"+a)

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	stroke(255)
	noFill()
}

function divide(x,y,s){
	if (noise(x,y)<0.5 && s>40 || s>100){
		divide(x,y,s/2)
		divide(x+s/2,y,s/2)
		divide(x,y+s/2,s/2)
		divide(x+s/2,y+s/2,s/2)
		
	}else{
		// line(x,y,x+s,y+s)
		let ss = pow(s,0.65)
		let index = int(noise(mouseX,mouseY,s)*1000)
		// stroke()
		let cc =color(colors[index%5+1])
		// fill(colors[(index+1)%4+1])
		

		for(var o=0;o<5;o++){
			cc.setAlpha(noise(mouseX,mouseY,o)*50+200)
			stroke(cc)
			strokeWeight(noise(x+i*50,y+o,500+frameCount/40)*2 + random(2))
			push()
				translate(mouseX,mouseY)
				rotate(int(noise(x*o,y*o,s)*200)*PI/12)
				scale(o/10+1)
				
				rotate(PI/4)
				beginShape()
				let sss = s*sqrt(2)
				for(var i=0;i<sss;i+=2){
					let amp =  noise(x,y,5000+o+i/50)*ss*sqrt(0.1+sss/2- (abs(i-sss/2)))/4
					let freq = 0.1+noise(x,y,o)*100
					let ang = i/(100/noise(x,y,55000+o+i/100))+frameCount/(freq) + noise(x,y,o)*40
					let len = i
					vertex(len,amp*cos(ang+i/freq + o))
					
				}	
				endShape()
			pop()
		}
	}
}

function draw() {
	noStroke()
	fill(colors[0])
	rect(0,0,width,height)
	noFill()
	divide(0,0,width)
	 strokeWeight(20)
	
}