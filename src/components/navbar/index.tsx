import styled, { css } from "styled-components";
import Logo from "components/navbar/Logo";
import Menu from "components/navbar/Menu";
import type { ThemeProps } from "styles/types";

function Navbar() {
  return <NavbarWrapper>
    <Navigation>
      <Logo />
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
  width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`; 