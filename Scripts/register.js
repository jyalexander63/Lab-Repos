// register.js
$(document).ready(function() {
    // Function to show error message
    function showError(message) {
        $('#ErrorMessage').text(message).show();
    }

    // Function to hide error message
    function hideError() {
        $('#ErrorMessage').hide();
    }

    // Event listener for form submission
    $('#registerForm').submit(function(e) {
        // Prevent default form submission
        e.preventDefault();

        // Get the values of first name and last name
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        // Check if the length of first name is less than 2 characters
        if (firstName.length < 2) {
            showError('First name must be at least 2 characters long.');
            return; // Exit the function early if there's an error
        }

        // Check if the length of last name is less than 2 characters
        if (lastName.length < 2) {
            showError('Last name must be at least 2 characters long.');
            return; // Exit the function early if there's an error
        }

        if (email.length <8) {
            showError('Email must be at least 8 characters long.')
            return;
        }

        if (email.indexOf('@') === -1) {
            showError('Email must contain "@" symbol.');
            return;
        }

        if (password.length < 6) {
            showError('Password must be at least 6 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            showError('Passwords do not match.');
            return;
        }



       /* if (!emailPattern.test(email)) {
            showError('Invalid email format.');
            return;
        }
        */

        

        // If validation passes, hide the error message
        hideError();

        // Proceed with registration (submit the form or perform further actions)
    });
});
