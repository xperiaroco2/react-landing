import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../components/Button/Button';

import rectangle from '../../assets/Bg/header-rect.png';

import './style.scss'

class Header extends Component {
  render() {
    const { logo, items, buttonData: { text: buttonText, onClick }, isMobile } = this.props;

    const Rectangle = () => (<img src={rectangle} className="Header-Rectangle" alt="Header Rectangle" />);
    const Logo = ({src, alt}) => (<img src={src} className="Header-Logo" alt={alt} />);

    const Items = ({data}) => {
      return (
        <div className="Header-Menu">
          {data.map(item => (<div className="Item">{item}</div>))}
        </div>
      );
    };

    return (
      <div className={classNames("Header", {"Header_mobile": isMobile})}>
        <Rectangle/>
        <Logo src={logo} alt={"Header Logo"} />
        <Items data={items} />
        <Button text={buttonText} onClick={onClick} className="Header-Button" />
      </div>
    );
  }
}

Header.propTypes = {
  logo: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  buttonData: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

export default Header;