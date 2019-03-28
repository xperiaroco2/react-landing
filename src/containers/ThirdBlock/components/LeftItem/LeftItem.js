import React from "react";
import Point from "../shared/Point";
import MiddleLine from "../shared/MiddleLine";
import TopLine from "../shared/TopLine";
import List from "../List";
import './style.scss';

const LeftItem = ({ title, status, list }) => {
  return (
    <div className="LeftItem-Wrapper">
      <div className="LeftItem">
        <h3 className="LeftItem-Title">{ title }</h3>
        <TopLine status={ status } position={ 'left' }/>
        <Point status={ status } position={ 'left' }/>
        <div className="List-Wrapper">
          <List status={ status } data={ list } />
          <MiddleLine status={ status } position={ 'left' }/>
        </div>
      </div>
    </div>
  );
};

export default LeftItem;