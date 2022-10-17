import styled from "styled-components";
import { devices } from "styles/global";

function Logo() {
  return <LogoWrapper>
    <LogoImage src="https://gamercade.io/img/logo-trans.png" />
    <LogoTitle>Gamercade</LogoTitle>
  </LogoWrapper>
}
export default Logo;

const LogoWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const LogoImage = styled.img`
  width: 31px;
`
const LogoTitle = styled.h1`
  margin: 0;
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.tablet} {
    display: block;
  }
`