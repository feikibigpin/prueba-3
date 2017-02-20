var dots = [];
var energy = 0; //starting value of energy
var singleShake = 0;
var finished = false;
var maxEnergy= 1000; //max energy for eathquake


var button1;
var button2;
var button3;
var myChile;
var myMexico;
var myJapon;
var myIndonesia;
var image;
function preload() {
    myChile = loadImage("imagenes/chile.png");
    myJapon = loadImage("imagenes/japon.png");
    myMexico = loadImage("imagenes/mexico.png");
    myIndonesia = loadImage("imagenes/indonesia.png");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(204);
    button1 = createButton("See results");
    button1.position(width/7,(height/15)*14);
    button1.touchStarted(results);
        
    button2 = createButton("Try again");
    button2.position((width/7)*5, (height/15)*14);
    button2.touchStarted(setup);
  
  
  var magnitude = int(map(energy, 0, 1000, 0, 10)); 
    
    if (energy > 0 && energy < maxEnergy){
        
        //CREATE THE ELLIPSE AREA
    var x = width/2;
    var y = height/2;
    var r = energy * 2; 
    
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse (x, y, r, r);

}
function deviceShaken(){
    
   singleShake = abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
  energy += singleShake;
  
  //  if (singleShake > 30){
   //energy += singleShake;
  //} else { finished == true;}
    
   // HACER UN IF PARA CUANDO ES MENOR, PONER TEXTO PARA QUE LO INTENTE DE NUEVO CON MAS FUERZA
    //create objects
    for (var i = 0; i < energy*100; i++){
        dots.push(new QuakeDots());
    } 
    
}


function QuakeDots(){ 
    var a = random(0,360);
    var b = random(0,energy * 2);
    var x = sin(a) * b; // mi dà un numero che va da -b a b
    var y = cos(a) * b; // mi dà un numero che va da -b a b
    var d = dist(width/2,height/2, width/2, height/2 + x/2);
    
    //var d = dist(width/2,height/2,width/2+value,height/2);
    
    this.xdot = random(width/2 - d, width/2 + d); //according to ellipse area
    this.ydot = random(height/2 - d, height/2 + d); //according to ellipse area
    this.diameter = 3;
    this.speed = 4; //according to magnitude
        

this.move = function(){
    this.xdot += random(-this.speed,this.speed);
    this.ydot += random(-this.speed,this.speed);
 
}

this.display = function(){
    if(this.xdot > width/2 + d || this.xdot < width/2 - d || this.ydot > height/2 + d || this.ydot < height/2 - d){
       this.xdot = random(width/2 - d, width/2 + d);
       this.ydot = random(height/2 - d, height/2 + d); 
       }
    ellipse(this.xdot, this.ydot, this.diameter, this.diameter);
};
 
}
    
    
function results() {
     button1.remove(button1);
     if( magnitude == 1 ){
       image(myChile,0,0,windowWidth,windowHeight);}
     else if( magnitude ==0 ){
       image(myIndonesia,0,0,windowWidth,windowHeight);}
     else{
     image(myMexico,0,0,windowWidth,windowHeight);}
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
     }
