// Mobile Menu Hamburger Section
const hamburgerBtn = document.getElementById("hamburgerButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = mobileMenu?.querySelectorAll("a");

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  });

  // Close menu when a link is clicked 
  mobileLinks?.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    });
  });
}
//  Fade-In Animation on Scroll
const fadeElements = document.querySelectorAll<HTMLElement>(".fade-in");

const fadeInOnScroll = (): void => {
  const triggerBottom = window.innerHeight * 0.85;
  const triggerTop = window.innerHeight * 0.15;

  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < triggerBottom && rect.bottom > triggerTop;

    if (inView) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
};

// Run once on load 
window.addEventListener("load", fadeInOnScroll);

//  Run whenever the user scrolls
window.addEventListener("scroll", fadeInOnScroll);

// fade-in delay animation
fadeElements.forEach(el => {
  const delay = el.dataset.delay || "0s";
  el.style.setProperty('--delay', delay);
});


//  Simple Parallax Scroll Effect 
window.addEventListener("scroll", () => {
  const parallaxElements = document.querySelectorAll<HTMLElement>(".parallax");
  const scrollPosition = window.scrollY;

  parallaxElements.forEach((el) => {
    // Adjust the speed — smaller value = slower movement
    const speed = parseFloat(el.dataset.speed || "0.3");
    el.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});

//  Achievements Scroll Section (marquee style) 
const achievementsScroll = document.querySelector(".achievements-scroll");

if (achievementsScroll instanceof HTMLElement) {
  const scrollContainer = achievementsScroll;
  const items = Array.from(scrollContainer.children) as HTMLElement[];

  const CARD_WIDTH = 320;
  const GAP = 24;
  const totalWidth = items.length * (CARD_WIDTH + GAP);

  // Duplicate for seamless infinite loop
  scrollContainer.innerHTML += scrollContainer.innerHTML;

  let scrollPos = totalWidth; // start from end for leftward motion
  let animationFrame: number;

  //  Adjust this to control marquee speed
  const speed = 1.8; 

  function autoScroll(): void {
    scrollPos -= speed; 
    if (scrollPos <= 0) scrollPos = totalWidth;
    scrollContainer.scrollLeft = scrollPos;
    animationFrame = requestAnimationFrame(autoScroll);
  }

  // Trigger animation only when visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cancelAnimationFrame(animationFrame);
          autoScroll();
        } else {
          cancelAnimationFrame(animationFrame);
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(scrollContainer);

  // Pause when hovered
  scrollContainer.addEventListener("mouseenter", () =>
    cancelAnimationFrame(animationFrame)
  );
  scrollContainer.addEventListener("mouseleave", () => autoScroll());
}
// Updated Contact Form with Modal Success Message
const contactForm = document.getElementById("contact-form") as HTMLFormElement | null;
const successModal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

if (contactForm && successModal && closeModal) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    successModal.classList.remove("hidden");
    successModal.classList.add("flex");
    contactForm.reset();
  });

  closeModal.addEventListener("click", () => {
    successModal.classList.add("hidden");
    successModal.classList.remove("flex");
  });
}

// Fixed Testimonials Slider logic
const reviewsContainer = document.querySelector<HTMLDivElement>(".reviews-container");
let reviewIndex = 0;
let reviewInterval: number;

function moveReviews() {
  if (!reviewsContainer || reviewsContainer.children.length === 0) return;

  // Cast to HTMLElement to ensure offsetWidth is accessible
  const cards = Array.from(reviewsContainer.children) as HTMLElement[];
  
  const firstCard = cards[0];
  if (!firstCard) return;

  const cardWidth = firstCard.offsetWidth;
  const gap = 30; 

  reviewIndex++;
  if (reviewIndex >= cards.length) {
    reviewIndex = 0;
  }

  reviewsContainer.style.transform = `translateX(-${reviewIndex * (cardWidth + gap)}px)`;
}

const startInterval = () => {
  reviewInterval = window.setInterval(moveReviews, 3000);
};

startInterval();

reviewsContainer?.addEventListener("mouseenter", () => clearInterval(reviewInterval));
reviewsContainer?.addEventListener("mouseleave", startInterval);

window.addEventListener('resize', () => {
  reviewIndex = 0; 
  if(reviewsContainer) reviewsContainer.style.transform = `translateX(0px)`;
});



// Scroll to Top Button View Code
const scrollToTopButton = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollToTopButton?.classList.add("show-btn");
  } else {
    scrollToTopButton?.classList.remove("show-btn");
  }
});

scrollToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

