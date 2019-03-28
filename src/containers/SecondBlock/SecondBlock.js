import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';
import triangle from '../../assets/Other/Path 3@2x.png'
import shape from '../../assets/Bg/Combined Shape.png';
import logo from '../../assets/Other/Group 8@2x.png';
import background from '../../assets/Bg/Mask.png';
import guitarist from '../../assets/Bg/guitarist-407212_1920.png';

class SecondBlock extends Component {
  render() {
    const { text, developer: { name, position, company }, isMobile } = this.props;

    const Guitarist = () => (<img className="SecondBlock-Guitarist" src={guitarist} alt={"Guitarist is sitting on the rock looks happy and playing the guitar."} />);
    const Mask = () => (<img className="SecondBlock-Mask" src={background} alt={"Background Mask"}/>);
    const Shape = () => (<img className="Shape" src={shape}  alt={"Text block Shape"} />);
    const Triangle = () => (<img className="Triangle" src={triangle} alt={"Triangle"}/>);

    return (
      <div className={classNames("SecondBlock-Wrapper", {"SecondBlock-Wrapper_mobile": isMobile})}>
        <div className="SecondBlock">
          <Guitarist />
          <Mask />

          <div className="TextBlock-Wrapper">
            <Shape />
            <div className="TextBlock">
              <span className="TextBlock-Text">{ text }</span>
              <div className="DeveloperBlock">
                <div className="DeveloperBlock-LogoWrapper">
                  <img src={logo} className="Logo" alt={'Developer block logo'} />
                </div>
                <div className="DeveloperBlock-InfoWrapper">
                  <span className="DeveloperBlock-DeveloperName">{ name }</span>
                  <span className="DeveloperBlock-DeveloperPosition">{ position }</span>
                  <span className="DeveloperBlock-DeveloperCompany">{ company }</span>
                </div>
              </div>
            </div>
          </div>

          <div className="Controls-Wrapper">
            <div className="Controls">
              <div className="Controls-Arrow">
                <i className="material-icons">arrow_back</i>
              </div>
              <p className="Controls-Text">1 of 3</p>
              <div className="Controls-Arrow">
                <i className="material-icons">arrow_forward</i>
              </div>
            </div>
          </div>
        </div>

        <Triangle />
      </div>
    );
  }
}

SecondBlock.propTypes = {
  text: PropTypes.string,
  developer: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    company: PropTypes.string,
  }),
};

export default SecondBlock;