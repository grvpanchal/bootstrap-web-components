import { html } from "lit-element";
import '../../../src/components/Button';

export default {
  title: 'Components/Buttons/Size',
};

const NavItem = ({ label, variant, color='primary', disabled=false, size='btn-md'}) => html`
<bs-button .variant=${variant} .color=${color} .disabled=${disabled} .size=${size}>${label}</bs-button>
`;

const Template = (args) => NavItem(args);

export const Small = Template.bind({});
Small.args = {
  label: 'Small',
//   color: 'primary',
  size: 'small'
};
export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium',
//   color: 'success',   
  size: 'medium'

};
export const Large = Template.bind({});
Large.args = {
  label: 'Large',
//   color: 'secondary',
  size: 'large'

};

