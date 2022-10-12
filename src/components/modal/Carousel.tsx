import Arrow from "components/icons/Arrow";
import useCarousel from "hooks/useCarousel";
import styled from "styled-components";

interface Props {
  sub: string[];
}

function Carousel({sub}: Props) {
  const { handleSlide } = useCarousel({length: sub.length});
  return <Wrapper>
    <Arrow direction='left' handler={handleSlide}/>
    <Slide>
      <ImageArray id='image-array'>
        {sub.map((item) => (
          <Item image={item}></Item>
        ))}
      </ImageArray>
    </Slide>
    <Arrow direction='right' handler={handleSlide} />
  </Wrapper>
}
export default Carousel;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Slide = styled.div.attrs({className: 'slide'})`
  position: relative;
  overflow: hidden;
  height: 90px;
  width: 470px;
`
const ImageArray = styled.div`
  width: 470px;
  height: 90px;
  position: absolute;
  display: flex;
  gap: 10px;
  left: 0px;
  transition: all .3s ease;
`
const Item = styled.div<{image: string}>`
  background-image: url(${props => props.image});
  background-color: black;
  background-size: cover;
  width: 90px;
  aspect-ratio: 1;
  border-radius: 5px;
`