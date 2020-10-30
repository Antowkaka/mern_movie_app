import Axios from "axios";
import config from "../../../config/default.json"

export const getMovies = () => {
    Axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${config.apiKey}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}