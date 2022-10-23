import styled from "styled-components";
import { CommonButton } from "../../../GlobalStyled";
import Popup from "reactjs-popup";

const NavStyled = styled.nav`
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MenuListStyled = styled.ul`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  display: flex;
  li {
    &:hover {
      background: linear-gradient(0deg, rgba(81, 81, 81, 0.2), rgba(81, 81, 81, 0.2)), linear-gradient(1.42deg, rgba(27, 143, 255, 0) -120.54%, #1B8FFF -108.38%, #1B8FFF -29.06%, rgba(27, 143, 255, 0) 46.15%);
    }
  }
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent-color);
  align-self: center;
  margin: 0 25px 0 20px;
`;

const Burger = styled.span`
  display: block;
  width: 35px;
  height: 2px;
  position: relative;
  background: currentColor;
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    width: 35px;
    height: 2px;
    display: block;
    background: currentColor;
  }
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    width: 35px;
    height: 2px;
    display: block;
    background: currentColor;
  }


  transition: all .3s ease-in;
`;

const ButtonBurger = styled(CommonButton)`
  display: none;
  height: 35px;
  padding: 5px;
  color: var(--text-color);

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
  
  &:hover {
    color: var(--accent-color);
  }
`;

const StyledPopup = styled(Popup)`
  &-content {
    margin: 0 auto!important;
    background: transparent;
    border: none;
    width: var(--container-width);
    height: fit-content;
  }
`;

const StyledMobileNav = styled.nav`
  margin: 0 auto;
  padding: 15px 0 0 0;
`;

const StyledInnerNav = styled.div`
  --gradient: linear-gradient(351.15deg, rgba(27, 143, 255, 0) 29.45%, #1B8FFF 38.83%, #1B8FFF 59.16%, rgba(27, 143, 255, 0) 83.59%),
  linear-gradient(51.06deg, rgba(27, 143, 255, 0) 32.69%, #1B8FFF 41.04%, #1B8FFF 73.09%, rgba(27, 143, 255, 0) 80.87%),
  linear-gradient(0deg, rgba(81, 81, 81, 0.2), rgba(81, 81, 81, 0.2)),
  linear-gradient(0deg, rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.4));

  position: relative;
  height: 100%;
  width: 100%;
  
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--gradient);
    clip-path: polygon(0 10.00px,10.00px 0,100% 0,100% calc(100% - 10.00px),calc(100% - 10.00px) 100%,0 100%,0 10.00px,4px  calc(10.00px + 1.66px),4px calc(100% - 4px),calc(100% - 10.00px - 1.66px) calc(100% - 4px),calc(100% - 4px) calc(100% - 10.00px - 1.66px),calc(100% - 4px) 4px,calc(10.00px + 1.66px) 4px,4px calc(10.00px + 1.66px));
  }
  
  --line-gradient: linear-gradient(90deg, rgba(27, 143, 255, 0) 0%, #1B8FFF 44.79%, rgba(27, 143, 255, 0) 100%);

  a {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 18px 20px;
    text-align: right;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      opacity: 0.3;
      background: var(--line-gradient);
    }
  }
  ul {
    padding: 0;
  }
  li {
    &:last-child {
      a:after {
        display: none;
      }
    }
    &:hover {
      background: linear-gradient(0deg, rgba(81, 81, 81, 0.2), rgba(81, 81, 81, 0.2)), linear-gradient(1.42deg, rgba(27, 143, 255, 0) -120.54%, #1B8FFF -108.38%, #1B8FFF -29.06%, rgba(27, 143, 255, 0) 46.15%);
    }
  }
`;

const ButtonCloseContainer = styled(CommonButton)`
  color: var(--text-color);
  height: 35px;
  padding: 5px;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const CloseButton = styled.span`
  position: relative;
  display: block;
  width: 35px;
  height: 2px;
  transform: rotate(45deg);
  background: currentColor;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    transform: rotate(-90deg);
    display: block;
    width: 35px;
    height: 2px;
    background: currentColor;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 14px 20px 0;
`;


export { NavStyled, Avatar, Burger, ButtonBurger, StyledPopup, StyledMobileNav, StyledInnerNav, CloseButton, MobileMenuHeader, ButtonCloseContainer };
export default MenuListStyled;

