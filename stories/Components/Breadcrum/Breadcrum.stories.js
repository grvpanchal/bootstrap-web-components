import { html } from "lit-element";
import '../../../src/components/Breadcrumb';

export default {
  title: 'Components/Breadcrum/Fail',
};

const NavItems = ({ label,  color='primary', arr, home,about,contact, navArray}) => html`
<bs-breadcrumb  .navArray=${navArray} .color=${color} .home=${home} .contact=${contact} .about=${about} .arr=${arr}>${label}</bs-breadcrumb>
`;

const Template = (args) => NavItems(args);

export const Default = Template.bind({});
Default.args = {
  color: 'btn-danger',
  
  navArray:[
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
};

