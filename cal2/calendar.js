const calendarBody = document.getElementById("calendar-body");
const monthYearDisplay = document.getElementById("month-year");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");

let currentDate = new Date();

function renderCalendar(date) {
  // Clear previous calendar
  calendarBody.innerHTML = "";

  // Set month and year title
  const month = date.getMonth();
  const year = date.getFullYear();
  monthYearDisplay.textContent = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });

  // Determine the first day of the month and number of days in the month
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get today's date for comparison
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  let day = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j < firstDay) {
        // Empty cell before the first day of the month
        cell.innerHTML = "";
      } else if (day > daysInMonth) {
        // Empty cell after the last day of the month
        cell.innerHTML = "";
      } else {
        // Add day number and optional background image
        const dayNumber = document.createElement("span");
        dayNumber.textContent = day;
        dayNumber.classList.add("day-number");

        // Check if this day is today
        if (day === todayDate && month === todayMonth && year === todayYear) {
          cell.classList.add("today"); // Add the "today" class for today's date
        }

        // Example of setting a background image (replace with your image source)
        const img = document.createElement("img");
        // img.src = `images/${month + 1}_${day}.jpg`; // Adjust to match your image naming convention

        cell.appendChild(img);
        cell.appendChild(dayNumber);

        // Attach click event listener to the <td>
        cell.addEventListener("click", () => onCellClick(day, month, year));

        day++;
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }
}

// Function to handle <td> clicks
function onCellClick(day_, month, year) {
  alert(`You clicked on: ${day_}/${month + 1}/${year}`);
  // Add your custom action here, e.g., show details or open a modal
}

// Navigation functions
function goToNextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
}

function goToPreviousMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
}

// Event listeners for buttons
nextMonthButton.addEventListener("click", goToNextMonth);
prevMonthButton.addEventListener("click", goToPreviousMonth);

// Initial calendar render
renderCalendar(currentDate);
