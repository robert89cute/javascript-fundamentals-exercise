// Get the current date and time
let now = new Date();

// Get the current year and month
let currentYear = now.getFullYear();
let currentMonth = now.getMonth();

// Calculate the date of next Christmas
let christmasDate = new Date(currentYear, 11, 25);
if (currentMonth == 11 && now.getDate() > 25) {
	christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}

// Calculate the number of days until Christmas
let daysLeft = Math.ceil((christmasDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

// Display the number of days left until Christmas
let daysLeftElement = document.getElementById("days-left");
daysLeftElement.innerHTML = `Christmas<br>In ${daysLeft} days`;