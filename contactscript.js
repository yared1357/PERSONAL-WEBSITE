// JavaScript Code (script.js)
function handleSubmit(event) {
  event.preventDefault();
  // Perform any additional form validation or processing here
  // For demonstration purposes, we'll simply show the success message as an alert
  alert("Message sent successfully!");

  // Reset the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  document.getElementById("myfile").value = "";

  return false;
}