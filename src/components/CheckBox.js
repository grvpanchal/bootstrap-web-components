import { BootstrapElement, html } from 'bootstrap-element';


class CheckBox extends BootstrapElement {
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

    if(this.variant === 'defaultChecked') {
      return `flexCheckChecked`
    } else if(this.variant === 'flexCheckDisabled') {
      return `flexCheckDisabled`
    }
  
    return `flexCheckDefault`
    
  }
  render() {
    let variantString =   this.getVariantClass();
    

    return html`
      <input type="checkbox"  id="${variantString}"  ?checked=${this.checked} ?disabled=${this.disabled}>
      <label>
    <slot></slot>
  </label>

    `;
  }
}

customElements.define("bs-checkbox", CheckBox);
