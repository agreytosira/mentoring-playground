class FooterComponent extends HTMLElement {
  constructor() {
    super();
 
    this.innerHTML = 'Copyright 2025 - NotePlus.';
    this.classList.add('footer');
  }
}
 
customElements.define('footer-component', FooterComponent);