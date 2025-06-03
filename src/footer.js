class FooterComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = '<footer>Copyright 2025 - NotePlus.</footer>';
    this.classList.add('footer');
  }
}

customElements.define('footer-component', FooterComponent);
