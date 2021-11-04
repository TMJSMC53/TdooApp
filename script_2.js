"use strict";

const inputField = document.querySelector("#input-field");
const addBtn = document.querySelector("#addTodo");
const removeBtn = document.querySelector("#removeTodo");
let todoContainer = document.querySelector(".todoContainer");

let taskList = [];

const addTask = function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  taskList.push(inputField.value);

  todoContainer.appendChild(paragraph);

  inputField.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.tabIndex = 0;
  paragraph.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      paragraph.click();
    }
  });

  localStorage.setItem("task", JSON.stringify(taskList));
  localStorage.getItem("task");
};

addBtn.addEventListener("click", addTask);

removeBtn.addEventListener("click", function () {
  localStorage.setItem("task", []);
  while (todoContainer.firstChild) {
    todoContainer.removeChild(todoContainer.firstChild);
  }
});

inputField.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

(function () {
  taskList = JSON.parse(localStorage.getItem("task"));

  taskList.forEach((task) => {
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = task;

    paragraph.addEventListener("click", function () {
      paragraph.style.textDecoration = "line-through";
    });

    paragraph.tabIndex = 0;
    paragraph.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        paragraph.click();
      }
    });
    todoContainer.appendChild(paragraph);
  });
})();
