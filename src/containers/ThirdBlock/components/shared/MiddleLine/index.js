import classNames from 'classnames';
import React from 'react';
import './style.scss';

const MiddleLine = ({ status, position }) =>
  (<hr className={classNames('MiddleLine', `MiddleLine_${ status }`, `MiddleLine_${ position }`)}/>);

export default MiddleLine;