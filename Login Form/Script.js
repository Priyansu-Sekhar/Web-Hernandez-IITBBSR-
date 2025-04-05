document.getElementById('myForm').addEventListener('submit', function(event) {
    const selectedOption = document.getElementById('options').value;
    console.log('Selected option:', selectedOption);
    // Optionally prevent default to handle via AJAX
    // event.preventDefault();
  });
  function redirectBasedOnRole() {
    // Example: getting the user role. This could be replaced with more dynamic logic
    var role = document.getElementById('role').value;

    if (role === 'admin') {
      window.location.href = 'admin.html';
    } else if (role === 'student') {
      window.location.href = 'index.html';
    } else if (role === 'teacher') {
      window.location.href = 'teacher.html';    
    }
    else {
      alert('Please choose a valid role');
    }
  }