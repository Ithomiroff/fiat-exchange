import MENU_LINKS from "../../../constants/menu";
import MenuListStyled, { NavStyled } from "../styled/MenuStyled";
import { NavLink } from "react-router-dom";

const Menu = () => {


  return (
    <NavStyled>
      <MenuListStyled>
        {MENU_LINKS.map(({ label, link }) => (
          <li
            key={link}
          >
            <NavLink to={link}>{label}</NavLink>
          </li>
        ))}
      </MenuListStyled>
    </NavStyled>
  )
};

export default Menu;
