import axios from "axios";

//Base da URL: https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=01bebd999b80326d1ee186588f86b93b&language=pt-BR

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export default api;