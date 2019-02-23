let counter = 0;

function addExamInput() {
  let examInput = document.createElement("div");
  examInput.classList.add("examInput");

  examInput.innerHTML = `
    Exam ${counter} &nbsp;&nbsp;&nbsp;
    <input class='remove' type='button' value='-' onclick='removeExamInput(this)'>
    <br>
    Title : &nbsp;&nbsp;
    <input type="text" name="title" value="" onfocusout="/* 
    !Todo: 
    1. send data to json or db!
    2. reload widget_preview
    */">
    <br>
    Date : &nbsp;&nbsp;
    <input type="date" name="date" value="" onfocusout="/* 
    !Todo: 
    1. send data to json or db!
    2. reload widget_preview
    */">
    `;

  document
    .querySelector(".exam_data > .group_panel > .content")
    .appendChild(examInput);

  counter++;
}

function removeExamInput(self) {
  self.parentNode.parentNode.removeChild(self.parentNode);
}
