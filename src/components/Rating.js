import PropTypes from 'prop-types';
import React from 'react';

function Rating(props) {
  const { onInputChange } = props;

  return (
    <div
      onChange={(e) => onInputChange(e)}
    >
      <label htmlFor="um">
        1
        <input type="radio" name="rating" id="um" value="1" />
      </label>
      <label htmlFor="dois">
        2
        <input type="radio" name="rating" id="dois" value="2" />
      </label>
      <label htmlFor="tres">
        3
        <input type="radio" name="rating" id="tres" value="3" />
      </label>
      <label htmlFor="quatro">
        4
        <input type="radio" name="rating" id="quatro" value="4" />
      </label>
      <label htmlFor="cinco">
        5
        <input type="radio" name="rating" id="cinco" value="5" />
      </label>
    </div>
  );
}

Rating.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Rating;
