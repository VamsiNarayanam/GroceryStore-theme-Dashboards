(function () {
  'use strict';

  var FM = window.FreshMart;

  function initLogin() {
    var form = document.getElementById('loginForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      FM.clearAllErrors(form);

      var email = document.getElementById('email').value.trim();
      var password = document.getElementById('password').value;
      var role = document.querySelector('input[name="role"]:checked');
      var valid = true;

      if (!email) {
        FM.showFieldError('email', 'Email address is required.');
        valid = false;
      } else if (!FM.validateEmail(email)) {
        FM.showFieldError('email', 'Please enter a valid email address.');
        valid = false;
      }

      if (!password) {
        FM.showFieldError('password', 'Password is required.');
        valid = false;
      } else if (password.length < 6) {
        FM.showFieldError('password', 'Password must be at least 6 characters.');
        valid = false;
      }

      if (!role) {
        FM.showToast('Please select an account role.', 'error');
        valid = false;
      }

      if (!valid) return;

      var name = email.split('@')[0].replace(/[._]/g, ' ');
      name = name.charAt(0).toUpperCase() + name.slice(1);

      sessionStorage.setItem('freshmart_role', role.value);
      sessionStorage.setItem('freshmart_user_email', email);
      sessionStorage.setItem('freshmart_user_name', name);

      if (document.getElementById('rememberMe') && document.getElementById('rememberMe').checked) {
        sessionStorage.setItem('freshmart_remember', 'true');
      }

      FM.showToast('Welcome back! Redirecting to your dashboard...', 'success');

      setTimeout(function () {
        if (role.value === 'admin') {
          window.location.href = 'dashboard-admin.html';
        } else {
          window.location.href = 'dashboard-customer.html';
        }
      }, 800);
    });

    var forgotLink = document.getElementById('forgotPassword');
    if (forgotLink) {
      forgotLink.addEventListener('click', function () {
        window.location.href = '404.html';
      });
    }
  }

  function initSignup() {
    var form = document.getElementById('signupForm');
    if (!form) return;

    var roleInputs = document.querySelectorAll('input[name="accountType"]');
    var addressField = document.getElementById('addressField');

    roleInputs.forEach(function (input) {
      input.addEventListener('change', function () {
        if (addressField) {
          if (input.value === 'customer' && input.checked) {
            addressField.classList.add('visible');
          } else if (input.value === 'admin' && input.checked) {
            addressField.classList.remove('visible');
          }
        }
      });
    });

    var defaultRole = document.querySelector('input[name="accountType"]:checked');
    if (defaultRole && defaultRole.value === 'customer' && addressField) {
      addressField.classList.add('visible');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      FM.clearAllErrors(form);

      var fullName = document.getElementById('fullName').value.trim();
      var email = document.getElementById('signupEmail').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var password = document.getElementById('signupPassword').value;
      var confirmPassword = document.getElementById('confirmPassword').value;
      var accountType = document.querySelector('input[name="accountType"]:checked');
      var terms = document.getElementById('terms');
      var valid = true;

      if (!fullName) {
        FM.showFieldError('fullName', 'Full name is required.');
        valid = false;
      } else if (fullName.length < 2) {
        FM.showFieldError('fullName', 'Please enter your full name.');
        valid = false;
      }

      if (!email) {
        FM.showFieldError('signupEmail', 'Email address is required.');
        valid = false;
      } else if (!FM.validateEmail(email)) {
        FM.showFieldError('signupEmail', 'Please enter a valid email address.');
        valid = false;
      }

      if (phone && !/^[\d\s\-+()]{7,15}$/.test(phone)) {
        FM.showFieldError('phone', 'Please enter a valid phone number.');
        valid = false;
      }

      if (!password) {
        FM.showFieldError('signupPassword', 'Password is required.');
        valid = false;
      } else if (password.length < 6) {
        FM.showFieldError('signupPassword', 'Password must be at least 6 characters.');
        valid = false;
      }

      if (!confirmPassword) {
        FM.showFieldError('confirmPassword', 'Please confirm your password.');
        valid = false;
      } else if (password !== confirmPassword) {
        FM.showFieldError('confirmPassword', 'Passwords do not match.');
        valid = false;
      }

      if (!accountType) {
        FM.showToast('Please select an account type.', 'error');
        valid = false;
      }

      if (accountType && accountType.value === 'customer') {
        var address = document.getElementById('deliveryAddress');
        if (address && !address.value.trim()) {
          FM.showFieldError('deliveryAddress', 'Delivery address is required for customers.');
          valid = false;
        }
      }

      if (!terms || !terms.checked) {
        FM.showToast('Please accept the Terms of Service to continue.', 'error');
        valid = false;
      }

      if (!valid) return;

      var successBanner = document.getElementById('successBanner');
      if (successBanner) {
        successBanner.classList.add('visible');
      }

      form.style.display = 'none';

      setTimeout(function () {
        window.location.href = 'login.html';
      }, 2000);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLogin();
    initSignup();
  });
})();
