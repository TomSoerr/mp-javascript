const templateFooter = document.createElement("template");

templateFooter.innerHTML = `<footer>
      <img src="./img/logo.svg" alt="Logo" />
      <p class="about">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        maiores cum dolorem neque ullam aperiam, ut tempore molestias? Nobis
        possimus molestias eligendi voluptates id rerum!
      </p>

      <address>
        <p>MP JavaScript</p>
        <p>123 Main St</p>
        <p>Anytown, USA</p>
      </address>

      <div class="sitemap">
        <h3>Sitemap</h3>
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
      </div>
    </footer>
`;

document.body.append(templateFooter.content);
