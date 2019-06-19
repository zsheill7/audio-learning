import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Fire', value: 1 },
  { key: 2, text: 'Sadness', value: 2 },
  { key: 3, text: 'Eating', value: 3 },
  { key: 5, text: 'Quicksand', value: 4 },
  { key: 4, text: 'Prefrosh', value: 5 },
  { key: 5, text: 'Earthquake', value: 6 }
];

class IncidentDropdown extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.handleChange = this.handleChange.bind(this);
    this.state = { current_dropdown: props.current_dropdown };
  }

  handleChange(value) {
    //this.setState({ current_dropdown: value });
  }

  render() {
    return (
      <Menu compact>
        <Dropdown
          placeholder={this.props.current_dropdown}
          options={options}
          selection
          simple
          item
        />
      </Menu>
    );
  }
}

export default IncidentDropdown;
