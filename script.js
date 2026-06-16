// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => {
  revealObserver.observe(el);
});

// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 25px rgba(0,0,0,0.25)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(10,20,50,0.15)';
  }
});

// ===============================
// Animated Stats Counter
// ===============================

function animateCounter(element, target, suffix = '') {
  let count = 0;

  const increment = target / 100;

  const timer = setInterval(() => {
    count += increment;

    if (count >= target) {
      count = target;
      clearInterval(timer);
    }

    element.textContent = Math.floor(count) + suffix;
  }, 20);
}

const statSection = document.querySelector('.stats-bar');

if (statSection) {
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          const stats = document.querySelectorAll('.stat-num');

          animateCounter(stats[0], 5000, '+');
          animateCounter(stats[1], 120, '+');
          animateCounter(stats[2], 50, '+');
          animateCounter(stats[3], 8, '');

          statObserver.disconnect();
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  statObserver.observe(statSection);
}

// ===============================
// Pause Carousel On Hover
// ===============================

document.querySelectorAll('.carousel').forEach((carouselElement) => {

  carouselElement.addEventListener('mouseenter', () => {
    const carousel = bootstrap.Carousel.getInstance(carouselElement);

    if (carousel) {
      carousel.pause();
    }
  });

  carouselElement.addEventListener('mouseleave', () => {
    const carousel = bootstrap.Carousel.getInstance(carouselElement);

    if (carousel) {
      carousel.cycle();
    }
  });

});

// ===============================
// Scroll Indicator
// ===============================

const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });
}

// ===============================
// Newsletter Form
// ===============================

const newsletterButton = document.querySelector(
  '.footer-bottom button'
);

if (newsletterButton) {

  newsletterButton.addEventListener('click', () => {

    const emailInput = document.querySelector(
      'input[type="email"]'
    );

    if (!emailInput.value.trim()) {
      alert('Please enter your email address.');
      return;
    }

    alert('Thank you for subscribing!');
    emailInput.value = '';

  });

}

// ===============================
// Active Navbar Link
// ===============================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {

  link.addEventListener('click', () => {

    navLinks.forEach((item) =>
      item.classList.remove('active')
    );

    link.classList.add('active');

  });

});