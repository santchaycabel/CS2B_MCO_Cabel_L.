/* product_gallery.js*/

// Run code only after the page finishes loading
document.addEventListener("DOMContentLoaded", () => {
  // 1. Add-to-Cart buttons
  const cartButtons = document.querySelectorAll(".product-column .btn button");

  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Find the product name and price from the same product card
      const card = button.closest(".product-column");
      const name = card.querySelector("h3").textContent;
      const price = card.querySelector(".price").textContent;

      alert(`✅ Added to cart: ${name} – ${price}`);
    });
  });

  // 2. Contact Form Validation
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", event => {
    event.preventDefault(); // Stop normal form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    // Very basic email pattern check
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
  });
});
