let hockey1;
let hockey2;
let ball;
let point1 = 0;
let point2 = 0;


let  board_height = window.innerHeight;
let  board_width = window.innerWidth;
let hockey_width = 60;
let hockey_height = 40;
let hockey_margin = 20

//define background
let background ='';
if(!localStorage.getItem("background")){
    background = "resource/img/BG/soccerfield.svg";
}else
{
    background = localStorage.getItem("background");
}


//definer player1
let player1_icon = '';
// check if player1_icon is present in local storage
if(!localStorage.getItem("player1_icon")){
    player1_icon = "resource/img/Player/left_soccer_boot.svg";
}else{

    player1_icon = localStorage.getItem("player1_icon");
}

//definer player2
let player2_icon = '';
// check if player2_icon is present in local storage
if(!localStorage.getItem("player2_icon")){
    player2_icon = "resource/img/Player/right_soccer_boot.svg";
}else{

    player2_icon = localStorage.getItem("player2_icon");
}



let num = Math.floor(Math.random()*4) + 4; // this will get a number between 1 and 99;
num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;// this will add minus sign in 50% of cases


// lader javascript huske default navne sat tidligere af brugerne
document.getElementById("player1").value = localStorage.getItem("player1");
document.getElementById("player2").value = localStorage.getItem("player2");

// lader javascript huske default iconer sat tidligere af brugerne
document.getElementById("player1_icon").value = localStorage.getItem("player1_icon");
document.getElementById("player2_icon").value = localStorage.getItem("player2_icon");


let fadedimg = document.querySelectorAll('.faded');
for (let i = 0; i < fadedimg.length; i++) {
    fadedimg[i].addEventListener('click', function (event) {

       event.classList.toggle('unfaded');
       alert("clicked");
       console.log('clicked');
    }, false);
}


function initgame(){

    // set background to local storage
    localStorage.setItem("background" , document.getElementById("background").value );

    // set player icon to local storage
    localStorage.setItem("player1_icon" , document.getElementById("player1_icon").value );
    localStorage.setItem("player2_icon" , document.getElementById("player2_icon").value );

    // set playername to local storage
    localStorage.setItem("player1" , document.getElementById("player1").value );
    localStorage.setItem("player2" , document.getElementById("player2").value );

    location.reload();



}




function startGame() {



    let balls = "resource/img/Balls/SoccerBall.svg";





    myGameArea.start();
    hockey1 = new component(hockey_width, hockey_height, 'red', hockey_margin, board_height/2, "img", player1_icon);
    hockey2 = new component(hockey_width, hockey_height, 'yellow', 700-hockey_width-hockey_margin, board_height/2, "img", player2_icon);
    ball = new component(40, 40, 'orange', 350, 170, "img", balls);
    myScore1 = new component("25px", "Consolas", 'yellow', 200, 25, "text");
   // score1.appendChild(myScore1);w
    myScore2 = new component("25px", "Consolas", 'red', 410, 25, "text");
    //score2.appendChild(myScore2);
}

let myGameArea = {
    canvas: document.createElement("canvas")

    ,
    start: function() {

        let height = 370 //window.innerHeight;
        let width = 700 //window.innerWidth;
        this.canvas.setAttribute("style", "background-image:url("+background+"); background-size:100%;");

        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext("2d");
        let gameboard = document.getElementById("gameboard");
        gameboard.setAttribute("style", "height:"+height);
        let scoreboard = document.getElementById("scoreboard");
        scoreboard.setAttribute("style", "width:"+width+"px");
        gameboard.insertBefore(this.canvas, gameboard.childNodes[0]);
        this.interval = setInterval(updateGameArea, 30);

        this.canvas.setAttribute("id", "board");

      //  let gamescore = document.getElementById("scoreboard");
       // this.canvas.appendChild(gamescore);


        window.addEventListener('keydown', function(e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function(e) {
            myGameArea.keys[e.keyCode] = false;
        })
    },

    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type, imga ) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.img = imga;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function() {
        ctx = myGameArea.context;
 if(this.type === "img")
        {
            let img = new Image();
            img.src = this.img;
            img.width = this.width;
            img.height = this.height;
            ctx.drawImage(img, this.x, this.y, this.width, this.height );
        }
         else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    this.crashWith = function(otherobj) {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = otherobj.x;
        let otherright = otherobj.x + (otherobj.width);
        let othertop = otherobj.y;
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {

    //Hockey Control //////////////////////////////
    ///////////////////////////////////////////////

    if (hockey1.y <= 0) {
        hockey1.y = 0;
    }
    if (hockey1.y >= 370-(hockey_height*1.5)) {
        hockey1.y = 370-(hockey_height*1.5);
    }
    if (hockey2.y <= 0) {
        hockey2.y = 0;
    }
    if (hockey2.y >= 370-(hockey_height*1.5)) {
        hockey2.y = 370-(hockey_height*1.5);
    }

    //Keyboard control /////////////////////////////
    ////////////////////////////////////////////////

    if (myGameArea.keys && myGameArea.keys[87]) {
        hockey1.y -= 10;
        if (ball.crashWith(hockey1)) {
            ball.speedY = -4;
            ball.speedX = 14;
        }
    }
    if (myGameArea.keys && myGameArea.keys[83]) {
        hockey1.y += 10;
        if (ball.crashWith(hockey1)) {
            ball.speedY = 4;
            ball.speedX = 14;
        }
    }
    if (myGameArea.keys && myGameArea.keys[38]) {
        hockey2.y -= 10;
        if (ball.crashWith(hockey2)) {
            ball.speedY = -4;
            ball.speedX = -8;
        }
    }
    if (myGameArea.keys && myGameArea.keys[40]) {
        hockey2.y += 10;
        if (ball.crashWith(hockey2)) {
            ball.speedY = 4;
            ball.speedX = -8;
        }
    }


    ///********BALL MOVEMENTS *************/////////
    ////////////////////////////////////////////////

    ball.newPos();

    if (ball.crashWith(hockey1)) {
        ball.speedY = 0;
        ball.speedX = 13;
    } else if (ball.crashWith(hockey2)) {
        ball.speedY = 0;
        ball.speedX = -13;
    } else {


        ball.x +=  num;
    }



    if (ball.y <= 0) {
        ball.speedY = 4;
    }
    if (ball.y >= 370-(hockey_height*1.5)) {
        ball.speedY = -4;
    }
    if (ball.x <= 2) {
        ball.x = 10;
        point2 += 1;
        ball.speedX = 10;
        //myGameArea.stop();
    }
    if (ball.x >= 670) {
        ball.x = 600;
        point1 += 1;
        ball.speedX = -10;
        //myGameArea.stop();
    }
    //			console.log(point1);
    //			console.log(point2);

    //ball.x -= 4;
    myGameArea.clear();
    hockey1.update();
    hockey2.update();
    ball.update();


    let pcolor1 = localStorage.getItem("pcolor1");
    let pcolor2 = localStorage.getItem("pcolor2");

    let score1 = document.getElementById("score1");
    score1.setAttribute("style", "color:red");
    score1.innerHTML =  point1;

    let score2 = document.getElementById("score2");
    score2.setAttribute("style", "color:yellowgreen");
    score2.innerHTML =  point2;



    myScore1.update();

    myScore2.update();



}
