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
`
const MenuList = styled.ul`
`
const MenuItem = styled.li`
`