import React from 'react';
import axios from 'axios';

class EachMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.onClickSave = this.onClickSave.bind(this)
 
  }

  onClickSave(){
    let {movieInfo} = this.props
    this.props.saveMovie(movieInfo)
  }



  render() {
    let {movieInfo} = this.props

    return (

      <li className="movie_item" onClick={this.onClickSave}>
        <img src={`http://image.tmdb.org/t/p/w185${movieInfo.poster_path}`}/>
        <div className="movie_description">
          <h2>{movieInfo.title}</h2>
          <section className="movie_details">
            <div className="movie_year">
              <span className="title">Year</span>
              <span>{movieInfo.release_date}</span>
            </div>
            <div className="movie_rating">
              <span className="title">Rating</span>
              <span>{movieInfo.vote_average}</span>
            </div>
          </section>
        </div>
      </li>

      )
  }
}

export default EachMovie