import { BootstrapElement, html } from 'bootstrap-element';


class RadioBox extends BootstrapElement {
  constructor() {
    super();
 
  }


  static get properties() {
    return {
      variant: String,
      disabled:Boolean,
      checked: Boolean,
     
    };
  }

  getVariantClass(){

    if(this.variant === 'flexRadioDefault') {
      return `flexRadioDefault`
    } else if(this.variant === 'flexRadioDisabled') {
      return `flexRadioDisabled`
    }
  
    return `flexRadioDefault`
    
  }
  render() {
    let variantString =   this.getVariantClass();
    

    return html`
      <input type="radio"  id="${variantString}"  ?checked=${this.checked} ?disabled=${this.disabled}>
      <label>
    <slot></slot>
  </label>

    `;
  }
}

customElements.define("bs-radiobox", RadioBox);
