import {Component} from 'react';
import PropTypes from 'prop-types';

class FetchPeriodic extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    const that = this;
    fetch(that.props.url, {
      method: 'GET'
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .catch(reason => that.props.onError(reason, that.props.url))
    .then(params => {
      if(!(that.props.prevent || that.preventFetch)) {
        that.props.onSuccess(params);
        if(that.props.onAnimationFrame) {
          requestAnimationFrame(that.fetch);
        } else {
          setTimeout(that.fetch, that.props.interval);
        }
      }
    })
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.prevent && !nextProps.prevent) {
      this.fetch();
    }
  }
  componentWillUnmount() {
    this.preventFetch = true;
  }
  componentWillMount () {
    this.fetch();
  }
  render() {
    return null;
  }
}
FetchPeriodic.propTypes = {
  url: PropTypes.string.isRequired,
  interval: PropTypes.number,
  onAnimationFrame: PropTypes.bool,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  prevent: PropTypes.bool,
}

export default FetchPeriodic;
