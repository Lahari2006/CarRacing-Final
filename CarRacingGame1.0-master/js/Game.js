class Game{

  constructor(){

}

GetState(){
  var GameStateRef =  database.ref('GameState');
  GameStateRef.on("value", function(data){GameState = data.val();})
}
update(state){
  database.ref('/').update({
      GameState : state
  }) // '/' refers entire database
}
async start(){
  if (GameState === 0)
{
player = new Player();
var playerCountRef = await database.ref('PlayerCount').once("value");
if(playerCountRef.exists()){
  PlayerCount = playerCountRef.val();
  player.GetCount();
}


form = new Form();
form.display();
}

car1 = createSprite(100,200);
car1.addImage(car1_img);
car2 = createSprite(300,200);
car2.addImage(car2_img);
car3 = createSprite(500,200);
car3.addImage(car3_img);
car4 = createSprite(700,200);
car4.addImage(car4_img);
cars = [car1,car2,car3,car4];
}

play(){
  form.hide();
  Player.getPlayerInfo();
  player.getCarAtEnd();
  

  if(allPlayers !== undefined){
    background(groundImg);
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
     
      var index = 0;
      var x = 175;
      var y;
     
      for(var plr in allPlayers){ //plr is a variable created to take the data from each player
          index = index+1;
         x=x+270;

         // x = x+200;
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
          if(index === player.index){
            stroke(10);
            fill("yellow");
            ellipse(x,y,60,60);
              cars[index-1].shapeColor = "red";


          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          }
  }
} 
if(keyIsDown(UP_ARROW)&& player.index !== null){
player.distance+=50;
player.update();
}

if(player.distance>5050){
  GameState = 2;
  player.rank += 1; //each time rank increases by 1
  player.update();
  Player.updateCarAtEnd(player.rank);
}

drawSprites();

}
End(){
  console.log("Game Ended");
  form.displayEnd();
}
}