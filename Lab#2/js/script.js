//Display Location
let display = document.getElementById('display');
//Id Creator/Counter
let pCounter = 0;
//Data Locations
let todoList = [];

//Test Arrays-----------------------------------------------------------------------------//
let itemArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let itemArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Variables
let list = document.getElementById('list');
let textArea = document.getElementById('textArea');
let createBtn = document.getElementById('createBtn');
let clearBtn = document.getElementById('clearBtn');
//let saveBtn = document.getElementById('saveBtn');

//-----------------------------Create list elements---------------------------//


function populateListItems() {
    console.log(todoList);
    clearArea(list);
    for (let i = 0; i < todoList.length; i++) {
        //loop through list creating element
        //append element to list
        let li = document.createElement('li');
        li.setAttribute('class', 'border');
        li.innerText = todoList[i];
        li.contentEditable = true;
        li.addEventListener('click', function (e) {

        });

        list.appendChild(li);
    }
}

function clearArea(area) {
    while (area.firstChild) {
        area.removeChild(area.firstChild);
    }
}

//------------------------------Storage Check-----------------------------------//
if (localStorage.getItem('List') != '') {
    if (localStorage.getItem('List')) {
        todoList = JSON.parse(localStorage.getItem('List'));
        populateListItems();
    }
    else {
        todoList = [];
    }
}



createBtn.addEventListener('click', function (e) {
    todoList.push(textArea.value);
    populateListItems();
    saveLocal();
    textArea.value = '';
    //Local Storage can store up to 5MB needs a ('name', location.value)
});

//----------------------Clear List----------------//
clearBtn.addEventListener('click', function (e) {
    todoList = [];
    populateListItems();
    saveLocal();
});

//saveBtn.addEventListener('click', function (e) {

//});

function saveLocal() {
    localStorage.setItem('List', JSON.stringify(todoList));
}


//Items Page
function injectItemPage(info) {
    display.innerHTML = info;
    let list = document.getElementById('list');
    //Add button list
}