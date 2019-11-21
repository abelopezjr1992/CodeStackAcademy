//Display Location
let display = document.getElementById('display');
//Id Creator/Counter
let pCounter = 0;
//Data Locations
let todoList = [];
let obj = {
    listItems: [
        {
            title: 'listTitle',
            listContent: []
        },
        {
            title: 'listTitle',
            listContent: []
        }
    ]
}

//Test Arrays-----------------------------------------------------------------------------//
let itemArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let itemArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Variables
let list = document.getElementById('list');
let textArea = document.getElementById('textArea');
let createBtn = document.getElementById('createBtn');
let clearBtn = document.getElementById('clearBtn');
//---------------,-----------------------Storage Example----------------------------------//
//let names=['jon', 'joe', 'bob'];
//localStorage.setItem('names', JSON.stringify(names));
//console.log(JSON.parse(localStorage.getItem('names')));
//or
//let localStorageItem=JSON.parse(localstorage.getItem('names')); --> console.log(localStorageItem);
//let todoList=[ { title:'my first list',  items:['task1', 'task2', 'task3']}
// { title:'my first list',  items:['task1', 'task2', 'task3']}
// { title:'my first list',  items:['task1', 'task2', 'task3']}
// { title:'my first list',  items:['task1', 'task2', 'task3']}
//]

//---------------------------Lists & Item Creator-------------------------//

//Variables

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
    } else {
        todoList = [];
    }
}

createBtn.addEventListener('click', function (e) {
    todoList.push(textArea.value);
    populateListItems();
    saveLocal();
    //Local Storage can store up to 5MB needs a ('name', location.value)
});

//----------------------Clear List----------------//
clearBtn.addEventListener('click', function (e) {
    todoList = [];
    populateListItems();
    saveLocal();
});

function saveLocal() {
    localStorage.setItem('List', JSON.stringify(todoList));
}


//Items Page
function injectItemPage(info) {
    display.innerHTML = info;
    let list = document.getElementById('list');
    //Add button list
}