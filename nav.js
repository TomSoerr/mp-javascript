const main = document.querySelector("main");

const templateNav = document.createElement("template");

templateNav.innerHTML = `<nav>
      <img src="./img/logo.svg" alt="Logo" />
      <button onclick="this.classList.toggle('open')"></button>
      <ul>
        <li>
          <a href="./index.html">Home</a>
        </li>
        <li>
          <a href="./nav.html">Navigation</a>
        </li>
        <li>
          <a href="./footer.html">Footer</a>
        </li>
        <li>
          <a href="#">Plugins</a>
        </li>
        <li>
          <a href="#">Links</a>
        </li>
      </ul>
    </nav>
`;

document.body.insertBefore(templateNav.content, main);
