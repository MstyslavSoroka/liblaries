// const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "Temperature",
//       data: [1,2,3,6,12,4,3,1],
//       fill: false,
//       borderColor: "grey",
//       tension: 0.1,
//     },
//   ],
// };
// const config = {
//   type: "line",
//   data: data,
//   options: {},
// };

// const chart = new Chart(document.getElementById("chart"), config);

document.getElementById("openImage").onclick = () => {
  basicLightbox
    .create(
      `<img src="https://via.placeholder.com/600x400" alt="Велике зображення" />`
    )
    .show();
};
