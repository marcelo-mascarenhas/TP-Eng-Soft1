import api from '../api';

export async function getMovieInfo(movie_info) {
  
    try {
      const response = await api.get(`/movie/${movie_info}/100`);
      return response.data.data;
    } catch (err) {
      throw new Error(err.response.data);
    }
}

export async function getMovieRecommender(movie_info) {
    try {
      const response = await api.get(`/get_movie_rec/${movie_info}/12`);
      return response.data.data;
    } catch (err) {
      throw new Error(err.response.data);
    }
}