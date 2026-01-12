/**
 * GSAP Animation Scripts
 */

document.addEventListener("DOMContentLoaded", () => {

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger not loaded");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  console.log("DOM ready");

  // INTRO TIMELINE (autoplay on page load)
  const tl = gsap.timeline();

  // Logo
  tl.fromTo(".logo",
    { x: -800, rotation: -360, opacity: 0 },
    { x: 0, rotation: 360, opacity: 1, duration: 1.5, ease: "power3.out" }
  );

  // Text
  tl.fromTo(".word-reveal",
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
    "+=0.5"
  );

  // Menu
  tl.fromTo(".elementor-nav-menu li",
    { y: -30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.2
    }
  );

  // Login button
  tl.fromTo(".login-btn",
    { scale: 2, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.1,
      ease: "elastic.out(1, 0.2)"
    },
    "-=1.8"
  );

  

  // gsap.fromTo(
  //   ".hero-txt",
  //   { x: -4000, y: 4000, opacity: 0 },
  //   {
  //     x: 0, y: 0, rotation: 0, opacity: 1, duration: 5, ease: "expoScale",
  //     scrollTrigger: {
  //       trigger: ".hero-txt",
  //       start: "top 80%",
  //       toggleActions: "play none none none"
  //     }
  //   }
  // );

  // gsap.fromTo(
  //   ".hero-img",
  //   { x: 4000, y: 4000, opacity: 0 },
  //   {
  //     x: 0, y: 0, rotation: 0, opacity: 1, duration: 5, ease: "expoScale",
  //     scrollTrigger: {
  //       trigger: ".hero-img",
  //       start: "top 80%",
  //       toggleActions: "play none none none"
  //     }
  //   }
  // );

  // CLOCK SCROLL ANIMATION
  gsap.timeline({
    scrollTrigger: {
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  })
  .to("#minuteHand", {
    rotation: 20,
    svgOrigin: "960 960",
    ease: "none"
  }, 0)
  .to("#hourHand", {
    rotation: 10,
    svgOrigin: "960 960",
    ease: "none"
  }, 0);


  // const t2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".heading-sec2",
  //     start: "top 90%",
  //     toggleActions: "play reverse play reverse"
  //   }
  // });
  
  // t2.fromTo(".left-card",
  //   { x: -300, y: 300, opacity: 0, rotation: 45 },
  //   { x: 350, y: 60, rotation: 10, opacity: 1, duration: 3, ease: "expoScale" },
  //   "-=5"
  // )
  // .fromTo(".center-card",
  //   { x: 0, y: 300, opacity: 0 },
  //   { x: 0, y: 0, rotation: 0, opacity: 1, duration: 3, ease: "expoScale" },
  //   "-=5"
  // )
  // .fromTo(".right-card",
  //   { x: 300, y: 300, opacity: 0, rotation: -45 },
  //   { x: -350, y: 60, rotation: -10, opacity: 1, duration: 3, ease: "expoScale" },
  //   "-=5"
  // );


  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".heading-sec2",
      start: "top 80%",
      end: "top 10%",        // controls how much scroll space is used
      scrub: true            // 👈 THIS attaches animation to scroll
    }
  });
  
  // Initial stacked state
  t2.fromTo(".left-card",
    { x: 0, y: 0, rotation: 0 },
    { x: -380, y: 40, rotation: -10, ease: "none" }
  );
  
  t2.fromTo(".center-card",
    { x: 0, y: 0, rotation: 0 },
    { x: 0, y: 0, rotation: 0, ease: "none" },
    0
  );
  
  t2.fromTo(".right-card",
    { x: 0, y: 0, rotation: 0 },
    { x: 380, y: 40, rotation: 10, ease: "none" },
    0
  );

  


const heading = document.querySelector(".animation-txt > h1");
if (!heading) return;

const words = heading.textContent.trim().split(" ");
heading.innerHTML = "";

// Create structure: first letter + remaining letters for each word
words.forEach(word => {
  const wordWrapper = document.createElement("span");
  wordWrapper.style.display = "inline-block";
  wordWrapper.style.marginRight = "20px";

  const firstLetter = document.createElement("span");
  firstLetter.textContent = word[0];
  firstLetter.classList.add("first-letter");
  firstLetter.style.display = "inline-block";

  const restLetters = document.createElement("span");
  restLetters.style.display = "inline";
  restLetters.style.overflow = "hidden";

  [...word.slice(1)].forEach(char => {
    const charSpan = document.createElement("span");
    charSpan.textContent = char;
    charSpan.style.display = "inline-block";
    charSpan.style.opacity = 0;
    charSpan.style.transform = "translateY(100%)";
    restLetters.appendChild(charSpan);
  });

  wordWrapper.appendChild(firstLetter);
  wordWrapper.appendChild(restLetters);
  heading.appendChild(wordWrapper);
});

const t3 = gsap.timeline({
  paused: true, // ⬅️ IMPORTANT
  defaults: { ease: "power4.out" }
});

tl.eventCallback("onComplete", () => {
  t3.play();
});

// const t3 = gsap.timeline({ defaults: { ease: "power4.out" } });

// Animate each word
heading.querySelectorAll("span").forEach((wordSpan, wi) => {
  const firstLetter = wordSpan.querySelector(".first-letter");
  const restLetters = wordSpan.querySelectorAll("span span");

  // 1️⃣ First letter comes from rotation
  t3.from(firstLetter, {
    duration: 0.1,
    opacity: 0,
    rotate: 360,
    scale: 1.5
  }, wi * 0.1); // Slight offset per word to reduce delay

  // 2️⃣ Flip upside-down
  t3.to(firstLetter, {
    duration: 0.3,
    rotateX: 180
  }, wi * 0.1 + 0.1); // small offset

  // 3️⃣ Flip back to normal
  t3.to(firstLetter, {
    duration: 0.3,
    rotateX: 0
  }, wi * 0.1 + 0.4);

  // 4️⃣ Reveal rest of letters from behind
  t3.to(restLetters, {
    duration: 0.3,
    opacity: 1,
    y: 0,
    stagger: 0.08
  }, wi * 0.1 + 0.7);
});



// const container = document.querySelector(".image-container");
// const images = gsap.utils.toArray(".image-container img");

// // Total scroll distance = total width of images minus one viewport
// const totalScroll = (images.length - 1) * window.innerWidth;

// gsap.to(container, {
//   x: () => -totalScroll + "px",
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".features-section",  // trigger entire section
//     start: "top top",
//     end: () => "+=" + totalScroll,
//     scrub: true,
//     pin: true,                   // pins the section including the heading
//     anticipatePin: 1,
//   }
// });

const container = document.querySelector(".image-container");
const images = gsap.utils.toArray(".image-container img");

function calculate() {
  const containerWidth = container.scrollWidth;
  const viewportCenter = window.innerWidth / 2;

  const firstImage = images[0];
  const lastImage = images[images.length - 1];

  const startX = firstImage.offsetWidth / 2 - viewportCenter;
  const endX =
    containerWidth - lastImage.offsetWidth / 2 - viewportCenter;

  return { startX, endX, distance: endX - startX };
}

window.addEventListener("load", () => {
  const { startX, endX, distance } = calculate();

  // 🔥 CRITICAL FIX: set initial position BEFORE ScrollTrigger
  gsap.set(container, { x: -startX });

  gsap.to(container, {
    x: -endX,
    ease: "none",
    scrollTrigger: {
      trigger: ".features-section",
      start: "top top",
      end: () => "+=" + distance,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });

  ScrollTrigger.refresh();
});

});
