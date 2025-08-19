document.addEventListener('DOMContentLoaded', function() {
    // Password toggle functionality
    const passwordToggle = document.querySelector('.thara-password-toggle');
    if (passwordToggle) {
        passwordToggle.addEventListener('click', function() {
            const passwordInput = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }

    // Form submission
    const loginForm = document.getElementById('tharaLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const submitText = submitBtn.querySelector('span');
            const submitIcon = submitBtn.querySelector('i');
            
            // Show loading state
            submitText.textContent = 'Authenticating...';
            submitIcon.classList.remove('fa-arrow-right');
            submitIcon.classList.add('fa-spinner', 'fa-spin');
            
            // Simulate API call
            setTimeout(() => {
                // Show success state
                submitText.textContent = 'Login Successful!';
                submitIcon.classList.remove('fa-spinner', 'fa-spin');
                submitIcon.classList.add('fa-check');
                submitBtn.style.backgroundColor = '#0a1f3d';
                
                // Redirect after delay
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            }, 2000);
        });
    }

    // Social login buttons
    const socialButtons = document.querySelectorAll('.thara-social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`Login with ${this.textContent.trim()} would be handled here`);
        });
    });

    // Forgot password link
    const forgotPassword = document.querySelector('.thara-forgot-password');
    if (forgotPassword) {
        forgotPassword.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Password reset functionality would be implemented here');
        });
    }
});