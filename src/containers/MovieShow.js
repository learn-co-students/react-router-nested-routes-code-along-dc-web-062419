import React from 'react'

const MovieShow = ({match, movies}) => {
    // console.log(props)
    return <div>{movies[match.params.movieId].title}</div>
}

export default MovieShow