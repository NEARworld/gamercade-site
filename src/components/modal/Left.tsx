import { useState } from "react";
import styled from "styled-components"
import devices from "styles/device";
import Carousel from "./Carousel";

interface Props {
  images: string[];
}

export type PreviewType = React.Dispatch<React.SetStateAction<string>>;


function Left({images}: Props) {
  const [preview, setPreview] = useState(images[0]);
  return <Wrapper>
    <Main>
      <Image {...{preview}} />
    </Main>
    <Sub>
      <Carousel {...{images, preview, setPreview}} />
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
const Image = styled.div<{preview: string}>`
  background-image: url(${props => props.preview});
  background-position: bottom;
  background-size: cover;
  @media ${devices.mobileS} {
    min-width: 300px;
    min-height: 300px;
  }
  @media ${devices.tablet} {
    min-width: 400px;
    min-height: 400px;
  }
  @media ${devices.laptopL} {
    min-width: 500px;
    min-height: 500px;
  }
`
const Sub = styled.div`
  height: 30%;
`