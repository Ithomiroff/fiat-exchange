import { SubTitle } from "../../GlobalStyled";
import {
  BankPrice,
  BorderedContent,
  ContainerReserves
} from "./styled";

import Alfa from '../../assets/images/banks/alfa.png';
import Sber from '../../assets/images/banks/sber.png';
import Tinkoff from '../../assets/images/banks/tinkoff.png';
import Visa from '../../assets/images/banks/visa.png';

const ITEMS = [
  {
    icon: Alfa,
    price: '47 931 646',
    label: 'Альфа-Банк',
  },
  {
    icon: Tinkoff,
    price: '47 931 646',
    label: 'Тинькофф банк',
  },
  {
    icon: Sber,
    price: '47 931 646',
    label: 'Сбербанк',
  },
  {
    icon: Visa,
    price: '47 931 646',
    label: 'Visa/Mastercard',
  }
]

const Reserves = () => {

  return (
    <ContainerReserves>
      <SubTitle>Резервы валют</SubTitle>
      <BorderedContent>
        {ITEMS.map((item) => (
          <li key={item.label}>
            <img src={item.icon} alt=""/>
            <BankPrice>
              <span>{item.price} RUB</span>
              <span>{item.label}</span>
            </BankPrice>
          </li>
        ))}
      </BorderedContent>
    </ContainerReserves>
  )
};

export default Reserves;
