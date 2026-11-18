const form = document.getElementById("contactForm");
const result = document.getElementById("result");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  result.textContent = "Thanks! This is a demo form; no message was sent.";
  form.reset();
});
