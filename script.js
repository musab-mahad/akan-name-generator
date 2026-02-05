document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Get values from separate inputs
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value); // 0-indexed
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validation
    if (
      isNaN(day) ||
      isNaN(month) ||
      isNaN(year) ||
      !gender ||
      day < 1 ||
      day > 31 ||
      month < 0 ||
      month > 11
    ) {
      alert("Please enter a valid date and select a gender.");
      return;
    }

    if (!day || !month || !year || !gender) {
      alert("Please fill all fields and select a gender.");
      return;
    }

    if (day < 1 || day > 31 || month < 1 || month > 12) {
      alert("Please enter a valid day (1-31) and month (1-12).");
      return;
    }

    // Create a Date object to calculate the day of the week
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

    // Akan names
    const maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
    const femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const akanName =
      gender.value === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
    const birthDay = days[dayOfWeek];

    // Display result
    document.getElementById("result").innerHTML =
      `You were born on a <b>${birthDay}</b>. Your Akan name is <b>${akanName}</b>.`;
  });
