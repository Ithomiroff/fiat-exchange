import styled from "styled-components";
import { CommonButton } from "../../../GlobalStyled";

const HeaderStyled = styled.header`
  --gradient: linear-gradient(153.42deg, rgba(27, 143, 255, 0) 0%, rgba(27, 143, 255, 0.842105) 42.71%, rgba(27, 143, 255, 0) 100%),
  linear-gradient(0deg, rgba(10, 10, 10, 0.13), rgba(10, 10, 10, 0.13));

  position: relative; 
  height: 100px;
  width: var(--container-width);
  transition: opacity .6s ease-in;
  opacity: ${({ hidden }) => hidden ? 0 : 1};
  
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--gradient);
    clip-path: polygon(0 30.00px,30.00px 0,100% 0,100% calc(100% - 30.00px),calc(100% - 30.00px) 100%,0 100%,0 30.00px,4px  calc(30.00px + 1.66px),4px calc(100% - 4px),calc(100% - 30.00px - 1.66px) calc(100% - 4px),calc(100% - 4px) calc(100% - 30.00px - 1.66px),calc(100% - 4px) 4px,calc(30.00px + 1.66px) 4px,4px calc(30.00px + 1.66px));
  }


  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    height: 80px;
  }
`;

const HeaderInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 0;
  }
`;

const ButtonContainer = styled.div`
  padding: 10px 0;
  margin: 0 0 0 auto;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const SupportButton = styled(CommonButton)`
  color: var(--accent-color);
  width: 320px;
  height: 100%;
  font-size: 24px;
  margin: 0 10px 0 0;

  &:before {
    overflow: hidden;
    content: "";
    position: absolute;
    inset: 0;
    background: var(--accent-color);
    clip-path: polygon(0 20.00px,20.00px 0,100% 0,100% calc(100% - 20.00px),calc(100% - 20.00px) 100%,0 100%,0 20.00px,4px  calc(20.00px + 1.66px),4px calc(100% - 4px),calc(100% - 20.00px - 1.66px) calc(100% - 4px),calc(100% - 4px) calc(100% - 20.00px - 1.66px),calc(100% - 4px) 4px,calc(20.00px + 1.66px) 4px,4px calc(20.00px + 1.66px));
  }
  
  &:hover {
    color: var(--text-color);
    background: var(--accent-color);
    clip-path: polygon(0 20.00px,20.00px 0,100% 0,100% calc(100% - 20.00px),calc(100% - 20.00px) 100%,0 100%);
  }
`;


export { HeaderInner, SupportButton, ButtonContainer };
export default HeaderStyled;

