import React from 'react'


const MovieShow = ({match, movies}) => {
    return (
        <div>
            {movies[match.params.movieId].title}

        </div>
    )
}


export default MovieShow