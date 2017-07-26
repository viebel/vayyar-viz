import {Component} from 'react';
import PropTypes from 'prop-types';

class FetchInit extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    const getParams = (that, url) => {
      fetch((url), {
        method: 'GET'
      })
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .catch(reason => {
        that.props.onError(reason, url)
      })
      .then(params => {
        if(!params) {
          return; //TODO: find a better solution to detect there was an error
        }
        that.props.onSuccess(params);
      })
    }

    const that = this;
    fetch(that.props.urlPost, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(that.props.paramsInit)
    }).then(response => {
      getParams(that, that.props.urlGet)
    }).catch(reason => {
        that.props.onError(reason, that.props.urlPost)
      })
  }

  componentWillMount () {
    this.fetch();
  }
  render() {
    return null;
  }
}
FetchInit.propTypes = {
  urlGet: PropTypes.string.isRequired,
  urlPost: PropTypes.string.isRequired,
  interval: PropTypes.number,
  onAnimationFrame: PropTypes.bool,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
}

export default FetchInit;
