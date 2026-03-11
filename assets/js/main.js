/**
 * W.Z. Author Website - Main JavaScript
 * Features: Dark mode toggle, custom lemon cursor, mobile navigation, form handling
 */

(function() {
  'use strict';

  // ==========================================================================
  // 1. DARK MODE TOGGLE
  // ==========================================================================

  const ThemeManager = {
    STORAGE_KEY: 'wz-theme-preference',
    
    init() {
      this.toggleBtn = document.getElementById('theme-toggle');
      this.sunIcon = document.getElementById('sun-icon');
      this.moonIcon = document.getElementById('moon-icon');
      
      if (!this.toggleBtn) return;
      
      this.loadTheme();
      this.toggleBtn.addEventListener('click', () => this.toggleTheme());
    },
    
    loadTheme() {
      // Check localStorage first
      const savedTheme = localStorage.getItem(this.STORAGE_KEY);
      
      if (savedTheme) {
        this.applyTheme(savedTheme);
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.applyTheme(prefersDark ? 'dark' : 'dark'); // Default to dark as requested
      }
    },
    
    toggleTheme() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      this.applyTheme(newTheme);
      localStorage.setItem(this.STORAGE_KEY, newTheme);
    },
    
    applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      this.updateIcons(theme);
    },
    
    updateIcons(theme) {
      if (!this.sunIcon || !this.moonIcon) return;
      
      if (theme === 'dark') {
        this.sunIcon.style.display = 'block';
        this.moonIcon.style.display = 'none';
      } else {
        this.sunIcon.style.display = 'none';
        this.moonIcon.style.display = 'block';
      }
    }
  };

  // ==========================================================================
  // 2. CUSTOM LEMON CURSOR
  // ==========================================================================

  const CursorManager = {
    init() {
      // Only initialize on non-touch devices
      if (window.matchMedia('(pointer: coarse)').matches) return;
      
      this.cursor = document.getElementById('custom-cursor');
      if (!this.cursor) return;
      
      document.body.classList.add('custom-cursor-active');
      this.bindEvents();
    },
    
    bindEvents() {
      // Mouse movement
      document.addEventListener('mousemove', (e) => {
        this.cursor.style.left = e.clientX + 'px';
        this.cursor.style.top = e.clientY + 'px';
      });
      
      // Hover effects on interactive elements
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .card, .nav-link'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => this.cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => this.cursor.classList.remove('hover'));
      });
      
      // Click effects
      document.addEventListener('mousedown', () => this.cursor.classList.add('click'));
      document.addEventListener('mouseup', () => this.cursor.classList.remove('click'));
      
      // Handle mouse leaving/entering window
      document.addEventListener('mouseleave', () => {
        this.cursor.style.opacity = '0';
      });
      
      document.addEventListener('mouseenter', () => {
        this.cursor.style.opacity = '1';
      });
    }
  };

  // ==========================================================================
  // 3. MOBILE NAVIGATION
  // ==========================================================================

  const NavigationManager = {
    init() {
      this.menuBtn = document.getElementById('mobile-menu-btn');
      this.mobileNav = document.getElementById('mobile-nav');
      this.nav = document.getElementById('main-nav');
      
      if (!this.menuBtn || !this.mobileNav) return;
      
      this.bindEvents();
      this.handleScroll();
    },
    
    bindEvents() {
      // Toggle mobile menu
      this.menuBtn.addEventListener('click', () => this.toggleMenu());
      
      // Close menu when clicking on a link
      const mobileLinks = this.mobileNav.querySelectorAll('.mobile-nav-link');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });
      
      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.mobileNav.classList.contains('active')) {
          this.closeMenu();
        }
      });
      
      // Handle scroll for nav background
      window.addEventListener('scroll', () => this.handleScroll());
    },
    
    toggleMenu() {
      const isOpen = this.mobileNav.classList.contains('active');
      
      if (isOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    
    openMenu() {
      this.menuBtn.classList.add('active');
      this.mobileNav.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.menuBtn.setAttribute('aria-expanded', 'true');
    },
    
    closeMenu() {
      this.menuBtn.classList.remove('active');
      this.mobileNav.classList.remove('active');
      document.body.style.overflow = '';
      this.menuBtn.setAttribute('aria-expanded', 'false');
    },
    
    handleScroll() {
      if (!this.nav) return;
      
      const scrollY = window.scrollY;
      
      if (scrollY > 50) {
        this.nav.classList.add('scrolled');
      } else {
        this.nav.classList.remove('scrolled');
      }
    }
  };

  // ==========================================================================
  // 4. FORM HANDLING
  // ==========================================================================

  const FormManager = {
    init() {
      this.forms = document.querySelectorAll('form[data-form-type]');
      this.forms.forEach(form => this.initForm(form));
    },
    
    initForm(form) {
      form.addEventListener('submit', (e) => this.handleSubmit(e, form));
      
      // Real-time validation
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearError(input));
      });
    },
    
    handleSubmit(e, form) {
      e.preventDefault();
      
      const formType = form.getAttribute('data-form-type');
      
      // Validate all fields
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!this.validateField(input)) {
          isValid = false;
        }
      });
      
      if (!isValid) return;
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = this.getLoadingText(formType);
      
      // Simulate form submission (replace with actual endpoint)
      setTimeout(() => {
        this.showSuccess(form, formType);
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        form.reset();
      }, 1500);
    },
    
    validateField(field) {
      const value = field.value.trim();
      const type = field.type;
      let isValid = true;
      let errorMessage = '';
      
      // Required check
      if (field.required && !value) {
        isValid = false;
        errorMessage = 'This field is required.';
      }
      
      // Email validation
      if (isValid && type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address.';
        }
      }
      
      // Update UI
      if (!isValid) {
        this.showError(field, errorMessage);
      } else {
        this.clearError(field);
      }
      
      return isValid;
    },
    
    showError(field, message) {
      field.classList.add('form-error');
      
      // Remove existing error message
      const existingError = field.parentNode.querySelector('.form-error-message');
      if (existingError) {
        existingError.remove();
      }
      
      // Add error message
      const errorEl = document.createElement('p');
      errorEl.className = 'form-error-message';
      errorEl.textContent = message;
      field.parentNode.appendChild(errorEl);
    },
    
    clearError(field) {
      field.classList.remove('form-error');
      const errorEl = field.parentNode.querySelector('.form-error-message');
      if (errorEl) {
        errorEl.remove();
      }
    },
    
    showSuccess(form, formType) {
      const message = this.getSuccessMessage(formType);
      
      // Create success message element
      const successEl = document.createElement('div');
      successEl.className = 'form-success-message';
      successEl.style.cssText = `
        background-color: var(--success-500, #22C55E);
        color: white;
        padding: 1rem;
        border-radius: 4px;
        margin-top: 1rem;
        text-align: center;
        font-family: var(--font-heading);
      `;
      successEl.textContent = message;
      
      // Add to form
      form.appendChild(successEl);
      
      // Remove after 5 seconds
      setTimeout(() => {
        successEl.remove();
      }, 5000);
    },
    
    getLoadingText(formType) {
      const texts = {
        'contact': 'Sending...',
        'newsletter': 'Subscribing...',
        'footer-newsletter': 'Subscribing...'
      };
      return texts[formType] || 'Submitting...';
    },
    
    getSuccessMessage(formType) {
      const messages = {
        'contact': 'Message sent successfully.',
        'newsletter': 'Thank you for subscribing! Check your inbox to confirm.',
        'footer-newsletter': 'Thank you for subscribing!'
      };
      return messages[formType] || 'Your submission has been received.';
    }
  };

  // ==========================================================================
  // 5. SCROLL ANIMATIONS
  // ==========================================================================

  const ScrollAnimations = {
    init() {
      // Check for IntersectionObserver support
      if (!('IntersectionObserver' in window)) return;
      
      this.observer = new IntersectionObserver(
        (entries) => this.handleIntersection(entries),
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        }
      );
      
      // Observe elements with animation classes
      const animatedElements = document.querySelectorAll('.fade-in-on-scroll');
      animatedElements.forEach(el => this.observer.observe(el));
    },
    
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          this.observer.unobserve(entry.target);
        }
      });
    }
  };

  // ==========================================================================
  // 6. SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================================================

  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
      });
    },
    
    handleClick(e, anchor) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      e.preventDefault();
      
      const navHeight = document.getElementById('main-nav')?.offsetHeight || 70;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // ==========================================================================
  // 7. GOOGLE ANALYTICS (Placeholder)
  // ==========================================================================

  const Analytics = {
    init() {
      // Google Analytics 4 placeholder
      // Replace 'GA_MEASUREMENT_ID' with your actual GA4 ID
      const gaId = 'GA_MEASUREMENT_ID';
      
      if (gaId === 'GA_MEASUREMENT_ID') {
        console.log('Google Analytics: Placeholder - Add your GA4 ID to enable tracking');
        return;
      }
      
      // Load GA4 script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);
      
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', gaId);
    }
  };

  // ==========================================================================
  // 8. UTILITY FUNCTIONS
  // ==========================================================================

  const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },
    
    // Throttle function for scroll events
    throttle(func, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
  };

  // ==========================================================================
  // 9. INITIALIZATION
  // ==========================================================================

  function init() {
    // Initialize all modules
    ThemeManager.init();
    CursorManager.init();
    NavigationManager.init();
    FormManager.init();
    ScrollAnimations.init();
    SmoothScroll.init();
    Analytics.init();
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('js-loaded');
    
    console.log('W.Z. Author Website - JavaScript initialized');
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose to global scope for debugging
  window.WZ = {
    ThemeManager,
    CursorManager,
    NavigationManager,
    FormManager,
    Utils
  };

})();
