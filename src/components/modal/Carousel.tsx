import Arrow from "components/icons/Arrow";
import useCarousel from "hooks/useCarousel";
import styled from "styled-components";
import devices from "styles/device";
import { type PreviewType } from "./Left";

interface Props {
  images: string[];
  preview: string;
  setPreview: PreviewType;
}

function Carousel({images, preview, setPreview}: Props) {
  const { handleSlide } = useCarousel({length: images.length});
  return <Wrapper>
    <Arrow direction='left' handler={handleSlide}/>
    <Slide id='slide'>
      <ImageArray id='image-array'>
        {images.map((item) => (
          <Item className='carousel-thumbnail' image={item} {...{preview}} onMouseDown={() => setPreview(item)}></Item>
        ))}
        {images.length < 5 ? Array.from({length: 5 - images.length}).map(() => <Item image='' preview='#' />) : null}
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
  gap: 5px;
`
const Slide = styled.div.attrs({className: 'slide'})`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 90px;
`
const ImageArray = styled.div`
  height: 100%;
  position: absolute;
  display: flex;
  gap: 10px;
  left: 0px;
  transition: all .3s ease;
`
const Item = styled.div<{image: string, preview: string}>`
  background-image: url(${props => props.image});
  background-color: #00000039;
  background-size: cover;
  border-radius: 5px;
  width: 90px;
  height: 90px;
  cursor: ${props => props.image === '' ? 'default' : 'pointer'};
  opacity: ${props => props.image === props.preview ? .5 : 1};
  &:hover {
    opacity: .5;
  }
`