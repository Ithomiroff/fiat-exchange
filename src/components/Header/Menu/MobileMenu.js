import {
  Avatar,
  Burger,
  ButtonBurger,
  ButtonCloseContainer,
  CloseButton,
  MobileMenuHeader,
  StyledInnerNav,
  StyledMobileNav,
  StyledPopup
} from "../styled/MenuStyled";
import MENU_LINKS from "../../../constants/menu";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ open, onClose, onOpen }) => {

  return (
    <StyledPopup
      modal
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      trigger={
        <ButtonBurger>
          <Burger />
        </ButtonBurger>
      }
      className="mobile-menu"
      closeOnDocumentClick
    >
      <StyledMobileNav>
        <StyledInnerNav>
          <MobileMenuHeader>
            <Avatar/>
            <ButtonCloseContainer onClick={onClose}>
              <CloseButton/>
            </ButtonCloseContainer>
          </MobileMenuHeader>
          <ul>
            {MENU_LINKS.map(({ label, link }) => (
              <li
                key={link}
              >
                <NavLink to={link} onClick={onClose}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </StyledInnerNav>
      </StyledMobileNav>
    </StyledPopup>
  )
};

export default MobileMenu;
