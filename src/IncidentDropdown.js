import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Fire', value: 1 },
  { key: 2, text: 'Panic', value: 2 },
  { key: 3, text: 'NR', value: 3 },
  { key: 3, text: 'Prefrosh', value: 3 },
  { key: 3, text: 'Earthquake', value: 3 }
];

const IncidentDropdown = () => (
  <Menu compact>
    <Dropdown text="[INSERT INCIDENT]" options={options} simple item />
  </Menu>
);

export default IncidentDropdown;
