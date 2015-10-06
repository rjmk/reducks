import { connect } from 'react-redux';
import Text from '../components/Text.js';
import * as Actions from '../actions';

// REACT-REDUX

const mapStateToProps = state => {

  return {
    gifs: state
  };
}

const mapDispatchToProps = dispatch => {

    return {
    submitChar: () => {

      let val = document.querySelector('input').value;
      dispatch( Actions.getGiff(val));
    },
    del: () => dispatch(Actions.del())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Text);
