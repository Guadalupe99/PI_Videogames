import { GET_ALLGAMES, GET_GENRES, GET_GAMESBYNAME, GET_DETAIL, CLEAN_DETAIL, POST_GAMES } from '../Actions/actions_type';

const initialState = {
    games: [],
    allGames: [],
    gamesByname: [],
    genres: [],
    detail: {},
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALLGAMES:
        return {
          ...state,
          games: action.payload,
          allGames: action.payload,
        };
      case GET_GENRES:
        return {
          ...state,
          genres: action.payload,
        };
      case GET_GAMESBYNAME:
        return {
          ...state,
          games: [action.payload],
          gamesByname: [action.payload],
        };
      case GET_DETAIL:
        return {
          ...state,
          detail: action.payload
        };
      case CLEAN_DETAIL:
        return {
          ...state,
          detail: {},
        };
      case POST_GAMES:
        return { ...state };

        default:
            return state;
    }
  };

  export default reducer;