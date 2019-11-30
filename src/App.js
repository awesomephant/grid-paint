import React from 'react';
import Grid from './Grid.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      settings: {
        columns: 10,
        rows: 5
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let v = e.target.value;
    let setting = e.target.getAttribute('id');
    this.setState(function (prevState) {
      prevState.settings[setting] = v
      return prevState
    })
  }
  render() {
    return (
      <div className='app'>
        <div className='controls'>
          <div className='controls--field'>
            <label htmlFor='rows'>Rows</label>
            <input type='number' value={this.state.settings.rows} onChange={this.handleChange} id='rows'></input>
          </div>
          <div className='controls--field'>
            <label htmlFor='columns'>Columns</label>
            <input type='number' value={this.state.settings.columns} onChange={this.handleChange} id='columns'></input>
          </div>
        </div>
        <Grid columns={this.state.settings.columns} rows={this.state.settings.rows}></Grid>
      </div>
    );
  }
}

export default App;
