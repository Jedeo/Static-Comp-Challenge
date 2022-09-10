import _ from "lodash";
import "./style.css";

import Chart from "chart.js/auto";

const dataHtml = document.querySelector(".inner-html");
const pencil = document.querySelector(".pencil");
const showForm = document.querySelector(".user-application");
//const summary = document.querySelector('.summary')
const social = document.querySelectorAll(".social");
const ctx = document.getElementById("myChart");
const chartDiv = document.querySelector(".chart-div");

const doneButton = document.querySelector(".submit-information");

window.addEventListener("load", () => {
  showGraph();
  showData();
  displaySocial();
});

doneButton.addEventListener("click", () => {
  chartDiv.classList.remove("hidden");

  displayResults();
});

pencil.addEventListener("click", () => {
  chartDiv.classList.add("hidden");
  dataHtml.innerHTML = "";
  render();
});

function render() {
  showForm.classList.toggle("hidden");
}

console.log(social);

function displayResults() {
  showForm.classList.toggle("hidden");

  showGraph();
  showData();
}

function showGraph() {
  const myChart = new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: ["Applicants", "Interviews", "Forwards"],
      datasets: [
        {
          label: "# of Votes",
          data: [3154, 1546, 912],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          // borderWidth: 1
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
function showData() {
  const userPosition = document.getElementById("userPosition").value;
  const userLocation = document.getElementById("userLocation").value;
  const userEmployment = document.getElementById("userEmployment").value;
  const userExperience = document.getElementById("userExperience").value;
  const userStatus = document.getElementById("userStatus").value;
  const userDescription = document.getElementById("userDescription").value;

  dataHtml.innerHTML = "";
  displaySocial();
  dataHtml.innerHTML = `
   <div class="user-apply">
        <h3> JOB DESCRIPTION </h3>
        <button class="submit-information"> <img src="../src/images/pencil.png" alt="pencil-icon" > Edit </button>
   </div>
   <form class="user-form">
       <label class="user-input position-title"> POSITION TITLE  <p class="user-response"> viverra nibh ${userPosition} </p> </label>
       <label class="user-input location"> LOCATION <p class="user-response"> San Francico ${userLocation} </p>  </label>
       <label class="user-input employment"> EMPLOYMENT TYPE <p class="user-response"> Full-time ${userEmployment} </p>   </label>
       <label class="user-input experience"> EXPERIENCE <p class="user-response"> Mid-level${userExperience} </p>  </label>
       <label class="user-input status"> STATUS <p class="user-response"> open ${userStatus} </p>  </label>
       <label class="user-input description"> DESCRIPTION <p class="user-response"> Lorem ipsum dolor sit amet, 
       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet 
       porttitor eget dolor morbi. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Orci ac auctor augue mauris augue. 
       Est sit amet facilisis magna etiam tempor orci eu lobortis. Ornare aenean euismod elementum nisi quis eleifend quam. 
       Lobortis mattis aliquam faucibus purus in. ${userDescription} </p>   </label>
   </form>`;
}

function displaySocial() {
  social.forEach((social) => social.classList.remove("hidden"));
}
