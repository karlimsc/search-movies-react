import React, {Component} from 'react';
import {Title} from './components/Title.js'
import {SearchForm} from './components/SearchForm.js'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render()
  {
    return (
      <div className="App">
      <Title>Proyecto Karli: Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm/>
        </div>

      </div>
    )
  }
}

export default App;
