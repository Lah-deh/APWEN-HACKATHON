
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from reloading the page
    const checkboxes = form.querySelectorAll('input[type="checkbox"][name="use"]');


  const oneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

  if (!oneChecked) {
    alert('Please select at least one feature.');
    return;
  }


    if (form.checkValidity()) {
      // All required fields are filled — now you can simulate navigation
      window.location.href = "result.html";
    } else {
      form.reportValidity(); // This shows built-in validation messages
    }
  });
