window.onload = function () {
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  var isSignedUp = localStorage.getItem("isSignedUp");

  if (!isLoggedIn && !isSignedUp) {
    // Redirect to the signup page for first-time users
    window.location.href = "signup.html";
  } else if (!isLoggedIn && isSignedUp) {
    // Redirect to the login page for signed-up users
    window.location.href = "login.html";
  } else {
    // Retrieve username from local storage and display greeting and logout button
    const userName = localStorage.getItem('username');
    document.getElementById('userGreeting').style.display = 'block';
    document.getElementById('userName').textContent = userName;

   // Add click event listener to the logout button
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function () {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      window.location.href = 'login.html'; // Redirect to login page
    });
  }}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}