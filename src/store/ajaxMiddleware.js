import axios from 'axios';

import { AUTHENTICATE, saveUser } from 'src/store/reducers/userReducer';
import { load, finishLoad } from 'src/store/reducers/appReducer';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case AUTHENTICATE:
      store.dispatch(load());
      axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${store.getState().userReducer.token}`,
        },
      })
        .then((response) => {
          const user = {
            avatar: response.data.avatar_url,
            name: response.data.login,
          };
          const actionSaveUser = saveUser(user);
          store.dispatch(actionSaveUser);
          // store.dispatch(
          //   saveUser({
          //     avatar: response.avatar_url,
          //     name: response.login,
          //   }),
          // );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(finishLoad());
        });
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
