import React, {useEffect, useState} from "react";
import {getDailyTranding} from "../../api/getDailyTranding";
import Axios from "axios";
import {FilmCard} from "../../components/FilmCard/FilmCard";
import {BodySkeleton} from "../../components/BodyContainer/BodyContainer";

export const Home = () => {
    const [dailyMovies, setMovies] = useState([])

    useEffect(() => {
        Axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=5757c3ed544bf433eda60ef7b46c7e03')
            .then(res => {
                setMovies(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const moviesList = dailyMovies.map((movie, key) => <FilmCard key={key} filmName={movie.title} filmDate={movie.release_date}/>)

    return (
        <BodySkeleton>
            {moviesList}
        </BodySkeleton>
    )
}