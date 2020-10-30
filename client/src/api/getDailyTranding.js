import Axios from "axios";
import config from "../../../config/default.json"

export function getDailyTranding ()  {
    Axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${config.apiKey}`)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}