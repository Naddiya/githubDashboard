// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Page from 'src/components/Page';

/* === State (données) === */
const mapStateToProps = (state) => ({
  logged: state.userReducer.logged,
});
/*
// on peut utiliser la destructuration
const mapStateToProps = ({ logged }) => ({
  logged,
});
*/

/* === Actions === */
const mapDispatchToProps = {};

// Container
const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

// == Export
export default PageContainer;
