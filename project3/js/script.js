//Declare our Variables
let totalScore = 0;
let totalQuestions = 20;
let incorrect=0;
let timer=5;
let tQuestions = [];
let diff = '../json/data.json';

let qNum = 0;
let interval;
//Grab all our elements from HTML page
//home,restart,timer, score, question
let home=document.getElementById('home');
let restart=document.getElementById('restart');

//Select Difficulty
let easy=document.getElementById('easy');

//function to inject Easy game information and start game


let medium=document.getElementById('medium');
let hard=document.getElementById('hard');

let correct = document.getElementById('correct');
let counter = document.getElementById('counter');
let questions = document.getElementById('questions');

let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');


//Get our Buttons and add event Listeners

let buttons = document.getElementsByClassName('ansBtn');

for (let i = 0; i < buttons.length; i++) {
    //going to add our eventListeners
    buttons[i].addEventListener('click', function (e) {
        //alert("You clicked a button");
        //call our next function
        console.log(e);
        checkAnswer(e.toElement.innerText);
    });
}



//Create our JSON data load
function loadJSON(url) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //.easyQ to select an array inside the array
            //let myArr=Json.parse(this.responseText);
            tQuestions = JSON.parse(this.responseText).easy;
            console.log(tQuestions);
            counter.innerText=timer;

            interval=setInterval(updateTime,1000);
            //kicks off the game
            loadQuestion();

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

restart.addEventListener('click', function (e) {
//----------restart the same difficulty--------//
})


home.addEventListener('click', function(e){

})

// ----------------------------//
function loadQuestion() {
    //Load the next question
    questions.innerText = tQuestions[qNum].q;
    a1.innerText = tQuestions[qNum].a1;
    a2.innerText = tQuestions[qNum].a2;
    a3.innerText = tQuestions[qNum].a3;
    a4.innerText = tQuestions[qNum].a4;
    //For loop in buttons


}

function checkAnswer(answer) {
    //Retrieves the answer and see if it is correct
    //Increment you correct number

    if (answer === tQuestions[qNum].correct){
        totalScore++;
    }
    else{
        incorrect++;
    }
    correct.innerText=`${totalScore}/${totalQuestions}`;
    timer=5;
    counter.innerText =timer;

    //Go to next question
    nextQuestion();

}

//Next Question
function nextQuestion(){
    //Prep to go to next question
    
    //loadQuestion
    if(qNum<=totalQuestions){
        //will run until you hit total qustions=20;
        qNum++;
        loadQuestion();
    }
    else{
        //Load up Ending screen
        //Clears interval for timer
        clearInterval(interval);
        alert("You have finished the game. I have spoken.")
    }
}
// Set our Timer
function updateTime(){
    //Make sure our time isn't over and it is showing correct time.

    timer--;
    if (timer==0){
        timer=5;
        counter.innerText =timer;
        nextQuestion();
    }
    else{
        counter.innerText=timer;
    }
}

//-----------------------------//
loadJSON(diff);