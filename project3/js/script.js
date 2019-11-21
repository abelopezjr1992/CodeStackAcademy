//Notes Home & Restart work, but once it reaches the ending screen it will not let move on. 
let home = document.getElementById('home');
let restart = document.getElementById('restart');
let display = document.getElementById('display');
let difficulty = 0;

home.addEventListener('click', function (e) {
    loadHTML("../html/gameBegin.html");
    qNum = 0;
    totalQuestions = 20;
    timer = 15;
    totalScore = 0;
})

restart.addEventListener('click', function (e) {
    loadHTML("../html/gameDisplay.html");
    qNum = 0;
    totalQuestions = 20;
    timer = 15;
    totalScore = 0;
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
                injectEnd(myArr);
            }
            else if (url == "../html/gameOptions.html") {
                injectBegin(myArr);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
//------Loading JSON Arrays for use-----//
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


//----Loading gameBegin.html to select Difficulty----//
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
        loadHTML("../html/gameOptions.html");
    })
}

//---------Loading GameOver Screen-----//
//------Having issues injecting other pages once here such as replay/home/restart----//

function injectEnd(info) {
    display.innerHTML = info;
    console.log("got here")
    let replay = document.getElementById('replay');
    let message = document.getElementById('message');
    let grade = document.getElementById('grade');

    correct.innerText = `${totalScore}/${totalQuestions}`;

    if (totalScore <= 10) {
        message.innerText = "Pick up a book once in a while...NO REALLY!";
        grade.innerText = "F! I have spoken!";
    }
    else if (totalScore <= 15 && totalscore > 10) {
        message.innerText = "Ok ok... you have some knowledge.";
        grade.innerText = "B! I have spoken!";
    }
    else if (totalScore > 15) {
        message.innerText = "Well then look at what we have here... a genius!"
        grade.innerText = "A! I have spoken!";
    }


    replay.addEventListener('click', function (e) {
        loadHTML("../html/gameBegin.html")
    })
}

//------Variables for Trivia-----//
let totalScore = 0;
let qNum = 0;
let totalQuestions = 20;
let tQuestions = [];
let interval;
let timer = 15;

// -----------Functions for lading Trivia setup-----------------//
function loadTrivia(info, arr) {
    display.innerHTML = info;

    let a1 = document.getElementById('a1');
    let a2 = document.getElementById('a2');
    let a3 = document.getElementById('a3');
    let a4 = document.getElementById('a4');

    //Loading random set of questions
    randomNum(arr);

    let correct = document.getElementById('correct');
    let counter = document.getElementById('counter');
    let questions = document.getElementById('questions');
    counter.innerText = timer;
    interval = setInterval(updateTime, 1000);

    //Question & Answer Elements
    displayQuestion();

    a1.addEventListener('click', function (e) {
        checkAnswer(e.toElement.innerText);
    });
    a2.addEventListener('click', function (e) {
        checkAnswer(e.toElement.innerText);
    });
    a3.addEventListener('click', function (e) {
        checkAnswer(e.toElement.innerText);
    });
    a4.addEventListener('click', function (e) {
        checkAnswer(e.toElement.innerText);
    });

    function checkAnswer(answer) {

        if (answer === tQuestions[qNum].correct) {
            totalScore++;
        }
        else {
        }

        timer = 15;
        counter.innerText = timer;
        nextQuestion();
    }
    //Loading next questions
    function nextQuestion() {
        if (qNum < 19) {
            qNum++;
            displayQuestion()
        }
        else {
            //Load up Ending screen
            //Clears interval for timer
            loadHTML("../html/gameEnd.html");
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
        if (q != undefined) {
            for (let i = 0; i < totalQuestions; i++) {
                let rNum = Math.floor(Math.random() * q.length);
                tQuestions.push(q[rNum]);
                q.splice(rNum, 1);
            }
        }
    }

    function displayQuestion() {

        questions.innerText = tQuestions[qNum].q;
        a1.innerText = tQuestions[qNum].a1;
        a2.innerText = tQuestions[qNum].a2;
        a3.innerText = tQuestions[qNum].a3;
        a4.innerText = tQuestions[qNum].a4;
        correct.innerText = `${totalScore}/${totalQuestions}`;
    }

}


//Retrieves the answer and see if it is correct Increment you correct number

//-----------------------------//
loadHTML("../html/gameBegin.html");
loadJSON("../json/data.json");