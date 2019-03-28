import React from 'react';
import classNames from 'classnames';
import './style.scss';

const Point = ({ status, position }) => {

  const CheckedIcon = () => (<i className="material-icons">check</i>);
  const Dot = () => (<div className="Point-Dot" />);

  return (
    <div className={classNames('Point', `Point_${ status }`, `Point_${ position }`)}>
      { status === 'checked' && <CheckedIcon /> }
      { status === 'current' && <Dot /> }
    </div>
  );
};

export default Point;