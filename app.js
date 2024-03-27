const divContainer = document.querySelector(".container");
const highTask = document.querySelector(".high-task-container");
const form = document.querySelector(".input-wrapper");
const highInput = document.getElementById("highInput");
const highBtn = document.querySelector(".addHighTask");
const lowInput = document.querySelector(".lowInput");
const lowBtn = document.querySelector(".addLowTask");

let toDo = [];

const createNewDiv = (textContent, classname) => {
  const newDiv = document.createElement("div");
  const insideDiv = document.createElement("div");
  const newInputDev = document.createElement("div");
  const newCheckbox = document.createElement("input");
  newCheckbox.setAttribute("type", "checkbox");
  const newBtn = document.createElement("button");
  newBtn.textContent = "х";
  const textDiv = document.createElement("div");
  textDiv.textContent = textContent;

  newInputDev.appendChild(newBtn);
  newDiv.appendChild(newInputDev);
  insideDiv.appendChild(newCheckbox);
  newDiv.appendChild(insideDiv);
  newDiv.appendChild(textDiv);

  newInputDev.className = "newInputDev";
  newBtn.className = "newBtn";
  newCheckbox.className = "newCheckbox";
  newDiv.className = classname;
  textDiv.className = "textDiv";

  const checkStatus = (event) => {
    toDo = toDo.map((elem) => {
      if (elem.text === textDiv.textContent) {
        return { ...elem, checked: newCheckbox.checked };
      }
      return elem;
    });

    if (newCheckbox.checked) {
      textDiv.classList.add("strike-through");
    } else {
      textDiv.classList.remove("strike-through");
    }
  };

  newCheckbox.addEventListener("click", checkStatus);

  newBtn.addEventListener("click", function () {
    toDo = toDo.filter((item) => item !== textContent);
    newDiv.remove();
    console.log(toDo);
  });
  return newDiv;
};

const newValue = (event) => {
  event.preventDefault();
  const highInputValue = highInput.value;
  if (highInputValue === "") {
    alert("Поле не может быть пустым");
    return;
  }
  toDo.push({ text: highInputValue, checked: false });
  highTask.appendChild(createNewDiv(highInputValue, "div-class"));
  highInput.value = "";
  console.log(toDo);
};

form.addEventListener("submit", newValue);

// const render = () => {
//   // Получаем контейнер задач
//   const taskContainer = document.querySelector(".container");

//   // Удаляем все существующие задачи из контейнера
//   while (taskContainer.firstChild) {
//     taskContainer.removeChild(taskContainer.firstChild);
//   }

//   // Добавляем каждую задачу из массива toDo в контейнер
//   toDo.forEach((task) => {
//     const newDiv = createNewDiv(task.text, "div-class");
//     taskContainer.appendChild(newDiv);
//   });
// };
