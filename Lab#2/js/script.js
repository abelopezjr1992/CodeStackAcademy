//Display Location
let display = document.getElementById('display');
//Id Creator/Counter
let pCounter = 0;
//Data Locations
let todoList = [];
let listItems = [];

//Test Arrays-----------------------------------------------------------------------------//
let itemArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let itemArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
//--------------------------------------Injections-----------------------------------------------//

function loadHTML(url) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            //Injected pages for List & Items
            if (url == "../html/list.html") {
                injectListPage(myArr);
            }
            else if (url == "../html/items.html") {
                injectItemPage(myArr);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

//------------------------------------Injected Pages-------------------------------------//
function injectListPage(info) {
    display.innerHTML = info;

    //Variables
    let list = document.getElementById('list');
    let keyPress = document.getElementById('keyPress');
    let saveList = document.getElementById('saveList');
    let clearList = document.getElementById('clearList');

    //Storage Location for Injection
    let storageItem = localStorage.getItem('Text');

    if (localStorage.getItem('todo') != '') {
        //console.log(JSON.parse(localStorage.getItem('todo')));
        let todoLocal = JSON.parse(localStorage.getItem('todo'));
        //populate array items into p tags.
        for (let i = 0; i < todoLocal.length; i++) 
        { }
        //saving local storage array into our array
        todoList = todoLocal;
    }

    saveList.addEventListener('click', function (e) {
        //Creating Tags for List



        //Local Storage can store up to 5MB needs a ('name', location.value)
        localStorage.setItem('Text', keyPress.value);
        //todoList.push(keyPress.value);

        //Calling append

        list.append(pElement);
        keyPress.value = storageItem;

        //console.log(pCounter);
    });

    //----------------------Clear List----------------//
    clearList.addEventListener('click', function (e) {

    });
    //----------------------keyPress------------------//
    keyPress.addEventListener('keyPress', function (e) {
        if (e.code == 'Enter') {
            createInput();
        }
    });

}

//Items Page
function injectItemPage(info) {
    display.innerHTML = info;
    let list = document.getElementById('list');
    //Add button list
}


//Used in CreateInput & injectListPage
let pElement = document.createElement('p');

//Called when inputing List/Item
function createInput(a) {
    //Put data entered into list.
    a = pElement.innerText;
    pElement.innerText = keyPress.value;
    pElement.setAttribute('class', 'list-group-item');
    pElement.setAttribute('id', pCounter);
    pElement.addEventListener('click', function (e) {
        //Test
        alert("I've been clicked");
    })
    list.append(pElement);
    pCounter++;
}

//Initial Load
loadHTML("../html/list.html")