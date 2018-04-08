import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    }
    this.onClickSearch = this.onClickSearch.bind(this)
  }

  componentDidMount() {
    axios.get('/genres')
    .then((res) => {
      this.setState({
        genres: res.data.genres
      })

      console.log(this.state.genres)
    }).catch((err) => {

    })

  }

  onClickSearch(){

    let currentGenre = this.genre.value;
    this.props.getMovies(currentGenre);

  }


  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
  }
  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>


      {/* 
          Make the select options dynamic from genres !!!
          How can you tell which option has been selected from here?
      */}

        <select ref={select => this.genre = select} >
          {
            this.state.genres.map((genre, i)=> {
              return (
                <option key={i} value={genre.id}>{genre.name}</option>

              )
            })
          }
        </select>
        <br/><br/>

        <button onClick={this.onClickSearch}>Search</button>

      </div>)
  }
}

export default Search