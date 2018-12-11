import React, { Component } from 'react';
import { NumericTextBox } from '@progress/kendo-react-inputs'
import { Buttons } from '@progress/kendo-react-buttons'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='add-habit'>
          <label> GOAL: </label>
          <input />
          <label> ITERATION </label>
          <NumericTextBox />
          <Button></Button>
        </div>
      </div>
    );
  }
}

export default App;
