// Funktion zum Laden von HTML-Komponenten
function loadComponent(id, html) {
  const wrapper = document.getElementById(id);
  if (wrapper) {
    wrapper.innerHTML = html;
  }
}

// eigene Komponenten
loadComponent(
  "bilder-wrapper",
  `<div id="bilder">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
</div>`
);
