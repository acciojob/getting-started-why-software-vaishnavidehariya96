// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Page loaded successfully!");

  // Select the div with id="text"
  const textDiv = document.getElementById("text");

  // Optional: Change text color after a delay
  setTimeout(() => {
    textDiv.style.color = "#28a745"; // changes color to green
  }, 1500);

  // Optional: Add fade-in animation
  textDiv.style.opacity = 0;
  textDiv.style.transition = "opacity 1.5s ease-in-out";

  setTimeout(() => {
    textDiv.style.opacity = 1;
  }, 300);
});
