---
size: 16:9
paginate: true
footer: Tom sc22 / 2024-03-07
marp: true
header: Javascript Crashkurs
---

<style>
  h1 {
    color: #2aa198;
  }
</style>

# Javascript

---

# Worum wird es heute gehen

- Was ist Javascript?
- Wie kann ich Javascript im Lernfeld verwenden?
  - Aufgabe
- Vertiefung

---

# Was ist Javascript?

- Javascript ist eine Programmiersprache

---

## Was ist eine Programmiersprache?

- Sprache zum Ausdrücken von Algorithmen und Datenstrukturen
- Vereinfacht: Eine Sprache, um dem Computer zu sagen, was er tun soll

---

## HTML vs Javascript

- HTML: Struktur und Inhalt
- Javascript: Interaktion und Verhalten

---

```html
<ul>
  <li>HTML</li>
  <li>Javascript</li>
</ul>
```

```js
if (3 + 2 < 5) {
  console.log("foo");
} else {
  console.log("bar");
}
```

---

# Wie kann ich Javascript im Lernfeld verwenden?

- HTML Code wiederverwenden

---

## Wie binde ich Javascript in HTML ein?

```html
<head>
  <title>MP JavaScript</title>
  <link rel="stylesheet" href="style.css" />
  <script src="./nav.js" defer></script>
</head>
```

> Ohne `defer` läd das Script vor dem HTML

---

![bg right contain](./qr-code.png)

## Aufgabe

- Bilder Komponente auf der `nav.html` oder `footer.html` einbinden, so wie auf der Startseite

`https://github.com/TomSoerr/mp-javascript`

---

# Vertiefung

- Strings
- Variablen
- Funktionen

---

## Strings

- Text

```js
"Hallo Welt";
"Hallo Welt";
`HalloWelt`; // (Template strings)
```

---

## Variablen

- Speicherplatz für Werte
- `let` und `const`

```js
let x = 5;
const y = 10;

x = x + y;

x; // 15
```

---

## Variablen unser Beispiel

```js
const templateNav = document.createElement("template");

templateNav.innerHTML = `<nav>
      <img src="./img/logo.svg" alt="Logo" />
      <button onclick="this.classList.toggle('open')"></button>
      <ul>
        <li>
          <a href="./index.html">Home</a>
        </li>
      </ul>
    </nav>
`;
```

---

## Funktionen

- Wiederverwendbare Codeblöcke
- `function` und `=>`

```js
function add(x, y) {
  return x + y;
}

const add = (x, y) => x + y;
```

---

## Funktionen unser Beispiel

```js
function loadComponent(id, html) {
  const wrapper = document.getElementById(id);
  if (wrapper) {
    wrapper.innerHTML = html;
  }
}
```
