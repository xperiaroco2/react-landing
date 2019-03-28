import React, { Component } from 'react';
import PropTypes from 'prop-types';

import rectangle from '../../assets/Bg/Rectangle 5.png';
import './style.scss';
import LeftItem from "./components/LeftItem/LeftItem";
import RightItem from "./components/RightItem/RightItem";
import FinalItem from "./components/FinalItem/FinalItem";

class ThirdBlock extends Component {
  render() {
    const { items, titleBlockData: { backgroundTitle, title }, finalItem } = this.props;

    const Rectangle = () => (<img src={ rectangle } className="TitleBlock-Rectangle" alt={'Rectangle'}/>);

    return (
      <div className="ThirdBlock-Wrapper">
        <div className="TitleBlock">
          <h1 className="TitleBlock-BackgroundText">{ backgroundTitle }</h1>
          <Rectangle />
          <h2 className="TitleBlock-Title">{ title }</h2>
        </div>
        <div className="ThirdBlock">
          {
            items.map((props, i) => {
              if (i % 2 === 0) {
                return <LeftItem { ...props } />
              } else {
                return <RightItem { ...props } />
              }
            })
          }
          <FinalItem title={ finalItem.title } list={ finalItem.list }/>
        </div>
      </div>
    );
  }
}

ThirdBlock.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          status: PropTypes.string,
          title: PropTypes.string,
          list: PropTypes.arrayOf(PropTypes.string),
        })
      )
    })
  ),
  titleBlockData: PropTypes.shape({
    backgroundTitle: PropTypes.string,
    title: PropTypes.string,
  }),
  finalItem: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ThirdBlock;