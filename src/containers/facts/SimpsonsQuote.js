import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Quote from '../../components/quote/Quote';
import { getQuote, getQuoteLoading } from '../../selectors/simpsonsSelectors';
import { fetchQuote } from '../../actions/simpsonsActions';

class SimpsonsQuote extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    quoteObj: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    // const quote = quoteObj[0];
    const { quoteObj, loading } = this.props;
    if(loading) return <h1>LOADING</h1>;

    return <Quote quoteObj={quoteObj} />;
  }
}

const mapStateToProps = state => ({
  quoteObj: getQuote(state),
  loading: getQuoteLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
