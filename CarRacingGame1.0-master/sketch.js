var canvas;
var backgroundImg;
var GameState = 0;
var PlayerCount;
var database;
var form;
var player;
var game;
var allPlayers;
var car1;
var car2;
var car3; 
var car4;
var cars;


function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  groundImg = loadImage("images/ground.png");
 // startUpImg = loadImage("images/startup_page_img.jpg") ;
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.GetState();
  game.start();
}

function draw(){
 //background(startUpImg);
  if(PlayerCount===4){
    game.update(1);
  }

  if(GameState===1){
    clear();
    game.play();
  }

  if(GameState === 2){
    game.End();
  }
}

