document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Get values from separate inputs
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value); // 0-indexed
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked');
    console.log(day, month, year, gender);
  });
