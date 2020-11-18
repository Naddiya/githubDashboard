// == Initial State
const initialState = {
  logged: false,
  user: {},
  token: '',
};

// == Types
const CHANGE_VALUE = 'CHANGE_VALUE';
export const AUTHENTICATE = 'AUTHENTICATE';
const SAVE_USER = 'SAVE_USER';
const LOGOUT = 'LOGOUT';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        logged: true,
        user: action.user,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
        token: '',
        user: {},
      };

    default:
      return state;
  }
};

// == Action Creators
export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const authenticate = () => ({
  type: AUTHENTICATE,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

export const logout = () => ({
  type: LOGOUT,
});

// == Selectors


// == Export
export default reducer;
