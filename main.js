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

function addTask() {
  const taskText = input.value.trim();

  if (taskText) {
    const id = nanoid();
    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add(id);
    ul.appendChild(li);

    input.value = "";
  }
}
const btn = document.getElementById("addTaskBtn");

btn.addEventListener("click", addTask);
