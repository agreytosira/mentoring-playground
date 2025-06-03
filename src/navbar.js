class NavbarComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <header>
      <div class='navbar-brand'>NotePlus</div>
      <nav>
        <ul>
          <li><a href='#'>Menu 1</a></li>
          <li><a href='#'>Menu 2</a></li>
          <li><a href='#'>Menu 3</a></li>
          <li><a href='#'>Menu 4</a></li>
          <li><a href='#'>Menu 5</a></li>
        </ul>
      </nav>
    </header>
    `;
    this.classList.add('navbar');
  }
}

customElements.define('navbar-component', NavbarComponent);
