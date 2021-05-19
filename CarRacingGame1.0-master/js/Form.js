class Form{

  constructor(){
      this.input = createInput("Name");
      this.button = createButton("Play");
      this.greeting = createElement('h3');
      this.title = createElement('h2');
      this.reset = createButton("Reset");
  }

  hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
  }

  display(){
     
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2-50,0);
      this.input.position(displayWidth/2-40,displayHeight/2-80);
      this.button.position(displayWidth/2+30,displayHeight/2);
      this.reset.position(displayWidth-100,50);

      
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          PlayerCount+= 1;
          player.index = PlayerCount
          player.update();
          player.updateCount(PlayerCount);
         
          this.greeting.html("Hello " + player.name);
          this.greeting.position(displayWidth/2-40,displayHeight/4);
      })

      this.reset.mousePressed(()=>{
          database.ref('Players').remove();
          player.updateCount(0);
          game.update(0);
          Player.updateCarAtEnd(0);
          textSize(30);
          text("The game has been reset, to continue playing please reload the page.",450,400);
          

      })
  }
  displayEnd(){
      var leaderBoard = createElement('h1');
      leaderBoard.position(displayWidth/2,displayHeight/2-300);
      leaderBoard.style('background','aqua');
      leaderBoard.style('border-radius', '2px');
      leaderBoard.style('padding','50px');
      var display_position=100;
      leaderBoard.position(displayWidth/2-50,display_position);
      textSize(15);
      
      var arr=[];
      arr.push(allPlayers.player1);
      arr.push(allPlayers.player2);
      arr.push(allPlayers.player3);
      arr.push(allPlayers.player4);

      function compareRank(a,b){
          if(a.rank<b.rank){
              return -1; //a comes before b in the sorted list, because a reached first
    
          }
         else if(a.rank>b.rank){
             return 1; //b comes before a in the sorted list, because b reached first
         } 
         else{
             return 0;
         }
      }
      console.log(arr.sort(compareRank));
      
      for(var ele in arr){
          display_position+=20;
          if(arr[ele].rank !== undefined){
              leaderBoard.html(arr[ele].name+": "+arr[ele].rank+"<br>",120,display_position);
          }
      }
   
  }
}
