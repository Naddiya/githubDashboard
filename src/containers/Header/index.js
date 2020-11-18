// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

/* === State (données) === */
const mapStateToProps = (state) => ({
  logged: state.userReducer.logged,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
