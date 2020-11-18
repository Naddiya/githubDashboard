// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Login from 'src/components/Login';
import { changeValue, authenticate } from 'src/store/reducers/userReducer';

/* === State (données) === */
const mapStateToProps = (state) => ({
  token: state.userReducer.token,
  loading: state.appReducer.loading,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeInput: (value) => {
    const action = changeValue('token', value);
    dispatch(action);
  },
  doAuthenticate: () => {
    dispatch(authenticate());
  },
});

// Container
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

// == Export
export default LoginContainer;
