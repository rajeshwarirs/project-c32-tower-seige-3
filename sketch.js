const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16;
var box17,box18;
var slingshot;
var polygon;
var score;
var bg, backgroundImage;

function preload(){
    getBackgroundImage();
}

function setup(){
createCanvas(1200,600);
engine = Engine.create();
world = engine.world;

ground1 = new Ground(600,500,300,20);
ground2 = new Ground (1000,250,300,20);

box1 = new BoxGreen(500,490,40,50);
box2 = new BoxGreen(545,490,40,50);
box3 = new BoxGreen(590,490,40,50);
box4 = new BoxGreen(635,490,40,50);
box5 = new BoxGreen(680,490,40,50);
box6 = new BoxGreen(920,240,40,50);
box7 = new BoxGreen(965,240,40,50);
box8 = new BoxGreen(1010,240,40,50);
box9 = new BoxGreen(1055,240,40,50);
box10 = new BoxGreen(1100,240,40,50);

box11 = new BoxBlue(545,480,40,50);
box12 = new BoxBlue(590,480,40,50);
box13 = new BoxBlue(635,480,40,50);
box14 = new BoxBlue(965,230,40,50);
box15 = new BoxBlue(1010,230,40,50);
box16 = new BoxBlue(1055,230,40,50);

box17 = new BoxPurple(590,470,40,50);
box18 = new BoxPurple(1010,220,40,50);

polygon = new Polygon(100,50,50,50);
   
slingshot = new Slingshot(polygon.body,{x:100,y:150});

score=0;

}

function draw(){
        if(backgroundImage){
            background(backgroundImage);
        }

    Engine.update(engine);
    strokeWeight(4);

ground1.display();
ground2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();

polygon.display();

slingshot.display();

text("Score: "+ score, 750,40);
textSize(10);

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon.body);
    }
}
async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 time=responseJSON.datetime.slice(11,13);   
if(time>6 && time<18){
    bg="whiteBG.png";
}
else{
    bg="blackBG.png";
    
}
backgroundImage= loadImage(bg);
}