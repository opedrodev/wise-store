/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../styles/components/Button.module.scss';

function Button(props) {
  const {
    type, id, name, placeholder, onClick, className, disabled,
  } = props;

  return (
    <button
      type={type}
      id={id}
      name={name}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {placeholder}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  id: null,
  className: '',
  name: null,
  placeholder: 'Button',
  onClick: () => {},
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
