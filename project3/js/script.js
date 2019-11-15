let home = document.getElementById('home');
let restart = document.getElementById('restart');
let display = document.getElementById('display');

let difficulty = 0;

home.addEventListener('click', function (e) {
    loadHTML("../html/gameBegin.html");
})

restart.addEventListener('click', function (e) {
    //----------restart the same difficulty--------//
    loadHTML("../html/gameDisplay.html");
})

//This is the location to inject HTML
function loadHTML(url) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            //kicks off the game
            if (url == "../html/gameBegin.html") {
                injectBegin(myArr);

            }
            else if (url == "../html/gameDisplay.html" && difficulty == 1) {
                loadTrivia(myArr, easyArr);

            }
            else if (url == "../html/gameDisplay.html" && difficulty == 2) {
                loadTrivia(myArr, mediumArr);

            }
            else if (url == "../html/gameEnd.html") {
//hOW TO SETUP END GAME
            }
            else if (url == "../html/gameOptions.html") {
                injectBegin(myArr);
            }

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

let easyArr = [];
let mediumArr = [];

function loadJSON(url) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            easyArr = JSON.parse(this.responseText).easy;
            mediumArr = JSON.parse(this.responseText).medium;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function injectBegin(info) {
    display.innerHTML = info;

    //Select Difficulty
    let easyBtn = document.getElementById('easy');
    let mediumBtn = document.getElementById('medium');
    let rulesBtn = document.getElementById('rules');
    //let hard = document.getElementById('hard');


    easyBtn.addEventListener('click', function (e) {
        //select set of questions
        difficulty = 1;
        loadHTML("../html/gameDisplay.html");
    })
    mediumBtn.addEventListener('click', function (e) {
        difficulty = 2;
        loadHTML("../html/gameDisplay.html");
    })
    rulesBtn.addEventListener('click', function (e) {
        loadHTML("../html/gameOptions.html")
    })
}



let totalScore = 0;
// -----------Functions-----------------//
function loadTrivia(info, arr) {
    display.innerHTML = info;
    //Trivia variables
    let totalQuestions = 20;
    let timer = 15;
    let tQuestions = [];
    let qNum = 0;
    let interval;

    randomNum(arr);
    let correct = document.getElementById('correct');
    let counter = document.getElementById('counter');
    let questions = document.getElementById('questions');
    counter.innerText = timer;
    interval = setInterval(updateTime, 1000);

    //Question & Answer Elements
    let a1 = document.getElementById('a1');
    let a2 = document.getElementById('a2');
    let a3 = document.getElementById('a3');
    let a4 = document.getElementById('a4');

    questions.innerText = tQuestions[qNum].q;
    a1.innerText = tQuestions[qNum].a1;
    a2.innerText = tQuestions[qNum].a2;
    a3.innerText = tQuestions[qNum].a3;
    a4.innerText = tQuestions[qNum].a4;

    function checkAnswer(answer) {

        if (answer === tQuestions[qNum].correct) {
            totalScore++;
            corect++;
        }
        
        correct.innerText = `${totalScore}/${totalQuestions}`;
        timer = 15;
        counter.innerText = timer;

        //Go to next question
        nextQuestion();

    }
    //Next Question
    function nextQuestion() {
        //Prep to go to next question

        
        if (qNum <= totalQuestions) {
            //will run until you hit total qustions=20;
            qNum++;
            
        }
        else {
            //Load up Ending screen
            //Clears interval for timer
            clearInterval(interval);
        }
    }

    // Set our Timer
    function updateTime() {
        //Make sure our time isn't over and it is showing correct time.
        timer--;
        if (timer == 0) {
            timer = 15;
            counter.innerText = timer;
            nextQuestion();
        }
        else {
            counter.innerText = timer;
        }
    }
    //Random number Generator
    function randomNum(q) {
        for (let i = 0; i < totalQuestions; i++) {
            let rNum = Math.floor(Math.random()*q.length);
            tQuestions.push(q[rNum]);
            q.splice(rNum,1);
        }
        //console.log(tQuestions);
    }
}

//Retrieves the answer and see if it is correct Increment you correct number

//-----------------------------//
loadHTML("../html/gameBegin.html");
loadJSON("../json/data.json");