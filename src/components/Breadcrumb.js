import { BootstrapElement, html } from 'bootstrap-element';


class Breadcrumb extends BootstrapElement {
  constructor() {
    super();
    this.color = 'btn-primary';
    this.home = 'Home';
    this.about = 'About';
    this.contact = 'Contact';
    this.navArray=[
      {
        "label": "Home",
        "link": "/home"
    },
    {
        "label": "About",
        "link": "/women"
    },
    {
        "label": "Contact",
        "link": "/kids"
    }
  
    ]
  }

  static get properties() {
    return {
      home: String,
      about: String,
      contact: String,
      navArray: Array
    //   color: String,
   
    };
  }
  render() {
   
    return html`
      <nav aria-label="breadcrumb">
         <ol class="breadcrumb">
             <!-- <li class="breadcrumb-item active" aria-current="page">${this.home}</li>
             <li class="breadcrumb-item active" aria-current="page">${this.about}</li>
             <li class="breadcrumb-item active" aria-current="page">${this.contact}</li> -->
            <!-- <ul>${this.navArray.map((items) => (html`<li><a href="${items.link}">${items.label}</a></li>`))}</ul> -->
             ${this.navArray.map((items) => (html`<li class="breadcrumb-item " ><a href="${items.link}">${items.label}</a></li>`))}
        </ol>
    </nav>

    `;
  }
}

customElements.define("bs-breadcrumb", Breadcrumb);
