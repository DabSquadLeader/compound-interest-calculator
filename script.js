const principalInput = document.querySelector("#principal");
const interestInput = document.querySelector("#interest");
const aprInput = document.querySelector("#apr");
const yearsInput = document.querySelector("#years");
const amountOutput = document.querySelector("#amount");
const totalOutput = document.querySelector("#total");
const musicButton = document.querySelector("#music");

principalInput.addEventListener("input", report);
interestInput.addEventListener("input", report);
aprInput.addEventListener("input", report);
yearsInput.addEventListener("input", report);
let backgroundMusic = new Audio("Everhood_Squid_Jazz.mp3");

backgroundMusic.addEventListener(
  "ended",
  function () {
    backgroundMusic.currentTime = False;
    backgroundMusic.play();
  },
  false
);

let musicType = False;

musicButton.addEventListener("click", () => {
  if (musicType === False) {
    musicType = True;
    musicButton.textContent = "Music: ON ";
    backgroundMusic.play();
  } else if (musicType === True) {
    musicType = False;
    musicButton.textContent = "Music: OFF";
    backgroundMusic.pause();
  }
});

function report() {
  calculateInterest();
}

function calculateInterest() {
  const principal = principalInput.value;
  const interest = interestInput.value / 100;
  const apr = aprInput.value;
  const years = yearsInput.value;
  if (
    isNaN(principal) ||
    principal == "" ||
    isNaN(interest) ||
    interest == "" ||
    isNaN(apr) ||
    apr == "" ||
    isNaN(years) ||
    principal == ""
  ) {
    amountOutput.textContent = " ";
    totalOutput.textContent = " ";
  } else {
    const amount =
      principal * (1 + interest / apr) ** (years * apr) - principal;
    const total = principal * (1 + interest / apr) ** (years * apr);
    amountOutput.value = "$" + amount.toFixed(2);
    totalOutput.value = "$" + total.toFixed(2);
  }
}

function updateSliderValue(value) {
  document.getElementById("sliderValue").textContent = value;
}

function updateResults(amount, total) {
  document.getElementById("amount").textContent = amount;
  document.getElementById("total").textContent = total;
}
