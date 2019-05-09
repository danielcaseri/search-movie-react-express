import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from '../../utils'
import SingleMovie from '../SingleMovie/SingleMovie.component'
import './movieList.scss'
class MovieList extends Component {

  showMovies = () => {
    if (isEmpty(this.props.movieList)) {
      return null;
    }
    return this.props.movieList.results.map(movie => {
      return (
        <SingleMovie key={movie.id} movie={movie} />)
    })
  }
  render() {
    return (
      <div className='movie-list'>
        <h1>Search Result</h1>
        <div className="order-list">
          {this.showMovies()}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movieList: state.searchBarComponent.movieList
  }
}
export default connect(mapStateToProps)(MovieList);