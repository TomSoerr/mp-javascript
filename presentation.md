---
theme: tom
size: 16:9
paginate: true
footer: Tom sc22 / 2024-03-07
marp: true
header: Javascript Crashkurs
---

<style>
  h1, h2 {
    color: #2aa198;
  }
</style>

# Javascript

---

# Worum wird es heute gehen

- Was ist Javascript?
- Wie kann ich Javascript im Lernfeld verwenden?
- Tiefere Erklärung der Funktionen?

---

# Was ist Javascript?

- Javascript ist eine Programmiersprache

---

## Was ist eine Programmiersprache?

- Sprache zum Ausdrücken von Algorithmen und Datenstrukturen
- Vereinfacht: Eine Sprache um dem Computer zu sagen was er tun soll

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

# Wie binde ich Javascript in HTML ein?

```html
<head>
  <title>MP JavaScript</title>
  <link rel="stylesheet" href="style.css" />
  <script src="./nav.js" defer></script>
</head>
```

> Ohne `defer` läd das Script vor dem HTML
