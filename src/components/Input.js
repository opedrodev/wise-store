import PropTypes from 'prop-types';
import React from 'react';

import styles from '../styles/components/Input.module.scss';

function Input(props) {
  const {
    type, id, name, value, placeholder, onChange, className,
  } = props;

  return (
    <input
      className={`${styles.input} ${className}`}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

Input.defaultProps = {
  type: 'text',
  id: null,
  className: '',
  name: null,
  value: undefined,
  placeholder: null,
  onChange: () => {},
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
