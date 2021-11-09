import { html } from "lit";
import '../../../src/components/CheckBox';

export default {
  title: 'Components/CheckBox/Checkbox1',
};

const NavItem = ({ label, variant,  checked=false, disabled=false }) => html`
<bs-checkbox .variant=${variant}  .checked=${checked} .disabled=${disabled}>${label} </bs-checkbox>
`;

const Template = (args) => NavItem(args);

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  label: 'Default Checked',
  variant:'defaultChecked',
  checked:true
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  variant:'',
  checked:false
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  label: 'Disabled',
  variant:'',
  disabled: true,
};

