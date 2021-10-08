import axios from 'axios';

let apiKey = "678a2f84cfa9123c8144db55cb3f6bdc";
let city = "Minsk";

export const temperature = () => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`)
}