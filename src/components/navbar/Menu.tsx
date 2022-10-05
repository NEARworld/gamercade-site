import HamburgerIcon from "components/icons/hamburger";
import styled from "styled-components";
import devices from "styles/device";

const menuList = ["Learn", "Community"]

function Menu() {
  return <MenuWrapper>
    <MenuList>
      {menuList.map((item) => (
        <MenuItem>{item}</MenuItem>
      ))}
    </MenuList>
    <HamburgerWrapper>
      <HamburgerIcon />
    </HamburgerWrapper>
  </MenuWrapper>
}

export default Menu;
const MenuWrapper = styled.div`
  @media ${devices.tablet} {
    margin-right: 20px;
  }
`
const MenuList = styled.ul`
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.tablet}{
    display: flex;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
const MenuItem = styled.li`
`
const HamburgerWrapper = styled.button`
  @media ${devices.mobileS} {
    display: inherit;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: 0;
    outline: 0;
    max-height: auto;
    & > svg:hover {
      cursor: pointer;

      & > path {
        fill: #a8a8a8;
      }
    }
  }
  @media ${devices.tablet}{
    display: none;
  }
`