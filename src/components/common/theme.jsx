import styled from "styled-components";
import { Link } from 'react-router-dom';
import font from 'fonts/font.css';

// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 16}rem`;

const defaultSpace = {
  padding: "0px",
  margin: "0px",
};

const fontSizes = {
  title: pixelToRem(30),
  subtitle: pixelToRem(24),
  footer: pixelToRem(18),
  paragraph: pixelToRem(18),
  input: pixelToRem(16),
  button: pixelToRem(16),
};

const fontFamilies = {
  fontFamily: `
    GmarketSansMedium
    `
}

const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1440px",
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

const colors = {
  black: "#000000",
  white: "#ffffff",
  brown: "#603000",
  lightGray: "#f3f3f3",
  darkGray: "#cecece",
  beige: "#F5F5DCFF",
  darkBeige: "#ececdc",
};

// 자주 사용하는 스타일 속성을 theme으로 만들어보자.
const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexCenterRow: `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
};

const links = styled(Link)`
  &:focus, &:hover, &:visited, &:link, &:active {
    color: black;
  }
`;

// theme 객체에 감싸서 반환한다.
const theme = {
  defaultSpace,
  fontSizes,
  fontFamilies,
  colors,
  common,
  links,
  size,
  device,
};

export default theme;