document.addEventListener('DOMContentLoaded', function() {
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    function nextTestimonial() {
        let newIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(newIndex);
    }
    
    function prevTestimonial() {
        let newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(newIndex);
    }
    
    // Auto-rotate testimonials
    let sliderInterval = setInterval(nextTestimonial, 5000);
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        clearInterval(sliderInterval);
        nextTestimonial();
        sliderInterval = setInterval(nextTestimonial, 5000);
    });
    
    prevBtn.addEventListener('click', () => {
        clearInterval(sliderInterval);
        prevTestimonial();
        sliderInterval = setInterval(nextTestimonial, 5000);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(sliderInterval);
            showTestimonial(index);
            sliderInterval = setInterval(nextTestimonial, 5000);
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle (would need additional HTML/CSS)
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.membership-card, .package-item, .about-content, .contact-info');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.membership-card, .package-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    document.querySelector('.about-content').style.opacity = '0';
    document.querySelector('.about-content').style.transform = 'translateX(-20px)';
    document.querySelector('.about-content').style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    document.querySelector('.contact-info').style.opacity = '0';
    document.querySelector('.contact-info').style.transform = 'translateX(-20px)';
    document.querySelector('.contact-info').style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});
// Add this script to your existing JavaScript file
document.addEventListener('DOMContentLoaded', function() {
  const communitySection = document.querySelector('.community');
  const dropImage = document.querySelector('.community-image img');
  
  // Reset position initially
  if (dropImage) {
    dropImage.style.transform = 'translateY(-100%)';
    dropImage.style.opacity = '0';
    dropImage.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.8s ease';
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dropImage.style.transform = 'translateY(0)';
        dropImage.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  if (communitySection) {
    observer.observe(communitySection);
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Clone items for seamless loop
  const track = document.querySelector('.packages-track');
  if (track) {
    const items = document.querySelectorAll('.package-item');
    const firstThree = Array.from(items).slice(0, 3);
    firstThree.forEach(item => {
      track.appendChild(item.cloneNode(true));
    });
  }

  // Entrance observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('entering');
        setTimeout(() => {
          entry.target.classList.remove('entering');
        }, 800);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.package-item').forEach(item => {
    observer.observe(item);
  });

// Less intrusive version
const highlightInterval = setInterval(() => {
  packages[currentHighlight].classList.remove('highlight');
  currentHighlight = (currentHighlight + 1) % packages.length;
  packages[currentHighlight].classList.add('highlight');
  
  // Only animate if the element is already in view
  const rect = packages[currentHighlight].getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    packages[currentHighlight].animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.05)' },
      { transform: 'scale(1)' }
    ], {
      duration: 1000,
      easing: 'ease-in-out'
    });
  }
}, 3000);

  // Cleanup
  window.addEventListener('beforeunload', () => {
    clearInterval(highlightInterval);
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Add click event for mobile users
  const sessions = document.querySelectorAll('.grid-session');
  sessions.forEach(session => {
    session.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        this.classList.toggle('active');
      }
    });
  });

  // Animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  const schedule = document.querySelector('.schedule-container');
  if (schedule) {
    schedule.style.opacity = 0;
    schedule.style.transform = 'translateY(20px)';
    schedule.style.transition = 'all 0.6s ease-out';
    observer.observe(schedule);
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Animation on scroll
  const trainerCards = document.querySelectorAll('.trainer-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }, index * 150);
      }
    });
  }, { threshold: 0.1 });
  
  trainerCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    observer.observe(card);
  });

  // Trainer booking modal would go here
  // document.querySelectorAll('.trainer-card').forEach(card => {
  //   card.addEventListener('click', function() {
  //     // Open booking modal for this trainer
  //   });
  // });
});
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on nav items
    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
});