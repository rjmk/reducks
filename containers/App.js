import { connect } from 'react-redux';
import Text from '../components/Text.js';
import * as Actions from '../actions';

// REACT-REDUX

const mapStateToProps = state => {
  return {
    display: state
  }
}

const mapDispatchToProps = dispatch => { return {
    submitChar: () => {
      let val = document.querySelector('input').value;
      dispatch(Actions.append(val));
    },
    del: () => dispatch(Actions.del())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Text);
