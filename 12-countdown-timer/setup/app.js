const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// Set the future date and time for the giveaway
let futureDate = new Date(2024, 4, 6, 15, 30, 0); // May 6, 2024, 15:30:00

// Extract individual components from the future date
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const sec = futureDate.getSeconds();
const date = futureDate.getDate();

// Display giveaway end date and time
giveaway.textContent = `Giveaway ends on ${day}, ${date} ${month} ${year}, ${hour}:${minute}:${sec}`;

// Calculate future time in milliseconds
const futureTime = futureDate.getTime();

// Function to get remaining time until the future date
const getRemainTime = () => {
  const today = new Date().getTime(); // Current time in milliseconds
  const t = futureTime - today; // Remaining time in milliseconds

  // Conversion constants
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);
  const values = [days, hours, minutes, seconds];

  // Function to format the values with leading zeros if less than 10
  const format = (item) => {
    if (item < 10) {
      return `0${item}`;
    } else return item;
  };

  // Update the countdown display with formatted values
  items.forEach((item, index) => {
    item.textContent = format(values[index]);
  });

  // Display expired message when the countdown reaches zero
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this has expired.</h4>`;
  }
};

// Update remaining time every second
let countdown = setInterval(getRemainTime, 1000);

// Initial call to get remaining time on page load
getRemainTime();
