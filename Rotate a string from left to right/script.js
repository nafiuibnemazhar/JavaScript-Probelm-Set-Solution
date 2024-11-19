let text = "CodeHard";

function rotateString() {
  text = text[text.length - 1] + text.slice(0, -1);
  document.getElementById("rotating-text").textContent = text;
}
setInterval(rotateString, 100);
