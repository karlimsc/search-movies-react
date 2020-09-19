import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = '60477527'

export class Detail extends Component {

static propTypes = {
  match:  PropTypes.shape({
    params: PropTypes.object,
    isExact:  PropTypes.bool,
    path:PropTypes.string,
    url: PropTypes.string
  })
}

state = { movie: {}}

_fetchMovie({id}) {
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(res =>  res.json())
    .then(movie => {
      this.setState({movie})
  })
}

_goBack(){
  window.history.back()
}

componentDidMount(){
  const {movieId} = this.props.match.params
  this._fetchMovie({id : movieId})
}

  render(){
    const { Title,  Poster, Actors, Genre, Language, Plot} =
    this.state.movie

    return(
      <div>
          <h1> {Title} </h1>
          <img
            src = {Poster}
            alt="Poster de la película"
          />
          <h3>{Actors}</h3>
          <h4>{Language}</h4>
          <span>{Genre}</span>
          <p>{Plot}</p>
        <button className="button is-dark" onClick={this._goBack}>Go back</button>
      </div>
    )
  }
}
