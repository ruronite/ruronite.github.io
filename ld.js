//buttons
let start = document.getElementById("start");
let playNow = document.getElementById("play-now");
let tryAgain = document.getElementById("try-again");

//slides
let firstSlide = document.getElementById("first-slide");
let partnerInfo = document.getElementById("partner-info");
let report = document.getElementById("report");

//initially
partnerInfo.hidden = true;
report.hidden= true;

//page handler
function handlePlayNow(){
    firstSlide.hidden = true;
    partnerInfo.hidden= false;
}

function handleGenerate(){
    partnerInfo.hidden = true;
    report.hidden = false;
}

function handleTryAgain(){
    report.hidden = true;
    partnerInfo.hidden = false;
}


let playerName;
let partnerName;
let status;
let funnyText;

//fields
let problem = document.getElementById("problem");
let reportHeader = document.getElementById("report-header");
let percent = document.getElementById("percent");
let breaker= document.getElementById("breaker");
let datingValue = document.getElementById("dating-value");
let committed = document.getElementById("committed");
let money = document.getElementById("money");
let advise = document.getElementById("advise");
let playerGreedDisplay =document.getElementById("player-greed");
let playerGreedLevelDisplay =document.getElementById("player-greed-level");
let partnerGreedDisplay =document.getElementById("partner-greed");
let partnerGreedLevelDisplay =document.getElementById("partner-greed-level");




let problems = [
    "over-expectatios","distance","poor communication", "comparison with others", "lack of compromise", 
    "trust issues", "jealousy", "alcohol", "too much secrets", "no one taking responsibility",
    "inability to apologise","pride","lack of empathy","lack of respect", "money management", "lack of gratitude",
    "lack of forgiveness", "extended family", "friends & third parties"
];
let squad_1 = ["a","b","c","d","e","f","g","h"];
let squad_2 = ["i","j","k","l","m","n","o","p"];
let squad_3 = ["q","r","s","t","u","v","w","x","y","z"];
//let squad_4 = [];
let vo = ["a","e","i","o","u"];

function voCount(word){
    let counted = 0
    for (let i=0 ; i < word.length; i++){
        if(vo.includes(word[i])){
            counted += 1
        }
    }
    return counted
}

function coCount(word){
    let counted = 0
    for (let i=0 ; i < word.length; i++){
        if(!vo.includes(word[i])){
            counted += 1
        }        
    }
    return counted
}



function calc(player,partner){
    let common = 0;
    let myMin = Math.min(player.length,partner.length);
    for(let i=0 ; i<myMin; i++ ){
        if(squad_1.includes(player[i]) && squad_1.includes(partner[i])){
            common ++
        }
        else if(squad_2.includes(player[i]) && squad_2.includes(partner[i])){
            common ++
        }
        else if (squad_3.includes(player[i]) && squad_3.includes(partner[i])){
            common ++
        }
        
    }
    return Math.floor(common/myMin *100)
}



function breakUp(player,partner){
    if (coCount(player) >= coCount(partner)){
        return player
    }
    else{
        return partner
    }
}

function hiValue(player,partner){
    if (voCount(player) >= voCount(partner)){
        return player
    }
    else{
        return partner
    }
}

function commitment(player,partner){
    if(player.length>= partner){
        return player
    }
    else{
        return partner
    }
}

function greed(person){
    let greedLevel =  Math.floor(voCount(person)/coCount(person) *100)
    if(greedLevel > 100){
        greedLevel = 100;
    }
    return greedLevel
}

function noMoney(player,partner,percent){
    let myMin = Math.min(player.length,partner.length);
    let myMax = Math.max(player.length,partner.length);
    return Math.floor(myMin/myMax * percent)

}

function handleClick(){
    handleGenerate()
    playerName = document.getElementById("name").value.toLowerCase() || "anon1";
    partnerName = document.getElementById("partner-name").value.toLowerCase() || "anon2";
    status = document.getElementById("status").value;
    
    
    let percentValue = status === "pre-existing"? calc(playerName,partnerName) : Math.floor(calc(playerName,partnerName) * 0.7)
    // add a problem
    let breakerValue = breakUp(playerName,partnerName);
    let mostValuable = hiValue(playerName,partnerName);
    let mostCommitted = commitment(playerName,partnerName);
    let playerGreed = greed(playerName);
    let partnerGreed = greed(partnerName);    
    let noMoneyValue = noMoney(playerName,partnerName,percentValue);

    /*
    console.log("player name is ", playerName);
    console.log("partner name is ", partnerName);
    console.log("percent love is", percentValue);
    console.log("breaker is ",breakerValue);
    console.log("most valuable is", mostValuable);
    console.log("greed level is ",playerGreed,partnerGreed)
    console.log("when money nor dy,percent is", noMoneyValue)
    */
    //display
    reportHeader.innerHTML = `Relationship analysis for ${playerName} & ${partnerName}`
    percent.innerHTML= `${percentValue}%`;
    breaker.innerHTML= `${breakerValue}`;
    datingValue.innerHTML= `${mostValuable}`;
    money.innerHTML = `${noMoneyValue}%`;
    committed.innerHTML = `${mostCommitted}`;
    playerGreedDisplay.innerHTML = `${playerName}`;
    playerGreedLevelDisplay.innerHTML = `${playerGreed}%`;
    partnerGreedDisplay.innerHTML = `${partnerName}`;
    partnerGreedLevelDisplay.innerHTML= `${partnerGreed}%`;

    //funny
    funnyText = {
        first:[
            `${playerName} Relationships are like fat people...... most of them don't workout!!`,
            `${playerName} relationships sink when there are too many passengers`,
            `${playerName} even if you use kayamata for ${partnerName}, this relationship no go fit work`,
            `${playerName} shebi is until ${partnerName} blow your two eye comot na e you go know say this relationship nor go work?`,
            `${playerName} this your relationship just be like Nigeria..... it's going backward`,
            `${playerName} trying to be in this relationship with ${partnerName} is like pouring water on concrete, a waste of time.`,
            `hafa ${playerName} & ${partnerName} make una kukuma break up na, we nor get strength to dy separate fight o`,
            `${playerName} even if you watered this relationship everyday e nor go fit grow`,
            `There's simply not an iota of love between you and ${partnerName}, make una break up abi make we speak swahili for una`,
            `${playerName}, the way I dy see this your relationship with ${partnerName} eh, one person must break the other person head o`,
            `${playerName} this your relationship just be like Titanic, 2 seconds e don sink enter ground`,
            `BREAK UP!, ${playerName} is said what? BREAK UP!`,
            `${playerName} trying to find love in this relationship is like trying to ride a bicycle in the river, IMPOSSIBLE!`,
            `${playerName} you better run for your life before ${partnerName} give you chokeslam`,
            `This relationship nor go fit work at all at all, ${playerName} kpele, there are many fishes in the river`,
            `${playerName}, so as you wor wor reach you still get mind dy find love? my friend love yourself!`,
            `${playerName} relationship be like plane wey dy for air, any small mistake e don crash enter ground`,
            `${playerName} dy there dy follow who nor love you, until ${partnerName} nod all your teeth commot from your mouth`,
            `${playerName} this relationship wey you wan dy with ${partnerName} omo na one chance ontop wheelbarrow you dy so oh!`,
            `${playerName} leave ${partnerName} you wee not hear small time now you'll do face like cow open mouth like goat and be crying`,
            `${playerName}, this your relationship with ${partnerName} is as shaky as a giraffe on three legs!`,
            `${playerName} abeg make you try separate, I nor get power to build ark,cus the way I dy see this thing so, it will end in flood of tears!`,


        ],
        second:[
            `${playerName} you have found true love, try not to lose it.`,
            `${playerName} see sweet love, where una dy see this kin beautiful love sef`,
            `${playerName} what are you waiting for? why not marry ${partnerName} already?`,
            `${playerName}, you no go propose now oh, when person go marry ${partnerName} you go begin dy cry`,
            `${playerName}, quickly introduce ${partnerName} to your parents na`,
            `${playerName}, this one wey the love strong like this, I dy suspect sa you don use kayamata `,
            `${playerName} and ${partnerName} you folk fit each other like a glove.`
        ]
    }
    // ad display
    let adviseText;
    if (percentValue <= 50 ){
        adviseText = funnyText["first"][Math.floor(Math.random()* funnyText["first"].length)]
    }
    else{
        adviseText = funnyText["second"][Math.floor(Math.random()* funnyText["second"].length)]
    }

    advise.innerHTML = adviseText;

    // prob
    let problemText = problems[Math.floor(Math.random()*problems.length)]
    problem.innerHTML = problemText;


}

playNow.onclick = handlePlayNow;
start.onclick = handleClick;
tryAgain.onclick = handleTryAgain;


