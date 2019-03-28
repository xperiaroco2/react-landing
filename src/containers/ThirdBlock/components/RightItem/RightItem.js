import React from "react";
import classNames from 'classnames';
import MiddleLine from "../shared/MiddleLine";
import Point from "../shared/Point";
import List from "../List";
import TopLine from "../shared/TopLine";
import './style.scss';

const RightItem = ({ status, title, list }) => {

  return (
    <div className="RightItem">
      <Point status={ status } position={ 'right' }/>
      <TopLine status={ status } position={ 'right' }/>
      <h3 className={classNames("RightItem-Title", `RightItem-Title_${ status }`)}>{ title }</h3>
      <div className="RightItem-Wrapper">
        <MiddleLine status={ status } position={ 'right' } />
        <div className="List-Wrapper">
          <List status={ status } data={ list } />
        </div>
      </div>
    </div>
  );
};

export default RightItem;