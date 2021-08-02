function setup() {
  createCanvas(800,400);
var spaceCraft = createSprite(400, 200, 50, 50);
var ISS = createSprite(400, 200, 50, 50);
}

function preload(){
bgimg = loadImage .jpj

}

function draw() {
  background(255,255,255);  

  if  (!hasDocked){spaceCraft.x = spaceCraft.x+random (-1,1)
  }
  if (keyDown("LEFT_ARROW")){
    spaceCraft.x = spaceCraft.x -2
  }
  if (keyDown("RIGHT_ARROW")){
    spaceCraft.x = spaceCraft.x -2
  }
  if (keyDown("DOWN_ARROW")){
    spaceCraft.y = spaceCraft.y -2
  }
  if (keyDown("UP_ARROW")){
    spaceCraft.y = spaceCraft.y -2
  }

  drawSprites();
}