import { html } from "lit";
import '../../../src/components/RadioBox';

export default {
  title: 'Components/RadioBox/Radiobox1',
};

const NavItem = ({ label, variant,  checked=false, disabled=false }) => html`
<bs-radiobox .variant=${variant}  .checked=${checked} .disabled=${disabled}>${label} </bs-radiobox>
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

