import styled from "styled-components"
import Carousel from "./Carousel";

interface Props {
  images: {main: string, sub: string[]}
}

function Left({images}: Props) {
  return <Wrapper>
    <Main>
      <Image main={images.main} />
    </Main>
    <Sub>
      <Carousel sub={images.sub} />
    </Sub>
  </Wrapper>
}
export default Left;

const Wrapper = styled.div`
`
const Main = styled.div`
  width: 95%;
  height: 70%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #1E1E1E;
`
const Image = styled.div<{main: string}>`
  min-width: 500px;
  min-height: 500px;
  background-image: url(${props => props.main});
  background-position: bottom;
  background-size: cover;
`
const Sub = styled.div`
  height: 30%;
`