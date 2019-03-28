import logo from "../../../../assets/Logo/logo_round@2x.png";
import React from "react";
import './style.scss';
import List from "../List";

const FinalItem = ({ title, list }) => {

  const ImageWrapper = ({children}) => {
    return (
      <div className="FinalItem-ImageWrapper">
        {children}
      </div>
    );
  };

  return (
    <div className="FinalItem">
      <ImageWrapper>
        <img src={logo} className="Icon" alt={'Final item icon'} />
      </ImageWrapper>
      <h3 className="FinalItem-Title">{ title }</h3>
      <List data={ list } />
    </div>
  );
};

export default FinalItem;