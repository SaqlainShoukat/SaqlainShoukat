document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const monthYearText = document.getElementById('month-year');
  const calendarDays = document.getElementById('calendar-days');

  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  function generateCalendar() {
    let firstDay = new Date(currentYear, currentMonth, 1);
    let lastDay = new Date(currentYear, currentMonth + 1, 0);

    monthYearText.textContent = `${getMonthName(currentMonth)} ${currentYear}`;

    // Clear existing days
    calendarDays.innerHTML = '';

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      let emptyCell = document.createElement('div');
      calendarDays.appendChild(emptyCell);
    }

    // Add days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      let dayCell = document.createElement('div');
      dayCell.textContent = i;
      if (currentYear === currentDate.getFullYear() &&
          currentMonth === currentDate.getMonth() &&
          i === currentDate.getDate()) {
        dayCell.classList.add('current-month-day');
      }
      calendarDays.appendChild(dayCell);
    }
  }

  function getMonthName(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
  }

  generateCalendar();

  prevBtn.addEventListener('click', function() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar();
  });

  nextBtn.addEventListener('click', function() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar();
  });
});
