import { html } from "lit-element";
import { BootstrapElement } from '../context/BootstrapElement';

class Button extends BootstrapElement {
  constructor() {
    super();
    this.color = 'primary';
  }

  static get properties() {
    return {
      variant: String,
      link: String,
      color: String,
      disabled: Boolean,
    };
  }
  render() {
    let variantString = `btn-${this.color}`;
    if(this.variant === 'outline') {
      variantString = `btn-outline-${this.color}`
    } else if(this.variant === 'text') {
      variantString = `btn-link`
    }

    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css" />
      <button type="button" class="btn ${variantString}" ?disabled=${this.disabled}><slot></slot></button>
    `;
  }
}

customElements.define("bs-button", Button);
