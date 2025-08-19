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
    const signupForm = document.getElementById('tharaSignupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const submitText = submitBtn.querySelector('span');
            const submitIcon = submitBtn.querySelector('i');
            
            // Show loading state
            submitText.textContent = 'Creating Account...';
            submitIcon.classList.remove('fa-arrow-right');
            submitIcon.classList.add('fa-spinner', 'fa-spin');
            
            // Simulate API call
            setTimeout(() => {
                // Show success state
                submitText.textContent = 'Account Created!';
                submitIcon.classList.remove('fa-spinner', 'fa-spin');
                submitIcon.classList.add('fa-check');
                submitBtn.style.backgroundColor = '#0a1f3d';
                
                // Redirect after delay
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            }, 2000);
        });
    }

    // Social login buttons
    const socialButtons = document.querySelectorAll('.thara-social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`Sign up with ${this.textContent.trim()} would be handled here`);
        });
    });
});