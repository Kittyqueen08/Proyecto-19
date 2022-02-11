var fondo, aro, cat1, cat2, cono;
var sueloinv;
var arosgrupo;
var conosgrupo;
var score = 0;
var gameState = 1;
var cat3;
function preload(){
    fondo = loadImage("images/fondo.png");
    aro = loadImage("images/aro.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png");
    cono = loadImage("images/cono2.png");
    cat3 = loadAnimation("images/cat3.png");

}

function setup() {
    createCanvas(1200,550);

 gato = createSprite(250, 434);
gato.addAnimation("cat1",cat1);
gato.scale = 0.1;
arosgrupo = new Group();
conosgrupo = new Group();


gato.addAnimation("cat2",cat2);

gato.addAnimation("cat3",cat3);

//fondo1 = createSprite(600,100);
 //fondo1.addImage(fondo);
 //fondo1.velocityX = -2;
 //fondo1.x = fondo1.width/2;
//fondo1.scale = 2;
 sueloinv = createSprite(600,550,800,10);
 sueloinv.visible = false;
 

 
}

function draw() {
    background("#E6E6FA");

    if(gameState === 1){
        if(keyIsDown(32)&& gato.y > 350) {
            gato.velocityY = -10;
            gato.changeAnimation("cat2",cat2);
           
        }
if(gato.isTouching(sueloinv)){

    gato.changeAnimation("cat1",cat1);
}

if(score ===60){
    conosgrupo.setVelocityXEach(0);
    arosgrupo.setVelocityXEach(0);
    

    gameState = 3;  
}

        if(gato.isTouching(arosgrupo)){
            score = score +10;
            arosgrupo.destroyEach();
            
             }
             spawnObstacles();
             Spawnaros();

            
    }

    if(gato.isTouching(conosgrupo)){
        conosgrupo.setVelocityXEach(0);
        arosgrupo.setVelocityXEach(0);
        
        

        gameState = 2;
    }

    if(gameState ===2){
        conosgrupo.destroyEach();
arosgrupo.destroyEach();
textSize(30);
        fill("#663399");
        text("Presiona la tecla hacia arriba",200,200);
    }
    if(gameState === 2 &&keyDown("UP_ARROW")){
conosgrupo.destroyEach();
arosgrupo.destroyEach();
score = 0 ;
gameState = 1;
    }
 
    if(gameState ===3){
        textSize(40);
        fill("#663399");
    text("YOU WIN",300,300);

    conosgrupo.destroyEach();
arosgrupo.destroyEach();

text("Presiona la tecla hacia arriba",200,200);
if(keyDown("UP_ARROW")){
    gameState =1;
    score = 0;
}
    }
//console.log(fondo1.x);

//fondo1.depth = gato.depth;
gato.depth = gato.depth+1;
gato.velocityY = gato.velocityY+0.8;
//if(keyDown("SPACE")){
    //gato.velocityY = -5;
    

 //if (fondo1.x<500){
   //  fondo1.x = width/2;
 //}   
 
 textSize(30);
 fill("black");
text("Score: "+score,20,30); 
gato.collide(sueloinv);


 drawSprites();

}
function spawnObstacles(){

if(frameCount%100 === 0){
    var obstaculo = createSprite(1250,500);
    obstaculo.addImage(cono); 
    obstaculo.scale = 0.1;
    obstaculo.velocityX = -5;
 
    //fondo1.depth = obstaculo.depth;
 obstaculo.depth = obstaculo.depth+1;

 conosgrupo.add(obstaculo);
}
}

function Spawnaros(){
    if(frameCount%100 === 0){
        var aro2 = createSprite(1400,300);
        aro2.addImage(aro); 
        aro2.scale = 0.1;
        aro2.velocityX = -5;
     
        //fondo1.depth = obstaculo.depth;
     aro2.depth = aro2.depth+1;

arosgrupo.add(aro2);
    }
    }
      





