import styled from "styled-components";
import Logo from "components/navbar/Logo";
import Menu from "components/navbar/Menu";

function Navbar() {
  return <NavbarWrapper>
    <Logo />
    <Menu />
  </NavbarWrapper>
}
export default Navbar;

const NavbarWrapper = styled.nav`
`