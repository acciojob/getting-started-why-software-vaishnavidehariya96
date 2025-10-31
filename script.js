// script.js

// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const textDiv = document.getElementById("text");

  // When the user clicks the text, show a message
  textDiv.addEventListener("click", function() {
    alert("Keep learning and building amazing websites! 🌐");
  });

  // Optional: change color when hovered
  textDiv.addEventListener("mouseover", function() {
    textDiv.style.color = "#007bff";
  });

  textDiv.addEventListener("mouseout", function() {
    textDiv.style.color = "#2c3e50";
  });
});