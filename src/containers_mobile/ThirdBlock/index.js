import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import rectangle from "../../assets/Bg/Rectangle 5.png";
import './style.scss';
import Point from "../../containers/ThirdBlock/components/shared/Point";
import MiddleLine from "../../containers/ThirdBlock/components/shared/MiddleLine";
import List from "../../containers/ThirdBlock/components/List";

class ThirdBlockMobile extends Component {
  render() {
    const { items, titleBlockData: { backgroundTitle, title }, finalItem } = this.props;

    const Rectangle = () => (<img src={ rectangle } className="TitleBlock-Rectangle" alt={'Rectangle'}/>);

    return (
      <div className="ThirdBlockMobile-Wrapper">
        <div className="TitleBlock">
          <h1 className="TitleBlock-BackgroundText">{ backgroundTitle }</h1>
          <Rectangle />
          <h2 className="TitleBlock-Title">{ title }</h2>
        </div>
        <div className="ThirdBlockMobile">
          {items.map(item => {
            return (
              <div className="ThirdBlockMobile-Item">
                <Point status={ item.status } />
                <MiddleLine status={ item.status } />
                <h1 className="ThirdBlockMobile-ItemTitle">{ item.title }</h1>
                <List data={ item.list } />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

ThirdBlockMobile.propTypes = {

};

export default ThirdBlockMobile;