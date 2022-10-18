import React, { Component } from 'react';
import P from 'prop-types';
import './style.css';

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        className="bnt-more-posts"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
