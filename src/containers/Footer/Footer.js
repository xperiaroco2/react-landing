import React, { Component } from 'react';
import classNames from 'classnames';
import './style.scss';
import logo from '../../assets/Logo/logo@2x.png';
import telegram from '../../assets/Social/Telegram.png';

export default class Footer extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div className={classNames("Footer", {"Footer_mobile": isMobile})}>
        <div className="TopContainer">
          <img src={logo} className="TopContainer-Logo" alt={'Footer logo'}/>
          <div className="TopContainer-Items">
            <div className="Item-Wrapper">
              <img src={telegram} alt="it's github, not telegram" className="Item"/>
            </div>
            <div className="Item-Wrapper">
              <img src={telegram} alt="it's github, not telegram" className="Item"/>
            </div>
            <div className="Item-Wrapper">
              <img src={telegram} alt="it's github, not telegram" className="Item"/>
            </div>
            <div className="Item-Wrapper">
              <img src={telegram} alt="it's github, not telegram" className="Item"/>
            </div>
            <div className="Item-Wrapper">
              <img src={telegram} alt="it's github, not telegram" className="Item"/>
            </div>
            <div className="Item-Wrapper">
              <img src={telegram} alt="it's github, not telegram" className="Item"/>
            </div>
            <div className="Item-Wrapper">
              <img src={telegram} alt="it's github, not telegram" className="Item"/>
            </div>
            <div className="Item-Wrapper">
              <img src={telegram} alt="it's github, not telegram" className="Item"/>
            </div>
          </div>
        </div>
        <div className="BottomContainer">
          <div className="BottomContainer-LicItems">
            <span className="Item">Privacy Policy</span>
            <span className="Item">Terms & Conditions</span>
            <span className="Item">Tokensale Agreement</span>
          </div>
          <span className="BottomContainer-Rights">@ 2018 S-PRO - All rights reserved</span>
        </div>
      </div>
    );
  }
}