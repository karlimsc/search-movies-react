import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ButtonBacktoHome} from '../components/ButtonBacktoHome.js'

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

componentDidMount(){
  const {movieId} = this.props.match.params
  this._fetchMovie({id : movieId})
}

  render(){
    const { Title,  Poster, Actors, Genre, Language, Plot} =
    this.state.movie

    return(
      <div>
        <div className="Header-title-detail">
            {Title}
        </div>
          <img
            src = {Poster}
            alt="Poster de la película"
          />
          <div className="Box-detail">
              <article class="message is-dark">
                  <div class="message-header">
                    <p>Description</p>
                    <button class="delete" aria-label="delete"></button>
                  </div>
                <div class="message-body">
                    <h3>{Actors}</h3>
                    <h4>{Language}</h4>
                    <span>{Genre}</span>
                    <p>{Plot}</p>
                </div>
              </article>

          </div>
          {ButtonBacktoHome}
      </div>
    )
  }
}
