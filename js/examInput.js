var examInputs = [];

function addExamInput() {
  var examInput = document.createElement("div");
  examInput.classList = "examInput_" + examInputs.length;

  examInput.innerHTML = `
    Exam + examInputs.length +  <input type='button' value='test'>
    <br>
    
    `;

  document
    .querySelector(".exam_data > .group_panel > .content")
    .appendChild(examInput);

}
