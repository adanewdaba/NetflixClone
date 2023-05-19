import axios from "axios";
 
const instance = axios.create ({
    baseURL: "https://api.themoviedb.org/3"
    
});

export default instance;

//Axios is a popular JavaScript library that is used to make HTTP requests from web applications. 