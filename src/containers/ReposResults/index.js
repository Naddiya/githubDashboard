// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ReposResults from 'src/components/ReposResults';

/* === State (données) === */
const mapStateToProps = (state) => ({
  repos: state.appReducer.repos,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const ReposResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReposResults);

// == Export
export default ReposResultsContainer;
