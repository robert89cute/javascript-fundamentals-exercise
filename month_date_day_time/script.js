// Get the current date and time
let now = new Date();

// Get the day of the week as a string
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek = daysOfWeek[now.getDay()];

// Get the month as a string
let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthsOfYear[now.getMonth()];

// Format the date as a string
let date = now.getDate();

// Format the time as a string in 12-hour format with AM or PM
let timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
let time = now.toLocaleTimeString([], timeOptions);

// Display the date, month, day of the week, and time on separate lines on the webpage
let dateTimeElement = document.getElementById("date-time");
dateTimeElement.innerHTML = `<span class="month-date">${month} ${date}</span><br><span class="time">
${time}</span><br><span class="day-of-week">${dayOfWeek}</span>`;