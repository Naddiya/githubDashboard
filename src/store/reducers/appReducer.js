import reposData from 'src/data/repos';

// == Initial State
const initialState = {
  search: '',
  loading: false,
  favorites: [],
  repos: reposData.items,
};

// == Types
const LOAD = 'LOAD';
const FINISH_LOAD = 'FINISH_LOAD';
const ADD_FAVORITES = 'ADD_FAVORITES';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case FINISH_LOAD:
      return {
        ...state,
        loading: false,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          action.id,
        ],
      };

    default:
      return state;
  }
};

// == Action Creators

export const load = () => ({
  type: LOAD,
});

export const finishLoad = () => ({
  type: FINISH_LOAD,
});

export const addFavorites = (id) => ({
  type: ADD_FAVORITES,
  id,
});

// == Selectors
export const checkIsFav = (repos, id) => repos.includes(id);


// == Export
export default reducer;
