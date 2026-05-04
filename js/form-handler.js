/**
 * Form Handler with EmailJS Integration
 * Reusable email sending functionality for all forms across the website
 * 
 * Setup Instructions:
 * 1. Sign up for free at https://www.emailjs.com/
 * 2. Create an Email Service (Gmail, Outlook, etc.)
 * 3. Create an Email Template
 * 4. Get your Public Key from Account > API Keys
 * 5. Update the configuration below with your credentials
 */

// EmailJS Configuration
const EMAIL_CONFIG = {
    serviceID: 'service_jdbepjp',        // Replace with your EmailJS Service ID
    templateID: 'template_hd7fu0q',      // Replace with your EmailJS Template ID
    publicKey: 'mKdKrR3Dz-4mIs4HQ'         // Replace with your EmailJS Public Key
};

// Initialize EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAIL_CONFIG.publicKey);
    }
})();

/**
 * Send appointment email
 * @param {Object} formData - Form data object containing all form fields
 * @param {Function} onSuccess - Callback function on success
 * @param {Function} onError - Callback function on error
 */
function sendAppointmentEmail(formData, onSuccess, onError) {
    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS is not loaded. Please include the EmailJS SDK.');
        if (onError) onError('EmailJS library not loaded');
        return;
    }

    // Show loading state
    const submitButton = document.querySelector('.btn-appointment');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;

    // Send email using EmailJS
    emailjs.send(EMAIL_CONFIG.serviceID, EMAIL_CONFIG.templateID, formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Reset button
            submitButton.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
            submitButton.style.backgroundColor = '#10b981';
            
            // Show success message
            showNotification('Success! Your appointment request has been sent. We will contact you within 24 hours.', 'success');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                submitButton.style.backgroundColor = '';
            }, 3000);
            
            if (onSuccess) onSuccess(response);
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            
            // Reset button
            submitButton.innerHTML = '<i class="fas fa-times"></i> Failed to Send';
            submitButton.style.backgroundColor = '#ef4444';
            
            // Show error message
            showNotification('Sorry, there was an error sending your request. Please try again or contact us directly at +91-7899885570', 'error');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                submitButton.style.backgroundColor = '';
            }, 3000);
            
            if (onError) onError(error);
        });
}

/**
 * Handle appointment form submission
 * @param {Event} e - Form submit event
 */
function handleAppointmentForm(e) {
    e.preventDefault();
    
    const form = e.target;
    
    // Get form data
    const formData = {
        from_name: form.querySelector('input[type="text"]')?.value || '',
        phone: form.querySelector('input[type="tel"]')?.value || '',
        email: form.querySelector('input[type="email"]')?.value || '',
        preferred_date: form.querySelector('input[type="date"]')?.value || '',
        destination: form.querySelector('select[required]:nth-of-type(1)')?.selectedOptions[0]?.text || '',
        service: form.querySelector('select[required]:nth-of-type(2)')?.selectedOptions[0]?.text || '',
        message: form.querySelector('textarea')?.value || 'No additional information provided',
        to_email: 'saarglobalreach@gmail.com'
    };
    
    // Validate required fields
    if (!formData.from_name || !formData.phone || !formData.email) {
        showNotification('Please fill in all required fields.', 'warning');
        return;
    }
    
    // Send email
    sendAppointmentEmail(formData, function(response) {
        // Success callback - reset form
        form.reset();
    }, function(error) {
        // Error callback
        console.error('Email sending failed:', error);
    });
}

/**
 * Handle contact form submission (can be used for contact.html)
 * @param {Event} e - Form submit event
 */
function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    
    // Get form data (adjust selectors based on your contact form structure)
    const formData = {
        from_name: form.querySelector('input[name="name"], #name')?.value || '',
        phone: form.querySelector('input[name="phone"], #phone')?.value || '',
        email: form.querySelector('input[name="email"], #email')?.value || '',
        subject: form.querySelector('input[name="subject"], #subject')?.value || 'Contact Form Submission',
        message: form.querySelector('textarea[name="message"], #message')?.value || '',
        to_email: 'saarglobalreach@gmail.com'
    };
    
    // Validate required fields
    if (!formData.from_name || !formData.email || !formData.message) {
        showNotification('Please fill in all required fields.', 'warning');
        return;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    // Send email
    emailjs.send(EMAIL_CONFIG.serviceID, EMAIL_CONFIG.templateID, formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            submitButton.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
            submitButton.style.backgroundColor = '#10b981';
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            form.reset();
            
            setTimeout(() => {
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                submitButton.style.backgroundColor = '';
            }, 3000);
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            submitButton.innerHTML = '<i class="fas fa-times"></i> Failed to Send';
            submitButton.style.backgroundColor = '#ef4444';
            showNotification('Sorry, there was an error. Please try again.', 'error');
            
            setTimeout(() => {
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                submitButton.style.backgroundColor = '';
            }, 3000);
        });
}

/**
 * Show notification message
 * @param {string} message - Message to display
 * @param {string} type - Notification type: 'success', 'error', 'warning', 'info'
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.email-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `email-notification ${type}`;
    
    // Set icon based on type
    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    else if (type === 'error') icon = 'fa-exclamation-circle';
    else if (type === 'warning') icon = 'fa-exclamation-triangle';
    
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Auto remove after 6 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 6000);
}

// Initialize form handlers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Appointment form (used in faq.html and other pages)
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', handleAppointmentForm);
    }
    
    // Contact form (can be used in contact.html)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});
