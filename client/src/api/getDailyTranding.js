import Axios from "axios";
require('dotenv').config()

export function getDailyTranding ()  {
    Axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}