import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled, { keyframes, css } from 'styled-components';
import { COLOR_CLAVE_PINK, COLOR_CLAVE_GREEN, COLOR_CLAVE_YELLOW } from '../colors';
import { ColorContext } from './Layout';
import { onMobile, onDesktop } from './Breakpoints';

export const ignoreStyle = styles => '';

const ClaveLink = ({ to, children, className, showOnMobile, ...props }) => {
  const { textColor } = useContext(ColorContext);
  const ColoredLink = styled(props.href ? StyledAnchor : StyledLink)`
    color: ${textColor || COLOR_CLAVE_GREEN};
    ${onMobile(`
      display: ${showOnMobile ? "flex" : "none"};
    `)}
  `;

  return (
    <Underline showOnMobile>
      <ColoredLink className={className} to={to} {...props}>
        {children}
      </ColoredLink>
    </Underline>
  );
};

const hoverKeyframes = keyframes`
0% {
  background: ${COLOR_CLAVE_PINK};
  transform: scaleX(1);
}
50% {
  background: ${COLOR_CLAVE_PINK};
  transform: scaleX(0.0); }

51% {
  background: ${COLOR_CLAVE_YELLOW};
  transform: scaleX(0.0); }
100% {
  background: ${COLOR_CLAVE_YELLOW};
  transform: scaleX(1.0);
}
`;

const hoverAnimation = css`
  ${hoverKeyframes} 0.5s;
`;

const Underline = styled.div(props => css`
  display: flex;
  flex-direction: column;
  width: fit-content;
  &:after {
    content: '';
    margin-top: 5px;
    display: block;
    height: 2px;
    background: ${COLOR_CLAVE_PINK};
  }
  &:hover:after {
    content: '';
    margin-top: 5px;
    display: block;
    height: 2px;
    animation: ${hoverAnimation};
    animation-fill-mode: forwards;
  }

  ${onMobile(`
    display: ${props.showOnMobile ? "block" : "none"};
  `)}
`);

export const RightArrowLink = styled(ClaveLink)`
  display: flex;
  font-size: 24px;
  margin: 20px -15px -3px 0;
  
  &:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid transparent;
  }

  &:hover:after {
    content: '';
    width: 0;
    height: 0;
    margin-left: 20px;
    margin-top: -2px;
    display: block;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid ${COLOR_CLAVE_GREEN};
    transform: scaleX(0.6) scaleY(0.6);
  }

  ${onDesktop(`
  font-size: 32px;

  &:hover:after {
    margin-top: 5px;
  }
  `)}
`;

export const LeftArrowLink = styled(ClaveLink)`
  display: flex;
  font-size: 24px;
  margin: 20px 0px -3px -40px;
  
  &:before {
    content: '';
    width: 40px;
    height: 0;
    display: block;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid transparent;
  }

  &:hover:before {
    content: '';
    width: 0;
    height: 0;
    margin: -2px 20px -20px 0;
    display: block;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid ${COLOR_CLAVE_GREEN};
    transform: scaleX(-0.6) scaleY(0.6);
  }

  ${onDesktop(`
  font-size: 32px;

  &:hover:before {
    margin-top: 5px;
  }
  `)}
`;

const ANCHOR_STYLES = css`
  text-decoration: none;
`;

const StyledAnchor = styled.a`
  ${ANCHOR_STYLES}
`;
const StyledLink = styled(Link)`
  ${ANCHOR_STYLES}
`;

export default ClaveLink;
