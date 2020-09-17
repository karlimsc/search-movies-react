import React, {Component} from 'react';
import {Title} from './components/Title.js'
import {SearchForm} from './components/SearchForm.js'
import { MoviesList }  from './components/MoviesList.js'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  state = { results:  [] }

  _handleResults = (results) =>  {
    this.setState({results})
  }

  render()
  {
    return (
      <div className="App">
      <Title>Proyecto Karli: Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0
           ?  <p>Sin resultados </p>
           : <MoviesList movies={this.state.results}/>
        }
      </div>
    );
  }
}

export default App;
