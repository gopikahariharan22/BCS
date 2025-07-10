const textarea = document.getElementById("text");
const countSpan = document.getElementById("char-count");

textarea.addEventListener("input", () => {
  const charCount = textarea.value.length;
  countSpan.textContent = charCount;
});

document.querySelector('video').muted = false;


