var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
}



function draw() 
{
  background("pink");

  if(keyDown(RIGHT_ARROW)){
    box.x = box.x+5;
  }

  if(keyDown(LEFT_ARROW)){
    box.x = box.x-5;
  }

  if(keyDown(UP_ARROW)){
    box.y = box.y-5;
  }

  if(keyDown(DOWN_ARROW)){
    box.y = box.y+5;
  }

  if (box.x > 398 ) {
    box.x = 395;
  }

  if (box.x < 5) {
    box.x = 10;
  }

  if(box.y > 398){
    box.y = 395;
  }

  if (box.y < 4) {
    box.y = 6;
  }
  drawSprites();
}




