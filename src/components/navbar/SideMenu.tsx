import CloseIcon from "components/icons/CloseIcon";
import styled from "styled-components";
import { devices } from "styles/global";
import { menuList } from "./Menu";

interface Props {
  isSideOpen: boolean;
  setIsSideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SideMenu({ isSideOpen, setIsSideOpen }: Props) {
  return (
    <Wrapper isSideOpen={isSideOpen}>
      <CloseIconWrapper>
        <CloseIconButton onClick={() => setIsSideOpen(false)}>
          <CloseIcon />
        </CloseIconButton>
      </CloseIconWrapper>
      <MenuList>
        {menuList.map((item) => (
          <MenuItem key={item.id}>{item.name}</MenuItem>
        ))}
      </MenuList>
    </Wrapper>
  );
}
export default SideMenu;
const Wrapper = styled.div<{ isSideOpen: boolean }>`
  z-index: 1;
  height: 100%;
  padding: 10px 0 20px 0;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.dark.bg.primary};
  border-left: 1px solid #4d4d4d;
  @media ${devices.mobileS} {
    display: ${(props) => (props.isSideOpen ? "flex" : "none")};
    flex-direction: column;
  }
  @media ${devices.tablet} {
    display: none;
  }
`;
const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: right;
`;
const CloseIconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0;
  padding: 0 10px;
  &:hover {
    cursor: pointer;
    & > svg > path {
      stroke: ${(props) => props.theme.dark.text.secondary};
    }
  }
  & > svg > path {
    stroke: ${(props) => props.theme.dark.text.primary};
  }
`;
const MenuList = styled.ul`
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const MenuItem = styled.li`
  padding: 20px 60px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.dark.bg.secondary};
  }
`;
