import { GET_ALLGAMES, GET_GENRES, GET_GAMESBYNAME, GET_DETAIL, CLEAN_DETAIL, POST_GAMES, FILTER_GENRE, ORDER, CREATE} from '../Actions/actions_type';

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

      case FILTER_GENRE:
        let allGamesGenre = state.allGames;
        let genreFiltered =
          action.payload === 'All'
            ? allGamesGenre
            : allGamesGenre.filter((game) => {
              return game.genres.some((name) => name === action.payload);
            });
            return {
              ...state,
              games: genreFiltered,
            };

      case ORDER:
        const orderGames = [...state.games];
        if (action.payload === 'A') {
          orderGames.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            games: orderGames,
          };
        }

        if (action.payload === 'D') {
          orderGames.sort(function (a,b) {
            if(a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
          });
          return {
            ...state,
            games: orderGames,
          };
        }

        if (action.payload === 'L') {  
          //L de Less = menor/menos
          orderGames.sort(function (a, b) {
            if (a.rating > b.rating) {
              return 1;
            }
            if (b.rating > a.rating) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            games: orderGames,
          };
        }

        if (action.payload === 'H') {
          //H de Higher = mayor/mas alto
          orderGames.sort(function (a,b) {
            if (a.rating > b.rating) {
              return -1;
            }
            if (b.rating > a.rating) {
              return 1;
            }
          });
          return {
            ...state,
            games: orderGames,
          };
        }

        if (action.payload === 'none') {}
        return {
          ...state,
          games: orderGames,
        };

      case CREATE:
        const gameCreado = state.allGames;
        const gameFilter = 
          action.payload === 'Creado'
            ? gameCreado.filter((game) => game.createdInDb)
            : gameCreado.filter ((game) => !game.createdInDb);
        return {
          ...state,
          games:
           action.payload === 'All'
             ? gameCreado
             : gameFilter.length
             ? gameFilter
             : [],
        };
        
        default:
            return state;
    }
  };

  export default reducer;
  