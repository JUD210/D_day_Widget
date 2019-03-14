let examInputs = [];

function drawExamInput() {
  for (i = 0; examInputs.length; i++) {
    document
      .querySelector(".exam_data > .group_panel > .content")
      .appendChild(examInputs[i]);
  }
}

function addExamInput() {
  examInputs.push(document.createElement("div"));
  examInputs[examInputs.length - 1].classList =
    "examInput_" + (examInputs.length - 1);
  examInputs[examInputs.length - 1].innerHTML = "TEST";
  drawExamInput();
}



/*--------------------------------------------------------*/

function addExamInput() {
  let examInput = document.createElement("div");
  examInput.classList = "examInput_";

  document
    .querySelector(".exam_data > .group_panel > .content")
    .appendChild(examInput);
}

