import React from 'react';
import classNames from 'classnames';

import PropTypes from 'prop-types';
import './style.scss';

function Button ({ text, onClick, classes, icon }) {
  return (
    <div className={ classNames('Button', classes) } onClick={ onClick }>
      { icon }
      <span className="Button-Text">
        { text }
      </span>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.func,
};

export default Button;