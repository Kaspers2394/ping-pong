let hockey1;
let hockey2;
let ball;
let point1 = 0;
let point2 = 0;
let board_height = window.innerHeight;
let hockey_margin = 20;


//define icon1 width
let hockey_left_width = '';
// check if hockey_left_width is present in local storage if not set a default value
hockey_left_width = !localStorage.getItem("player1_icon_width") ? 40 : localStorage.getItem("player1_icon_width");
console.log(localStorage.getItem("player1_icon_width")+' icon1 width');

//define icon1 height
let hockey_left_height = '';
// check if hockey_left_height is present in local storage if not set a default value
hockey_left_height = !localStorage.getItem("player1_icon_height") ? 40 : localStorage.getItem("player1_icon_height");

//define icon2 width
let hockey_right_width = '';
// check if hockey_right_width is present in local storage if not set a default value
hockey_right_width = !localStorage.getItem("player2_icon_width") ? 40 : localStorage.getItem("player2_icon_width");

//define icon2 height
let hockey_right_height = '';
// check if hockey_right_height is present in local storage if not set a default value
hockey_right_height = !localStorage.getItem("player2_icon_height") ? 40 : localStorage.getItem("player2_icon_height");


//define balls
let balls = '';
// check if balls is present in local storage if not set a default value
balls = !localStorage.getItem("balls") ? "resource/img/Balls/SoccerBall.svg" : localStorage.getItem("balls");


//define background
let background = '';
// check if background image is present in local storage if not set a default value
background = !localStorage.getItem("background") ? "resource/img/BG/soccerfield.svg" : localStorage.getItem("background");


//definer player1 icon
let player1_icon = '';
// check if player1_icon is present in local storage if not set a default value
player1_icon = !localStorage.getItem("player1_icon") ? "resource/img/Player/left_soccer_boot.svg" : localStorage.getItem("player1_icon");


//definer player2 icon
let player2_icon = '';
// check if player2_icon is present in local storage if not set a default value
player2_icon = !localStorage.getItem("player2_icon") ? "resource/img/Player/right_soccer_boot.svg" : localStorage.getItem("player2_icon");

//definer player1 name
let player1_name = '';
// check if player1_name is present in local storage if not set a default value
player1_name = !localStorage.getItem("player1") ? "Player 1" : localStorage.getItem("player1");

//definer player2 name
let player2_name = '';
// check if player2_name is present in local storage if not set a default value
player2_name = !localStorage.getItem("player2") ? "Player 2" : localStorage.getItem("player2");


let num = Math.floor(Math.random() * 4) + 4; // this will get a number between 1 and 99;
num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;// this will add minus sign in 50% of cases


// lader javascript huske default navne sat tidligere af brugerne
document.getElementById("player1").value = player1_name;
document.getElementById("player2").value = player2_name;

document.getElementById("background").value = background;



//
//
//
//
//
//
//
//
// **/
// define fading of icons and background

let fadedbackground = document.querySelectorAll('.board_background');


for (let i = 0; i < fadedbackground.length; i++) {


    if (localStorage.getItem("background") === fadedbackground[i].src) {


        fadedbackground[i].classList.add("unfaded");
    }

    //fade backgrounds
    fadedbackground[i].addEventListener('click', function (event) {


        fadedbackground.forEach(function (element) {
            //toggler class twistbody


            element.classList.remove('unfaded');
        });

        fadedbackground[i].classList.toggle('unfaded');

    }, false);
}


function initgame() {

    // set background to local storage
    localStorage.setItem("background", document.getElementById("background").value);

    // set playername to local storage
    localStorage.setItem("player1", document.getElementById("player1").value);
    localStorage.setItem("player2", document.getElementById("player2").value);

    location.reload();


}


function startGame() {


    myGameArea.start();
    hockey1 = new component(parseInt(hockey_left_width), parseInt(hockey_left_height), hockey_margin, board_height / 2, "img", player1_icon, 'lefthand', 'player1_icon_width', 'player1_icon_height', 'player1_icon');
    hockey2 = new component(parseInt(hockey_right_width), parseInt(hockey_right_height), 700 - hockey_right_width - hockey_margin, board_height / 2, "img", player2_icon, 'righthand', 'player2_icon_width', 'player2_icon_height', 'player2_icon');
    ball = new component(40, 40, 350, 170, "img", balls, 'balls', '', '', 'balls');


}

let myGameArea = {
    canvas: document.createElement("canvas")

    ,
    start: function () {

        let height = 370 //window.innerHeight;
        let width = 700 //window.innerWidth;
        this.canvas.setAttribute("style", "background-image:url(" + background + "); background-size:100%;");

        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext("2d");
        let gameboard = document.getElementById("gameboard");
        gameboard.setAttribute("style", "height:" + height);
        let scoreboard = document.getElementById("scoreboard");
        scoreboard.setAttribute("style", "width:" + width + "px");
        gameboard.insertBefore(this.canvas, gameboard.childNodes[0]);
        this.interval = setInterval(updateGameArea, 30);

        this.canvas.setAttribute("id", "board");

        //  let gamescore = document.getElementById("scoreboard");
        // this.canvas.appendChild(gamescore);


        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
        })
    },

    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
};

function component(width, height, x, y, type, imga, fadeclass, iconwidth, iconheight, name) {

    let fadex = document.querySelectorAll('.' + fadeclass);

    for (let i = 0; i < fadex.length; i++) {

        console.log(fadex[i].getAttribute("width"));



        if (imga === fadex[i].src) {


            fadex[i].classList.add("unfaded");
        }

        //fade items
        fadex[i].addEventListener('click', function (event) {

            fadex.forEach(function (element) {
                //toggler class twistbody

                localStorage.setItem(iconwidth, fadex[i].getAttribute("width"));
                localStorage.setItem(iconheight, fadex[i].getAttribute("height"));

                localStorage.setItem(name , fadex[i].src);

                console.log(name+ ' name '+ fadex[i].src +' imga');

                element.classList.remove('unfaded');
            });

            fadex[i].classList.toggle('unfaded');

        }, false);
    }


    this.type = type;
    this.width = width;
    this.height = height;
    this.img = imga;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function () {
        ctx = myGameArea.context;
        if (this.type === "img") {
            let img = new Image();
            img.src = this.img;
            img.width = this.width;
            img.height = this.height;
            ctx.drawImage(img, this.x, this.y, this.width, this.height);
        }
    };

    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    };

    this.crashWith = function (otherobj) {
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
    if (hockey1.y >= 370 - (hockey_left_height * 1.5)) {
        hockey1.y = 370 - (hockey_left_height * 1.5);
    }
    if (hockey2.y <= 0) {
        hockey2.y = 0;
    }
    if (hockey2.y >= 370 - (hockey_right_height * 1.5)) {
        hockey2.y = 370 - (hockey_right_height * 1.5);
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
        ball.x += num;
    }


    if (ball.y <= 0) {
        ball.speedY = 4;
    }
    if (ball.y >= 370 - (hockey_left_height * 1.5)) {
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


    let score1 = document.getElementById("score1");
    score1.setAttribute("style", "color:red");
    score1.innerHTML = point1;

    let score2 = document.getElementById("score2");
    score2.setAttribute("style", "color:yellowgreen");
    score2.innerHTML = point2;

}
