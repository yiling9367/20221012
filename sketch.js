function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  stroke(255) //框線顏色(255為白色)
  noFill() //不要充滿顏色
  rectMode(CENTER)//以方框中心點為座標點

  ellipse(25,25,50)//方框座標
  rect(25+50,25,50)
  ellipse(50+50,50,25)


  for(var i=0;i<(width/50);i=i+1)
  {
  ellipse(25+(i*50),25,50)
  rect(25+(i*50),25,50)
  ellipse(50+(i*50),50,25)
  }

  

  for(var j=0;j<(height/50);j++){
   for(var i=0;i<(width/50);i=i+1) 
   {
    ellipse(25+(i*50),25+(j*50),50)
    rect(25+(i*50),25+(j*50),50)
    ellipse(50+(i*50),50+(j*50),25)
   }

}

}
