import axios from 'axios';
import { GET_ALLGAMES, GET_GAMESBYNAME, GET_GENRES } from './actions_type';

export const url = 'http://localhost:3001';

export const getAllGames = () => {
    return async (dispatch) => {
        const respuesta = await axios(`${url}/videogames`);

        return dispatch({
            type: GET_ALLGAMES,
            payload: respuesta.data,
        });
    };
};

export const getGamesByName = (name) => {
    return async (dispatch) => {
        const respuesta = await axios(`${url}/videogames?name=${name}`);

        return dispatch({
            type: GET_GAMESBYNAME,
            payload: respuesta.data,
        });
    };
};

export const getGenres = () => {
    return async (dispatch) => {
        const respuesta = await axios(`${url}/genres`);

        return dispatch({
            type: GET_GENRES,
            payload: respuesta.data,
        });
    };
};