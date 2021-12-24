import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import theme from "components/common/theme";
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faPencilRuler, faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled.footer`
  height: 70px;
  background: ${({ theme }) => theme.colors.beige};
  ${({ theme }) => theme.defaultSpace};
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    li {
      flex-direction: row;
      overflow: hidden;
    }
    li:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.brown};
    }
    li:active {
      position: relative;
      top: 2px;
    }
  }
`;

const StyledLink = styled(Link)`
  &:focus, &:visited, &:link {
    color: black;
  }
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.brown};
  }
  &:active {
    position: relative;
    top: 2px;
  }
  font-size: ${({ theme }) => theme.fontSizes.footer};
`;

const Footer = () => {
  return (
    <ThemeProvider theme={ theme }>
      <StyledFooter>
        <ul>
          <li>
            <StyledLink to ="/test"><FontAwesomeIcon icon={ faBookOpen } className="bookList" /></StyledLink>
          </li>
          <li>
            <StyledLink to ="/test"><FontAwesomeIcon icon={ faPencilRuler } className="review" /></StyledLink>
          </li>
          <li>
            <StyledLink to ="/test"><FontAwesomeIcon icon={ faHome } className="home" /></StyledLink>
          </li>
          <li>
            <StyledLink to ="/test"><FontAwesomeIcon icon={ faUser } className="myPage" /></StyledLink>
          </li>
          <li>
            <StyledLink to ="/test"><FontAwesomeIcon icon={ faCog } className="setting" /></StyledLink>
          </li>
        </ul>
      </StyledFooter>
    </ThemeProvider>
  );
};

export default Footer;