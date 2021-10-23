import { html } from "lit-element";
import '../../../src/components/Button';

export default {
  title: 'Components/Buttons/Colors',
};

const NavItem = ({ label, variant, color='primary', disabled=false }) => html`
<bs-button .variant=${variant} .color=${color} .disabled=${disabled}>${label}</bs-button>
`;

const Template = (args) => NavItem(args);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  color: 'primary'
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  color: 'secondary'
};
export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  color: 'success'
};
export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  color: 'danger'
};

