import axios from "axios";

// const getMovie = async ({page, keyword}) => { 
const getMovie = async (body) => { 
  try {
    // const response = await axios.get(`https://www.omdbapi.com/?apikey=1b9d71d2&s=${keyword}&page=${page}`)
    const response = await axios.get(`https://www.omdbapi.com/?apikey=1b9d71d2&s=${body.key}&page=${body.page}`)
    return response;
  } catch (error) {
    return error;
  }
}
const getDetailMovie = async (id) => { 
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=1b9d71d2&i=${id}`)
    return response;
  } catch (error) {
    return error;
  }
}


const movieService = {
  getMovie,
  getDetailMovie
}


export default movieService;
