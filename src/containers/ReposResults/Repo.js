// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Repo from 'src/components/ReposResults/Repo';

import { addFavorites, checkIsFav } from 'src/store/reducers/appReducer';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  isFav: checkIsFav(state.appReducer.favorites, ownProps.id),
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  // addFavorites: (id) => {
  //   return () => {
  //     dispatch(addFavorites(id));
  //   };
  // },
  addFavorites: (id) => () => {
    dispatch(addFavorites(id));
  },
});

// Container
const RepoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repo);

// == Export
export default RepoContainer;
