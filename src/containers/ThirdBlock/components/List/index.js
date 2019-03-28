import React from "react";
import classNames from "classnames";
import './style.scss';

const List = ({ status, data }) => {
  return (
    <div className="List">
      {data.map(text => {
        return (
          <div className="Item">
            <div className={classNames("Item-Dot", `Item-Dot_${ status }`)} />
            <span className={classNames("Item-Text", `Item-Text_${ status }`)}>{ text }</span>
          </div>
        );
      })}
    </div>
  );
};

export default List;