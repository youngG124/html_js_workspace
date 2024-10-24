const calendarBody = document.getElementById('calendar-body');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

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
        cell.innerText = day;
        day++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

// Navigate to the previous month
prevMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  loadCalendar(currentDate);
});

// Navigate to the next month
nextMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  loadCalendar(currentDate);
});

// Load the calendar for the current month on page load
loadCalendar(currentDate);

function loadCalendar(date) {
  calendarBody.style.opacity = 0; // Start with fading out

  setTimeout(() => {
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
          cell.innerText = day;
          day++;
        }
        row.appendChild(cell);
      }
      calendarBody.appendChild(row);
    }

    // Fade in the new calendar
    calendarBody.style.opacity = 1;
  }, 400); // Delay matching the CSS transition duration
}