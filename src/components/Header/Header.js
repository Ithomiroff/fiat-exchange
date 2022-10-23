import HeaderStyled, {
  ButtonContainer,
  HeaderInner,
  SupportButton
} from "./styled/HeaderStyled";
import Menu from "./Menu";
import { Avatar } from "./styled/MenuStyled";
import MobileMenu from "./Menu/MobileMenu";
import { useState } from "react";

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  const onOpen = () => setMenuOpened(true);
  const onClose = () => setMenuOpened(false);

  return (
    <HeaderStyled hidden={menuOpened}>
      <HeaderInner>
        <Avatar/>
        <Menu/>
        <ButtonContainer>
          <SupportButton>Поддержка 24/7</SupportButton>
        </ButtonContainer>
        <MobileMenu
          open={menuOpened}
          onOpen={onOpen}
          onClose={onClose}
        />
      </HeaderInner>
    </HeaderStyled>
  );
}

export default Header;
