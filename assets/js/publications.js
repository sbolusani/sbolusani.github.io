document.addEventListener("click", function (e) {
  const t = e.target;
  if (!t.classList.contains("cite-toggle")) return;

  e.preventDefault();
  const block = document.getElementById("cite-" + t.dataset.key);
  block.hidden = !block.hidden;
});
