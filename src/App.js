import {
  EarthLeft,
  EarthMobile,
  EarthRight,
  MainContent,
  RootStyled
} from "./GlobalStyled";
import Header from "./components/Header";
import Earth from './assets/images/earth.png';
import Earth2 from './assets/images/earth2.png';
import EarthCenter from './assets/images/earth-mobile.png';
import { useRoutes } from 'react-router-dom';
import ROUTES from "./routes";


const App = () => {
  const routes = useRoutes(ROUTES);

  return (
    <RootStyled>
      <Header/>
      <EarthLeft>
        <img src={Earth} alt=""/>
      </EarthLeft>
      <EarthRight>
        <img src={Earth2} alt=""/>
      </EarthRight>
      <EarthMobile>
        <img src={EarthCenter} alt=""/>
      </EarthMobile>
      <MainContent>
        {routes}
      </MainContent>
    </RootStyled>
  );
}

export default App;
