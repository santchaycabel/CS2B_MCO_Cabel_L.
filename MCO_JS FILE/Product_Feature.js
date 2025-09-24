// Product_Features.js

// CONTACT FORM VALIDATION & SUBMIT HANDLER
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop normal form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // email check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you for contacting us, " + name + "!");
    form.reset();
  });
});

// BACK TO TOP BUTTON
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "Top";
backToTopBtn.id = "backToTopBtn";
Object.assign(backToTopBtn.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  display: "none",
  padding: "8px 12px",
  background: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  zIndex: 1000,
});
document.body.appendChild(backToTopBtn);

// Show/hide button on scroll
window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Smooth scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
