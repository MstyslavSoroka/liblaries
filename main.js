// console.log(nanoid());

// const btn = document.getElementById("btn");
// const text = document.getElementById("text");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const code = nanoid();
//   text.textContent = `Ваш код: ${code}`;
// });

// function registerUser() {
//   const name = document.getElementById("username").value.trim();
//   if (name) {
//     PNotify.success({
//       title: "Success",
//       text: `Користувач ${name} успішно зареестрован`,
//       delay: 2000,
//     });
//   } else {
//     PNotify.error({
//       title: "Error",
//       text: `Введіть ім'я`,
//       delay: 2000,
//     });
//   }
// }
import { nanoid } from "https://cdn.skypack.dev/nanoid";

const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");
const check = document.getElementById("check");

function addTask() {
  const taskText = input.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
    <p>${taskText}</p>
    <input id="check" type="checkbox">
    <button type="button" id=""del>delete</button>
    `;
    li.classList.add(nanoid())

    ul.appendChild(li);
    input.value = "";
    li.addEventListener(`click`, (event) => {
      if (event.target.tagName === `BUTTON`) {
        const li = event.target.closest(`LI`);
        li.remove();
      }
    });
    li.addEventListener(`change`, (event) => {
      if (event.target.tagName === `INPUT`) {
        const p = event.target.closest('li').querySelector('p');
        p.style.textDecoration = "line-through";
      }
    });
  }
}

const btn = document.getElementById("addTaskBtn");

btn.addEventListener("click", addTask);
