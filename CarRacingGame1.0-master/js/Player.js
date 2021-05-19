class Player{

  constructor(){
this.index = null;
this.distance = 0;
this.name = null;
this.rank = null;
}

GetCount(){
  var PlayerCountRef =  database.ref('PlayerCount');
  PlayerCountRef.on("value", function(data){PlayerCount = data.val();})
}
updateCount(count){
  database.ref('/').update({
      PlayerCount : count
  }) // '/' refers entire database
}
update(){
// updates name according to index of the player
  var playerindex = "Players/player"+this.index;
database.ref(playerindex).set({
name:this.name,distance:this.distance,rank:this.rank
})
}

 getCarAtEnd(){
database.ref('playerRank').on("value",(data)=>{
  this.rank=data.val();
})
}

static updateCarAtEnd(rank){
  database.ref('/').update({
    playerRank:rank
  })
}

static getPlayerInfo(){
   var playerInfoRef = database.ref('Players');
   playerInfoRef.on("value",(data)=>{
       allPlayers=data.val();
   })
}
}