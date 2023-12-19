document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // You can customize the validation logic here
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name && email && message) {
      // Use formspree.io to send the form data to your email
      window.location.href = 'https://formspree.io/rachealclara95@gmail.com';
  
      // Optionally, you can perform additional actions after successful submission
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  });