//import getTime from "clock.js";

const todoApp = document.querySelector(".todoForm"),
    todo = todoApp.querySelector("input"),
    todoList = document.querySelector(".todoList");

const TODO_LS = "todos";


let todoLists = [];


function submitData(event) {
    event.preventDefault();

    const curValue = todo.value;
    paintToDo(curValue);
    todo.value = "";
}

function delData(event) {
    console.log(event.target);
    console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    
    todoList.removeChild(li);
    const clear = todoLists.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    console.log(clear);
    todos = clear;
    saveTodo();
}

function saveTodo() {
    localStorage.setItem(TODO_LS, JSON.stringify(todoLists));
}

function doneData(event) {
    const btn = event.target;
    const li = btn.parentNode;

    todoList;
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const doneBtn = document.createElement("button");
    delBtn.innerText = "X";
    doneBtn.innerText = "O";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(doneBtn);
    todoList.appendChild(li);
    const newId = todoLists.length + 1;
    const todoObj = {
        text : text,
        id : newId
    };
    doneBtn.addEventListener("click", doneData);
    delBtn.addEventListener("click", delData);
    todoLists.push(todoObj);
    saveTodo();
}

function loadToDo() {
    const todos = localStorage.getItem(TODO_LS);
    if (todos === null) {
    } else {
        const parseData = JSON.parse(localStorage.getItem(TODO_LS));
        parseData.forEach(function(TODO) {
            paintToDo(TODO.text);
        });
    }
}

loadToDo();
todoApp.addEventListener("submit", submitData);
