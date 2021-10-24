import { BootstrapElement, html } from 'bootstrap-element';

import ButtonStyle from '../scss/Button.scss';

class Button extends BootstrapElement {
  constructor() {
    super('button');
    this.color = 'primary';
  }

  static get styles() {
    return [ButtonStyle];
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
      <button type="button" class="btn ${variantString}" ?disabled=${this.disabled}><slot></slot></button>
    `;
  }
}

customElements.define("bs-button", Button);
