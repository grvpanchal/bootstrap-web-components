import { html } from "lit-element";
import '../../../src/components/Button';

export default {
  title: 'Components/Buttons/Base',
};

const NavItem = ({ label, variant, color='primary', disabled=false }) => html`
<bs-button .variant=${variant} .color=${color} .disabled=${disabled}>${label}</bs-button>
`;

const Template = (args) => NavItem(args);

export const Default = Template.bind({});
Default.args = {
  label: 'Primary',
};

export const Text = Template.bind({});
Text.args = {
  label: 'Text Only',
  variant: 'text',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outlined',
  variant: 'outline',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  variant: 'outline',
  disabled: true,
};
