class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Vazquez Cisneros Elda Vanessa`;
  }
}
customElements.define("mi-footer", MiFooter);