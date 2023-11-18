import axios from 'axios';
import { GET_ALLGAMES, GET_GAMESBYNAME, GET_GENRES, GET_DETAIL, CLEAN_DETAIL, POST_GAMES } from './actions_type';

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
    return async (dispatch) => {
        const respuesta = await axios.get(`${url}/videogames?name=${name}`);

        return dispatch({
            type: GET_GAMESBYNAME,
            payload: respuesta.data,
        });
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