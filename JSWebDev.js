document.addEventListener("DOMContentLoaded", function () {
//JS for L4
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

//JS for L5
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

});