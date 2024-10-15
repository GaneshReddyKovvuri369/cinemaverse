import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar.Components'

const MovieLayoutHoc = (Component) => ({...props}) => {
  return (
    <div>
        <MovieNavbar />
        <Component {...props} />
    </div>
  )
}

export default MovieLayoutHoc