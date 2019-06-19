import React, { Component } from 'react';
import logo from './images/alort.png';
import { Dropdown, Menu, Placeholder } from 'semantic-ui-react';
import IncidentDropdown from './IncidentDropdown';
import LocationDropdown from './LocationDropdown';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p />
        <p className="App-intro">
          The Massachusetts Institute of Technology (MIT) would like to present
          MIT Alort, a new and improved system for alerting MIT students to the
          emergency issues that matter around campus.*
        </p>
        <p className="App-intro">
          MIT Alert: <IncidentDropdown current_dropdown="[INSERT INCIDENT]" />{' '}
          at <LocationDropdown current_dropdown="[INSERT LOCATION]" />
        </p>
        <Placeholder>
          <Placeholder.Paragraph />
        </Placeholder>
        <p className="App-intro">
          *Note: this website is not an actual emergency management system and
          should not ever be used to know about actual emergencies around
          campus. It is not in any way affiliated with the MIT Emergency
          Management Office or really MIT at all. Please don't sue me
        </p>
      </div>
    );
  }
}

export default App;
