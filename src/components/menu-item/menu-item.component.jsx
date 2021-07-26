import React from "react";
// import "./menu-item.component.scss";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-item.styles";

const MenuItem = ({ head, imgUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></BackgroundImageContainer>
      <ContentContainer className="content">
        <ContentTitle className="title">{head.toUpperCase()}</ContentTitle>
        <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
