// Author: Jy Alexander
// Student ID: 100902103
// Date Completed: Feb 22 2024


class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

// Define error messages as constants
const ERROR_MESSAGES = {
    minLength: (fieldName, minLength) => `${fieldName} must be at least ${minLength} characters long.`,
    emailFormat: 'Invalid email format.',
    passwordLength: 'Password must be at least 6 characters long.',
    passwordMismatch: 'Passwords do not match.'
};

// Function to show error message
function showError(message) {
    $('#ErrorMessage').text(message).show();
}

// Function to hide error message
function hideError() {
    $('#ErrorMessage').hide();
}

// Validate minimum length
function validateMinLength(value, fieldName, minLength) {
    if (value.length < minLength) {
        showError(ERROR_MESSAGES.minLength(fieldName, minLength));
        return false;
    }
    return true;
}

// Validate email format using a regular expression
function validateEmailFormat(email) {
    // Check if the email length is at least 8 characters long
    if (email.length < 8) {
        showError(ERROR_MESSAGES.minLength('Email', 8));
        return false;
    }
    // Check if the email contains the "@" symbol
    if (email.indexOf('@') === -1) {
        showError('Email must contain "@" symbol.');
        return false;
    }
    // Check if the email matches the email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError(ERROR_MESSAGES.emailFormat);
        return false;
    }

    return true;
}

// Validate password length
function validatePasswordLength(password) {
    if (password.length < 6) {
        showError(ERROR_MESSAGES.passwordLength);
        return false;
    }
    return true;
}

// Validate password match
function validatePasswordMatch(password, confirmPassword) {
    if (password !== confirmPassword) {
        showError(ERROR_MESSAGES.passwordMismatch);
        return false;
    }
    return true;
}

$(document).ready(function() {
    $('#registerForm').submit(function(e) {
        e.preventDefault();

        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        // Validate first name and last name
        if (!validateMinLength(firstName, 'First name', 2) ||
            !validateMinLength(lastName, 'Last name', 2)) {
            return;
        }

        // Validate email format
        if (!validateMinLength(email, 'Email', 8) || !validateEmailFormat(email)) {
            return;
        }

        // Validate password length and match
        if (!validatePasswordLength(password) ||
            !validatePasswordMatch(password, confirmPassword)) {
            return;
        }

        // Create user instance, hide errors, and clear form
        var user = new User(firstName, lastName, email, password);

        // If validation passes, hide the error message
        hideError();
        
        // Log the registered users data to the console
        console.log("User registered:", user);

        // clear the input fields on the form
        $('#registerForm')[0].reset();
    });
});
