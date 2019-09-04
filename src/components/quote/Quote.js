import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quoteObj }) {
  console.log(quoteObj, 'fsfs');
  const list = quoteObj.map(quote => {
    return (
      <>
        <img src={quote.image} />
        <h3>{quote.character}</h3>
        <p>{quote.quote}</p>
      </>
    );
  });
  return (
    <div>
      hi
      {list}
    </div>
  );
}

Quote.propTypes = {
  quoteObj: PropTypes.array
};

export default Quote;
