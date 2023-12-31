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
      showAfterCountdown(); // Show after countdown message
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
  
  // Function to show the after countdown message
  function showAfterCountdown() {
    const afterCountdown = document.getElementById("afterCountdown");
    afterCountdown.style.display = "block";
  }
  
  // Function to update the total users online
  function updateTotalUsers(count) {
    const totalUsersSpan = document.getElementById("totalUsers");
    totalUsersSpan.innerText = count;
  }
  
  // Simulate user online count (replace this with your actual user tracking logic)
  let totalUsersOnline = 0;
  
  // Update total users every 5 seconds
  setInterval(function() {
    totalUsersOnline++;
    updateTotalUsers(totalUsersOnline);
  }, 5000);
  function sendWebhook(webhookUrl, username) {
    // Build the embed message
    const embed = {
      title: 'New User Login',
      description: 'A user has logged into the website:',
      fields: [
        {
          name: 'Username',
          value: username
        }
      ],
      color: 65280 // Green color
    };
  
    // Create the payload data
    const data = {
      embeds: [embed]
    };
  
    // Send the webhook request
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log('Webhook sent successfully:', response.status);
    })
    .catch(error => {
      console.error('Error sending webhook:', error.message);
    });
  }
  
  // Example usage (when user logs in)
  const webhookUrl = 'https://discord.com/api/webhooks/1191037023411257445/hbtV_VNKIYMemBXOkgeBa3gFLHmE7brIF-VcKVzyU81h9c2hKZfYvcPO9dPenaztln1O';
  const username = 'random guy';
  
  sendWebhook(webhookUrl, username);