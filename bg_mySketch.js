// noise 更穩定的隨機數 連續的亂數 
let particles=[]
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
	colorMode(HSB)
	for(var o=0; o<height; o+=20){
		for(var i=0; i<width; i+=15){
			particles.push({
			x:i,
			y:o,
			clr:color(random(200,300),90,100)
			})
		}
	}
}

function draw() {
	noStroke()
	background(0,0.01)
	for(var i=0; i<particles.length; i++){
		let p= particles[i]
		fill(p.clr)
		ellipse(p.x,p.y,5)
		p.x+=(noise(p.x/200,p.y/200,1000)-0.5)*3
		p.y+=(noise(p.x/200,p.y/200,10000)-0.5)*3
	}
	// for(var o=0; o<height; o+=20){
	// 	for(var i=0; i<width; i+=20){
	// 		fill(int(noise(i/200, o/200, frameCount/100)*255/50)*50)
	// 		rect(i,o,30,200)
	// 	}
	// }
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)


}