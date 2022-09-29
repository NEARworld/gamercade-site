import styled from "styled-components";

const menuList = ["What is Gamercade?", "FAQ", "Downloads", "Learn", "Community", "Blog"]

function Menu() {
  return <MenuWrapper>
    <MenuList>
      {menuList.map((item) => (
        <MenuItem>{item}</MenuItem>
      ))}
    </MenuList>
  </MenuWrapper>
}

export default Menu;
const MenuWrapper = styled.div`
  margin-right: 20px;
`
const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  margin: 0;
  padding: 0;
`
const MenuItem = styled.li`
`