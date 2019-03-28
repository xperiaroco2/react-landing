import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import rectangle from '../../assets/Bg/Rectangle 5.png';
import './style.scss';
import Button from "../../components/Button/Button";

class FirstBlock extends Component {

  render() {
    const { title, buttonsData, blueBlockData: { text, data }, isMobile } = this.props;

    const [ firstData, secondData, thirdData ] = buttonsData;
    const timerData = data.slice(0, 4);

    const Rectangle = () => (<img className="TitleBlock-Rectangle" src={rectangle} alt="Title Rectangle" />);

    const Timer = ({ data }) => {

      function mapValue(value) {
        return value <= 9 ? `0${value}` : value;
      }

      return (
        <div className="Timer">
          {data.map(({ title, value }) => {
            return (
              <div className="Timer-Item">
                <h3>{ title }</h3>
                <h1>{ typeof value === 'number' ? mapValue(value) : value }</h1>
              </div>
            );
          })}
        </div>
      );
    };

    return (
      <div className={classNames("FirstBlock", {"FirstBlock_mobile": isMobile})}>
        <div className="TitleBlock">
          <Rectangle />
          <h1 className="TitleBlock-Title">{ title }</h1>
          <div className="TitleBlock-ButtonsContainer">
            <Button text={firstData.text} onClick={firstData.onClick} icon={firstData.icon} />
            <Button classes={['Button_m']} text={secondData.text} onClick={secondData.onClick} icon={secondData.icon} />
            <Button text={thirdData.text} onClick={thirdData.onClick} icon={thirdData.icon} />
          </div>
        </div>
        <div className="ManBlock">
          <div className="BlueBlock">
            <h2 className="BlueBlock-Title">{ text }</h2>
            <Timer data={ timerData } />
          </div>
        </div>
      </div>
    );
  }
}

FirstBlock.propTypes = {
  title: PropTypes.string,
  buttonsData: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      onClick: PropTypes.func,
      icon: PropTypes.object,
    })
  ),
  blueBlockData: PropTypes.shape({
    text: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
        ]),
      })
    ),
  }),
};

export default FirstBlock;