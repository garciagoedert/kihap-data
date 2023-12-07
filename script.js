function checkIn(name) {
    const timestamp = Date.now();
    const data = { name, timestamp };
  
    // Encode data string
    const encodedData = JSON.stringify(data);
  
    // Create cookie with unique identifier and encoded data
    const cookieName = `checkIn-${Math.floor(Math.random() * 1000000)}`;
    document.cookie = `${cookieName}=${encodedData}; expires=Tue, 31 Dec 2023 23:59:59 GMT`;
  
    // Display confirmation message
    alert(`Check-in successful! Your data is stored for this session.`);
  }
  
  // Submit form and trigger check-in function
  const form = document.getElementById('check-in-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    checkIn(name);
  });
  