//pages
let introSlide = document.getElementById("introduction");
let infoSlide = document.getElementById("info");
let gameSlide = document.getElementById("game");
let gameOverSlide = document.getElementById("game-over");



//buttons
let playNow = document.getElementById("play-now");
let start = document.getElementById("start");
let rock = document.getElementById("rock")
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let next = document.getElementById("next");

let playAgain = document.getElementById("play-again");

//variables
let nameDisplay = document.getElementById("player");
let playerName;
let roundDisplay = document.getElementById("round-num");
let playerScoreDisplay = document.getElementById("player-score");
let RubotScoreDisplay = document.getElementById("Rubot-score");
let winner = document.getElementById("winner");
let result = document.getElementById("result")

let funnyMessageDisplay = document.getElementById("funny-message");
let advertText = document.getElementById("advert-text");
let advertLink = document.getElementById("advert-link");


// images
let playerChoice = document.getElementById("player-choice");
let RubotChoice = document.getElementById("Rubot-choice");

let funnyPicDisplay = document.getElementById("funny-pic");
let advertPic = document.getElementById("advert-pic");

//initialize page states
infoSlide.hidden = true;
gameSlide.hidden= true;
gameOverSlide.hidden = true;

//reset game 
// reset variables
function resetVariables(){
    victor = "";
    round = 1;
    playerScore = 0;
    RubotScore = 0;
}

//reset display
function resetDisplay(){
    playerChoice.src = gamePics["blank"];
    RubotChoice.src = gamePics["blank"];
    roundDisplay.innerHTML = 1;
    winner.innerHTML= ""
    playerScoreDisplay.innerHTML =0;
    RubotScoreDisplay.innerHTML = 0;
    enableKeys()

}


// page shuffle event handlers
function handlePlayNow (){
    introSlide.hidden = true;
    infoSlide.hidden = false;
    
}

function handleStart(){
    infoSlide.hidden = true;
    gameSlide.hidden = false;
}

function handleGameOver(){
    gameSlide.hidden = true;
    gameOverSlide.hidden = false;
}

function handlePlayAgain(){
    gameSlide.hidden = false;
    gameOverSlide.hidden = true;
    resetVariables();
    resetDisplay();
}

playNow.onclick = handlePlayNow;



// initialize funnyText variable
let funnyText ;
// getName
function getName(){
    // page shuffle event handler along with playername
    handleStart()
    playerName = document.getElementById("name").value || "Anonymous";
    nameDisplay.innerHTML= playerName;
    //console.log(playerName)


    // extract player name for funny text
    funnyText = {
        win: ["The Rubot conquers again!!",
        `${playerName} you think sa you wise, see yourself now you don lose`,
        `${playerName} go better school you nor gree hear,now you don lose!`,
        `${playerName} e shock you!!! ?`,
        `You dey follow Rubot drag?,${playerName} I tell you sa I go shake your leg`,
        `Rubot don change am for you,${playerName} how market na?`,
        `Everywhere gladiator bobbyshock Rubot remains unbeatable jare!`
        ],
        lose: [
        "ewo I don lose oh",
        `Obara Jesus! so ${playerName} na me you dy beat like this?`,
        `${playerName} you got lucky joor, if e sure for you let's play again`,
        `${playerName} haba you be brain box oh, I no believe sa you go fit beat me`,
        `${playerName} na timbo timbo help you shaaa`,
        `${playerName} you may have won the battle but you haven't won the war, I'd be back!`
        
        ]
    }


}

start.onclick = getName;




let funnyPic = {
    win: [
        "./stickers/animated/STK-20201217-WA0002.webp",
        "./stickers/animated/STK-20201217-WA0003.webp",
        "./stickers/animated/STK-20201217-WA0005.webp",
        "./stickers/animated/STK-20201217-WA0007.webp",
        "./stickers/animated/STK-20201217-WA0009.webp",
        "./stickers/animated/STK-20201217-WA0010.webp",
        "./stickers/animated/STK-20201217-WA0011.webp",
        "./stickers/animated/STK-20201217-WA0012.webp",
        "./stickers/animated/STK-20201217-WA0013.webp"      

    ],
    lose: [
        "./stickers/photo/STK-20201211-WA0008.webp",
        "./stickers/photo/STK-20201211-WA0009.webp",
        "./stickers/photo/STK-20201211-WA0010.webp",
        "./stickers/photo/STK-20201211-WA0011.webp",
        "./stickers/animated/blueshirt.webp"

    ]
}

let ads = {
    effects: ["./special-effects/ruro_gold3.webp",
    "./special-effects/cartoon15f.webp",
    "./special-effects/word portrait.webp",
    "./special-effects/dispersion3.webp",
    "./special-effects/double exposure_darkclouds.png",
    "./special-effects/tiger_skin.webp",
    "./special-effects/painting/cartoon13.webp",
    "./special-effects/painting/cartoon14.webp",
    "./special-effects/painting/painting-backgroundblend.webp",
    "./special-effects/LEVITATION.jpg",
    "./special-effects/energy ball (1).jpg",
    "./special-effects/painting/cartoonb.webp",
    "./special-effects/myeffect.webp",
    "./special-effects/avatar3.webp",
    "./special-effects/joker.jpg",
    "./special-effects/cartoon16f.webp",
    "./special-effects/double exposurec.webp",
    "./special-effects/cartoon15e.webp",
    "./special-effects/cartoon11b.webp",
    "./special-effects/cartoon10.webp",
    "./special-effects/painting/cartoon4.webp",
    "./special-effects/painting/cartoon2.webp", 

    ],
    sticker: [
        "./stickers/photo/STK-20201211-WA0008.webp",
        "./stickers/photo/STK-20201211-WA0009.webp",
        "./stickers/animated/STK-20201217-WA0002.webp",
        "./stickers/photo/STK-20201211-WA0010.webp",
        "./stickers/photo/STK-20201211-WA0011.webp",
        "./stickers/animated/STK-20201217-WA0003.webp"

    ]
}


/*


function getBut (event){
    let choice = event.target.id;
    console.log(choice)
    rock.setAttribute("disabled",true);
    paper.setAttribute("disabled",true)


}

rock.onclick = getBut;
*/
let victor;
let round = 1;
let playerScore = 0;
let RubotScore = 0;
let gameList = ["rock","paper","scissors"]
let gamePics = {
    "rock": "./game-pics/rock.png",
    "paper": "./game-pics/paper.jpg",
    "scissors": "./game-pics/scissors.png",
    "blank": "./game-pics/blank.png"
}



function playerImage(image){
    playerChoice.src = gamePics[image];
}


function RubotPlay() {
    let index = Math.floor(Math.random()* gameList.length);
    return gameList[index];

}
// currently not in use
function RubotImage() {
    return gamePics[RubotPlay()]
}

function disableKeys(){
    rock.setAttribute("disabled",true);
    paper.setAttribute("disabled",true)
    scissors.setAttribute("disabled",true)
    next.removeAttribute("disabled")

}


function compare (Rubot,player) {
    if (Rubot === "rock" && player === "scissors"){
        RubotScore += 1
        RubotScoreDisplay.innerHTML= RubotScore
        winner.innerHTML = `Rubot beats ${playerName}, rock crushes scissors`
    }
    else if (Rubot === "paper" && player === "rock"){
        RubotScore += 1
        RubotScoreDisplay.innerHTML= RubotScore
        winner.innerHTML = `Rubot beats ${playerName}, paper covers rock`
    }
    else if (Rubot=== "scissors" && player === "paper"){
        RubotScore += 1
        RubotScoreDisplay.innerHTML= RubotScore
        winner.innerHTML = `Rubot beats ${playerName}, scissors cuts paper`
    }
    else if (player === "rock" && Rubot === "scissors"){
        playerScore += 1
        playerScoreDisplay.innerHTML= playerScore
        winner.innerHTML = `${playerName} beats Rubot, rock crushes scissors`
    }
    else if (player === "paper" && Rubot === "rock"){
        playerScore += 1
        playerScoreDisplay.innerHTML= playerScore
        winner.innerHTML = `${playerName} beats Rubot, paper covers rock`
    }
    else if (player=== "scissors" && Rubot === "paper"){
        playerScore += 1
        playerScoreDisplay.innerHTML= playerScore
        winner.innerHTML = `${playerName} beats Rubot, scissors cuts paper`
    }
    else{
        winner.innerHTML= `Rubot and ${playerName} draw this round!!`
    }

}

function isGameOver(){
    if (playerScore === 10 || RubotScore === 10){
        return true
    }
    else{
        return false
    }
}

function declareWinner (){
    if (RubotScore > playerScore){
        victor = "Rubot";
        result.innerHTML = `Rubot has defeated ${playerName} ${RubotScore} - ${playerScore}`
    }
    else{
        victor = playerName
        result.innerHTML= `${playerName} has defeated the Rubot ${playerScore} - ${RubotScore} `
    }
}

function enableKeys(){
    rock.removeAttribute("disabled");
    paper.removeAttribute("disabled")
    scissors.removeAttribute("disabled")
    next.setAttribute("disabled",true)
}

function picReset(){
    playerChoice.src = gamePics["blank"];
    RubotChoice.src = gamePics["blank"];
}

function increaseRound(){
    round += 1;
    roundDisplay.innerHTML = round;
}

//next round event handler
function nextRound() {
    winner.innerHTML = ""
    increaseRound();
    picReset();
    enableKeys();

}

function myProcess(player){
    //console.log(player)
    playerImage(player);
    let Rubot = RubotPlay();
    //console.log(Rubot)
    RubotChoice.src = gamePics[Rubot];
    disableKeys();
    compare(Rubot,player);
    if (isGameOver()){
        declareWinner();
        // prevent player from clicking next round during delay
        next.setAttribute("disabled",true)
        //handleGameOver();
        // delay to allow player see final score
        setTimeout(handleGameOver,2000);
               
        funnyMessageDisplay.innerHTML = chooseFunnyText();
        funnyPicDisplay.src = chooseFunnyPic();
        setAd();
    }
    
     
}

//player event handlers

function handleRock(){
    myProcess("rock");
}

function handlePaper(){
    myProcess("paper")
}

function handleScissors(){
    myProcess("scissors")
}

// event listeners
rock.onclick = handleRock;
paper.onclick = handlePaper;
scissors.onclick = handleScissors;
next.onclick = nextRound;
playAgain.onclick = handlePlayAgain;

function chooseFunnyText (){
    let text;
    if (victor === "Rubot"){
        text = funnyText.win[Math.floor(Math.random() * funnyText.win.length)];
        return text
    }
    else{
        text = funnyText.lose[Math.floor(Math.random() * funnyText.lose.length)];
        return text
    }
}

function chooseFunnyPic(){
    let pic;
    if(victor === "Rubot"){
        pic = funnyPic.win[Math.floor(Math.random()* funnyPic.win.length)]
        return pic
    }
    else {
        pic = funnyPic.lose[Math.floor(Math.random() * funnyPic.lose.length)]
        return pic
    }
}

function setAd(){
    let decide = Math.floor(Math.random()*2);
    let adPic;
    if (decide === 0){
        adPic = ads.effects[Math.floor(Math.random()* ads.effects.length)];
        advertPic.src = adPic;
        advertText.innerHTML = "Photo special effects";
        advertText.alt= "Photo special effects";
        advertLink.href = "./special-effects.html";

    }
    else{
        adPic = ads.sticker[Math.floor(Math.random()* ads.sticker.length)];
        advertPic.src = adPic;
        advertText.innerHTML = "Whatsapp photo & animated stickers";
        advertText.alt = "Whatsapp photo & animated stickers";
        advertLink.href = "./sticker.html";
    }
}

