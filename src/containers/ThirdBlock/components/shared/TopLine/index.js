import React from "react";
import classNames from 'classnames';
import './style.scss';

const TopLine = ({ status, position }) =>
  (<hr className={classNames("TopLine", `TopLine_${ status }`, `TopLine_${ position }`)} />);

export default TopLine;