import { BootstrapElement, html } from 'bootstrap-element';

import ButtonStyle from '../scss/Button.scss';

class Button extends BootstrapElement {
  constructor() {
    super('button');
    this.color = 'primary';
    this.size = 'btn-md'
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
      size:String,
    };
  }

  getVariantClass(){

    if(this.variant === 'outline') {
      return `btn-outline-${this.color}`
    } else if(this.variant === 'text') {
      return `btn-link`
    }
    if(this.size ==='small'){
      return `btn-primary btn-sm`
    }
    else if(this.size ==='medium'){
      return `btn-primary btn-md`
    }
    else if(this.size ==='large'){
      return `btn-primary btn-lg`
    }
    return `btn-${this.color}`;
  }
  render() {
    let variantString =   this.getVariantClass();
    

    return html`
      <button type="button" class="btn ${variantString}" ?disabled=${this.disabled} ><slot></slot></button>
    `;
  }
}

customElements.define("bs-button", Button);
