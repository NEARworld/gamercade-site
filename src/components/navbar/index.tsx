import styled, { css } from "styled-components";
import Logo from "components/navbar/Logo";
import Menu from "components/navbar/Menu";
import type { ThemeProps } from "styles/types";
import devices from "styles/device";

interface Props {
  setIsSideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({setIsSideOpen}: Props) {
  return <NavbarWrapper>
    <Navigation>
      <Logo />
      <Input placeholder='search games...' />
      <Menu setIsSideOpen={setIsSideOpen} />
    </Navigation>
  </NavbarWrapper>
}
export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  padding: 10px;
  ${(props: ThemeProps) => {
    switch (props.theme.mode) {
      case 'dark':
        return css`
          background-color: ${props.theme.dark.bg.primary};
          color: ${props.theme.dark.text.primary};
        `
      case 'light':
        return css`
          background-color: ${props.theme.light.bg.primary};
        `
    }
  }}
`;
const Navigation = styled.nav`
  position: relative;
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devices.mobileS} {
    gap: 20px;
  }
  @media ${devices.tablet} {
    gap: 0;
  }
`;
const Input = styled.input`
  padding: 10px;
  font-size: 15px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.dark.border.primary};
  outline: none;
  color: ${props => props.theme.dark.text.secondary};

  @media ${devices.mobileS} {
    flex-grow: 1;
  }
  @media ${devices.mobileL} {
    flex-grow: inherit;
    width: 80%;
  }

  @media ${devices.tablet} {
    position: absolute;
    transform: translateX(50%);
    margin: auto;
    width: 50%;
  }
`