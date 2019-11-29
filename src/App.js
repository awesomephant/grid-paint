import React from 'react';
import Grid from './Grid.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Grid columns='8' rows='16'></Grid>
    );
  }
}

export default App;
