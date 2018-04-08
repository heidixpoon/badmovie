import React from 'react';
import EachMovie from './EachMovie.jsx'

class Movies extends React.Component {
  constructor(props) {
    super(props)

  }


//    Make an onclick for each list item. If the movies shown is the search results, 
//.   add it to the db (do it in the main app, and passs down the function). 

//.   If youre currently showing the fave list, delete the movie instead
//.   you can tell which list it is based on whether the prop "showFaves" is false (search results) or true (fave list)


//

  render() {
    let {movieList, saveMovie, favList, showFaves} = this.props
  
    return (
        <ul className="movies">

        { showFaves ?
          favList.map((movie, i) => {
            return(
              <EachMovie key={i} movieInfo={movie} />
            )
          })
        
        : 
          movieList.map((movie, i)=>{
            return (
              <EachMovie key={i} movieInfo={movie} saveMovie={saveMovie} />
            )

          })
        }       

 

        </ul>)
  }
}

export default Movies