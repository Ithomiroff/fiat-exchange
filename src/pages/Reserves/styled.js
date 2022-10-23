import styled from "styled-components";

const ContainerReserves = styled.article`
  padding: 70px 0 0 0;
  width: 620px;
  display: flex;
  flex-direction: column;
  grid-gap: 24px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: var(--container-width);
    padding: 100px 0 0 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: var(--container-width);
    padding: 50px 0 0 0;
  }
`;

const BorderedContent = styled.ul`
  --gradient: linear-gradient(351.15deg, rgba(27, 143, 255, 0) 29.45%, #1B8FFF 38.83%, #1B8FFF 59.16%, rgba(27, 143, 255, 0) 83.59%),
  linear-gradient(51.06deg, rgba(27, 143, 255, 0) 32.69%, #1B8FFF 41.04%, #1B8FFF 73.09%, rgba(27, 143, 255, 0) 80.87%),
  linear-gradient(0deg, rgba(81, 81, 81, 0.2), rgba(81, 81, 81, 0.2));
  
  padding: 0;
  margin: 0;
  
  width: 100%;
  
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--gradient);
    clip-path: polygon(0 20.00px,20.00px 0,100% 0,100% calc(100% - 20.00px),calc(100% - 20.00px) 100%,0 100%,0 20.00px,4px  calc(20.00px + 1.66px),4px calc(100% - 4px),calc(100% - 20.00px - 1.66px) calc(100% - 4px),calc(100% - 4px) calc(100% - 20.00px - 1.66px),calc(100% - 4px) 4px,calc(20.00px + 1.66px) 4px,4px calc(20.00px + 1.66px));
  }
  
  li {
    display: flex;
    align-items: center;
    grid-gap: 48px;
    padding: 0 26px;
    height: 100px;
    position: relative;
    
    img {
      width: 110px;
    }
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      width: 100%;
      background: linear-gradient(90deg, rgba(27, 143, 255, 0) 0%, #1B8FFF 44.79%, rgba(27, 143, 255, 0) 100%);
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
`;

const BankPrice = styled.span`
  display: flex;
  flex-direction: column;
  span {
    &:first-child {
      font-size: 24px;
      @media (max-width: ${props => props.theme.breakpoints.sm}) {
        font-size: 18px;
      }
    }
    &:last-child {
      font-weight: 400;
    }
  }
`;

export {
  ContainerReserves,
  BorderedContent,
  BankPrice
};
