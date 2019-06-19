import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'The Green Building', value: 1 },
  { key: 2, text: 'Bexley', value: 2 },
  { key: 3, text: '10-250', value: 3 },
  { key: 4, text: 'Maseeh Dining', value: 4 },
  { key: 5, text: 'Lobby 10', value: 5 },
  { key: 5, text: 'EC Courtyard', value: 6 }
];

class LocationDropdown extends React.Component {
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

export default LocationDropdown;
