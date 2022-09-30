import styled, { css } from "styled-components";
import Logo from "components/navbar/Logo";
import Menu from "components/navbar/Menu";
import type { ThemeProps } from "styles/types";

function Navbar() {
  return <NavbarWrapper>
    <Navigation>
      <Logo />
      <Input placeholder='search games...' />
      <Menu />
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
`;
const Input = styled.input`
  position: absolute;
  transform: translateX(50%);
  margin: auto;
  padding: 10px;
  width: 50%;
  font-size: 15px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.dark.border.primary};
  outline: none;
  color: ${props => props.theme.dark.text.secondary};
`