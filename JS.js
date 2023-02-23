const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class 장애물{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    생성(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function random(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

var x = random(0,100);
var y = random(0,100);
let 장애물1 = new 장애물(x,y,20,300,"blue");

var x = random(0,100);
var y = random(0,100);
let 장애물2 = new 장애물(x,y,400,30,"pink");

var x = random(0,100);
var y = random(0,100);
let 장애물3 = new 장애물(x,y,100,100,"gold");

var x = random(0,100);
var y = random(0,100);
let 장애물4 = new 장애물(x,y,40,30,"red");

var x = random(0,100);
var y = random(0,100);
let 장애물5 = new 장애물(x,y,40,30,"powderblue");
let 캐릭터 = new 장애물(100,800,50,50,"green");

장애물1.생성();
장애물2.생성();
장애물3.생성();
장애물4.생성();
장애물5.생성();
캐릭터.생성();


