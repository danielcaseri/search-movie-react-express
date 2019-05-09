import React, { Component } from 'react'
import MovieListComponent from '../MovieList/MovieList.component';
import './main.scss'
export default class Main extends Component {
  render() {
    return (
      <div className='main-body'>
        <MovieListComponent />
      </div>
    )
  }
}
