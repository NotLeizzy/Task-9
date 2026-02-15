document.addEventListener("DOMContentLoaded", function () {
//JS for L3
let currentLevel = 1;

const badge = document.getElementById("badge");
const msg = document.getElementById("msg");
const levelUpBtn = document.getElementById("levelUpBtn");

 if (levelUpBtn) {
    levelUpBtn.addEventListener("click", function () {
      if (currentLevel < 6) currentLevel++;

      badge.innerHTML =
        '<i class="bi bi-bar-chart-steps me-1"></i> Level ' + currentLevel;

      msg.innerHTML =
        '<i class="bi bi-arrow-up-circle-fill me-1"></i> You leveled up! Current Level: ' +
        currentLevel;
    });
  }

//JS for L4
 const heroName = document.getElementById("heroName");
  const submitBtn = document.getElementById("submitBtn");
  const result = document.getElementById("result");

  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      const name = heroName.value.trim();

      if (name === "") {
        result.className = "text-danger fw-semibold";
        result.textContent = "Name is required!";
      } else {
        result.className = "text-success fw-semibold";
        result.textContent = "Welcome, " + name + " ✅";
      }
    });
  }

  //JS for L5
 let coins = 0;

const coinsSpan = document.getElementById("coins");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

plusBtn.addEventListener("click", function () {
  coins++;
  coinsSpan.textContent = coins;
});

minusBtn.addEventListener("click", function () {
  if (coins > 0) {
    coins--;
    coinsSpan.textContent = coins;
  }
});

//JS FOR L6
const winningDoor = 2;
const resultDR = document.getElementById("result");
const doorBtns = document.querySelectorAll(".doorBtn");

doorBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const picked = Number(btn.dataset.door);

    if (picked === winningDoor) {
      resultDR.className = "alert alert-success mt-3 mb-0";
      resultDR.innerHTML =
        '<i class="bi bi-trophy-fill me-2"></i> Correct! Quest Complete <i class="bi bi-check-circle-fill"></i>';
    } else {
      resultDR.className = "alert alert-danger mt-3 mb-0";
      resultDR.innerHTML =
        '<i class="bi bi-x-circle-fill me-2"></i> Wrong door. Try again!';
    }
  });
});
});