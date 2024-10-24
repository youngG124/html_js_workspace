const calendarBody = document.getElementById('calendar-body');
const monthYear = document.getElementById('month-year');

let currentDate = new Date();

function loadCalendar(date) {
  // Clear the previous calendar
  calendarBody.innerHTML = '';

  const year = date.getFullYear();
  const month = date.getMonth();
  
  // Get first and last day of the month
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Update month and year
  monthYear.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

  let day = 1;

  // Create 6 rows for the calendar
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    // Create 7 columns for days
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      
      // Fill the first row with empty cells until the first day of the month
      if (i === 0 && j < firstDayOfMonth) {
        cell.innerText = '';
      } else if (day > daysInMonth) {
        break;
      } else {
        // Add the day number and the image
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.innerText = day;

        const img = document.createElement('img');
        // Replace 'your-image-path.jpg' with the path to your actual image
        img.src = `https://via.placeholder.com/150?text=${day}`; 

        cell.appendChild(img); // Add the image to the cell
        cell.appendChild(dayNumber); // Add the day number on top

        day++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

// Detect scroll to switch months
document.addEventListener('wheel', function(event) {
  if (event.deltaY < 0) {
    // Scrolled up, go to previous month
    currentDate.setMonth(currentDate.getMonth() - 1);
    loadCalendar(currentDate);
  } else if (event.deltaY > 0) {
    // Scrolled down, go to next month
    currentDate.setMonth(currentDate.getMonth() + 1);
    loadCalendar(currentDate);
  }
});

// Load the calendar for the current month on page load
loadCalendar(currentDate);
