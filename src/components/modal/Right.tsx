import styled from "styled-components"

interface Props {
  name: string;
}

function Right({name}: Props) {
  return <Wrapper>
    <Title>{name}</Title>
  </Wrapper>
}
export default Right;

const Wrapper = styled.div`
`
const Title = styled.h4`
`