import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false
  	}

    this.getMovies = this.getMovies.bind(this)
    this.saveMovie = this.saveMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    this.swapFavorites = this.swapFavorites.bind(this)
    this.getFavorites = this.getFavorites.bind(this)
  }

  getMovies(genreId) {
    //make an axios request to your server on the GET SEARCH endpoint
    axios.get('/search', { params : {
      data: genreId
    }})
    .then((res) => {
      console.log('movie search res in view',res)
      this.setState({
        movies: res.data.results
      })
      console.log('movie search res in view', this.state.movies)

    })
  }

  componentDidMount(){
    this.getFavorites()
  }

  getFavorites(){
    axios.get('/myFavs')
    .then((res) => {
      this.setState({
        favorites: res.data
      })
    })

  }

  saveMovie(eachMovieInfo) {

    console.log(eachMovieInfo)
    axios.post('/save', {
      data: eachMovieInfo
    })
    .then(() => {
      console.log('success in view save!')
      this.getFavorites()
    })

  }

  deleteMovie(eachMovieInfo) {


    axios.post('/delete', {
      data: eachMovieInfo
    })
    .then(() => {
      console.log('deleted!')      
      this.getFavorites()
    })

  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    })
  }

  render () {
  	return (
    <div className="app">
      <header className="navbar"><h1>Bad Movies</h1></header> 
      
      <div className="main">
        <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
        <Movies 
          movieList={this.state.movies} 
          favList={this.state.favorites} 
          movies={this.state.showFaves ? this.state.favorites : this.state.movies} 
          showFaves={this.state.showFaves} 
          saveMovie={this.saveMovie}
          deleteMovie={this.deleteMovie}
        />

      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));