// Function to update the countdown
function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();
  
    // Calculate the remaining time
    const distance = countDownDate - now;
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the countdown
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Happy New Year!";
    }
  }
  
  // Set the initial date to 2024
  let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
  updateCountdown();
  
  // Update the countdown every 1 second
  const countdownInterval = setInterval(updateCountdown, 1000);
  
  // Function to show the goals list
  function showGoals() {
    const goalsList = document.getElementById("goalsList");
    goalsList.classList.toggle("hidden");
  }