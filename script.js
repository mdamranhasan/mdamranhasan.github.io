// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// =========================
// DARK MODE
// =========================

const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            document.body.style.background = "#ffffff";
            document.body.style.color = "#000000";

            themeBtn.innerHTML = "☀️";

        } else {

            document.body.style.background = "#0f172a";
            document.body.style.color = "#ffffff";

            themeBtn.innerHTML = "🌙";

        }

    });

}


// =========================
// TYPING EFFECT
// =========================

const typingText = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex--);

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex++);

    }

    let typingSpeed = isDeleting ? 80 : 120;

    if (!isDeleting && charIndex === currentWord.length) {

        isDeleting = true;
        typingSpeed = 1500;

    }

    else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex =
            (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect, typingSpeed);

}

typeEffect();


// =========================
// SKILLS BAR ANIMATION
// =========================

const skillsSection = document.querySelector(".skills");
const skillBars = document.querySelectorAll(".skill-bar");

if (skillsSection) {

    window.addEventListener("scroll", () => {

        const sectionTop =
            skillsSection.offsetTop - 400;

        if (window.scrollY >= sectionTop) {

            skillBars.forEach(bar => {

                const width =
                    bar.classList.contains("html") ? "95%" :
                    bar.classList.contains("css") ? "90%" :
                    bar.classList.contains("js") ? "85%" :
                    "80%";

                bar.style.width = width;

            });

        }

    });

}


// =========================
// EDUCATION CARD ANIMATION
// =========================

const eduCards = document.querySelectorAll(".edu-card");

eduCards.forEach(card => {

    const icon = card.querySelector(".edu-icon");

    card.addEventListener("mouseenter", () => {

        if (icon) {
            icon.style.transform =
                "scale(1.15) rotate(10deg)";
        }

    });

    card.addEventListener("mouseleave", () => {

        if (icon) {
            icon.style.transform =
                "scale(1) rotate(0deg)";
        }

    });

});


// =========================
// DATE & TIME
// =========================

const date = document.getElementById("date");
const time = document.getElementById("time");

function updateClock() {

    const now = new Date();

    if (date) {

        date.textContent =
            now.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            });

    }

    if (time) {

        time.textContent =
            now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });

    }

}

updateClock();

setInterval(updateClock, 1000);


// =========================
// EMAILJS
// =========================

emailjs.init({
    publicKey: "RYEZoq6_2PcthlQRE"
});


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const button =
            contactForm.querySelector("button");

        // Button loading
        if (button) {
            button.innerText = "Sending...";
            button.disabled = true;
        }


        // Send Email
        emailjs.sendForm(
            "service_19fgcoo",
            "template_qhfvtun",
            contactForm
        )

        .then(function () {

            alert("আপনার সাথে শীঘ্রই যোগাযোগ করবেন আমরান হাসান। ধন্যবাদ! 😊 ✅");

            contactForm.reset();

            if (button) {

                button.innerText =
                    "Message Sent ✓";

                setTimeout(() => {

                    button.innerText =
                        "Send Message";

                    button.disabled = false;

                }, 2000);

            }

        })

        .catch(function (error) {

            console.error(
                "EmailJS Error:",
                error
            );

            alert(
                "Failed to send message. Please try again. ❌"
            );

            if (button) {

                button.innerText =
                    "Send Message";

                button.disabled = false;

            }

        });

    });

}