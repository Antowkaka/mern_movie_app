import React, {useEffect, useState} from "react";
import {getDailyTranding} from "../../api/getDailyTranding";
import Axios from "axios";
import {FilmCard} from "../../components/FilmCard/FilmCard";
import {BodySkeleton} from "../../components/BodyContainer/BodyContainer";

require('dotenv').config()

export const Home = () => {
    const [dailyMovies, setMovies] = useState([])
    const { REACT_APP_API_KEY } = process.env

    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${REACT_APP_API_KEY}`)
            .then(res => {
                console.log(res.data)
                setMovies(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const moviesList = dailyMovies.map((movie, key) => (
            <FilmCard
                key={key}
                filmName={movie.title}
                filmDate={movie.release_date}
                filmImgUrl={movie.poster_path}
                filmOverview={movie.overview}
            />
        )
    ).slice(0, 18)

    return (
        <BodySkeleton>
            {moviesList}
        </BodySkeleton>
    )
}