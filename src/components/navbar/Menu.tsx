import HamburgerIcon from "components/icons/Hamburger";
import styled from "styled-components";
import { devices } from "styles/global";

export const menuList = [
  { id: 1, name: "Learn" },
  { id: 2, name: "Community" },
];

interface Props {
  setIsSideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ setIsSideOpen }: Props) {
  return (
    <MenuWrapper>
      <MenuList>
        {menuList.map((item) => (
          <MenuItem key={item.id}>{item.name}</MenuItem>
        ))}
      </MenuList>
      <HamburgerWrapper onClick={() => setIsSideOpen(true)}>
        <HamburgerIcon />
      </HamburgerWrapper>
    </MenuWrapper>
  );
}

export default Menu;
const MenuWrapper = styled.div`
  @media ${devices.mobileS} {
    position: relative;
  }
  @media ${devices.tablet} {
    margin-right: 20px;
    position: static;
  }
`;
const MenuList = styled.ul`
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.tablet} {
    display: flex;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
const MenuItem = styled.li``;
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
  @media ${devices.tablet} {
    display: none;
  }
`;
