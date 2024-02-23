// login.js
$(document).ready(function() {
    // Event listener for the login button
    $('#login-btn').click(function(e) {
        e.preventDefault(); // Prevent form submission
        
        // Get the username and password entered by the user
        var username = $('#username').val();
        var password = $('#password').val();
        
        // For demonstration, let's assume the login is successful
        // In a real scenario, you would validate the credentials with your backend
        
        // Insert the username into the navbar
        var usernameListItem = '<li class="nav-item navbar-text">Welcome, ' + username + '</li>';
        $('#login-logout').before(usernameListItem);
    });
});
