document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const gender = document.querySelector('input[name="gender"]:checked')
    ? document.querySelector('input[name="gender"]:checked').value
    : undefined;
  const units = document.querySelector('input[name="units"]:checked')
    ? document.querySelector('input[name="units"]:checked').value
    : undefined;

  const age = parseInt(document.getElementById("age").value);

  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
    alert(
      "Please enter valid values for weight, height, gender, age, and units."
    );

    return;
  }

  const requestBody = {
    weight,
    height,
    gender,
    age,
    units,
  };

  fetch("/bmicalculator", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.text())
    .then((result) => {
      document.getElementById(
        "result"
      ).innerHTML = `<div class="alert alert-primary">${result}</div>`;
    })
    .catch((error) => console.error("Error:", error));
});

document
  .getElementById("viewHistoryBtn")
  .addEventListener("click", function () {
    window.location.href = "/history";
  });
