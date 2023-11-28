import axios from 'axios';
import { GET_ALLGAMES, GET_GAMESBYNAME, GET_GENRES, GET_DETAIL, CLEAN_DETAIL, POST_GAMES, FILTER_GENRE, ORDER, CREATE, RESET_FILTERS } from './actions_type';

export const url = 'http://localhost:3001';

export const getAllGames = () => {
    return async (dispatch) => {
        const respuesta = await axios.get(`${url}/videogames`);

        return dispatch({
            type: GET_ALLGAMES,
            payload: respuesta.data,
        });
    };
};

export const getGamesByName = (name) => {
    return async function (dispatch) {
      try {
        const { data } = await axios.get(
            `${url}/videogames?name=${name}`
        );
        dispatch({ type: GET_GAMESBYNAME, payload: data });
      } catch (error) {
        const errorData = {
          message: "Error: Videogame not found",
          status: error.response ? error.response.status : null,
        };
        throw errorData;
}
  };
  };

export const getGenres = () => {
    return async (dispatch) => {
        const respuesta = await axios.get(`${url}/genres`);

        return dispatch({
            type: GET_GENRES,
            payload: respuesta.data,
        });
    };
};

export const getDetail = (id) => {
    return async (dispatch) => {
        try {
            const respuesta = await axios.get(`${url}/videogames/${id}`);
            
            return dispatch({
                type: GET_DETAIL,
                payload: respuesta.data,
            });
        } catch (error) {
            return[];
        }
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

export const postGame = (newGame) => {
    return async(dispatch) => {
        try {
            const respuesta = await axios.post(`${url}/videogames`, newGame);
            return dispatch({
                type: POST_GAMES,
                payload: respuesta.data
            });
        } catch (error) {
            return error.message;   
        }
    };
};

export const filter = (genre) => {
    return { type: FILTER_GENRE, payload: genre };
};

export const order = (order) => {
    return { type: ORDER, payload: order };
};

export const create = (create) => {
    return { type: CREATE, payload: create };
};

export const resetFilters = () => {
    return { type: RESET_FILTERS };
};