// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Userhome from 'src/components/Userhome';

import { logout } from 'src/store/reducers/userReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});
/*
// on peut utiliser la destructuration
const mapStateToProps = ({ logged }) => ({
  logged,
});
*/

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

// Container
const UserhomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Userhome);

// == Export
export default UserhomeContainer;
