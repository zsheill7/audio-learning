import React, { Component } from 'react';
import logo from './images/alort.png';
import { Dropdown, Menu } from 'semantic-ui-react';
import IncidentDropdown from './IncidentDropdown';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MIT Alort System</h1>
        </header>
        <p className="App-intro">
          The "Massachusetts Institute of Technology (MIT), institution of
          higher learning famous for its scientific and technological training
          and research" would like to present MIT Alort, a new and improved
          system for alerting MIT students to the emergency issues that matter
          around campus.*
        </p>
        <p className="App-intro">MIT Alort</p> <IncidentDropdown />
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
