import { type ICard } from "mocks/cards";
import styled from "styled-components"
import devices from "styles/device";

interface Props {
  card: ICard<string>;
}

function Right({card}: Props) {
  return <Wrapper>
    <Title>{card.name}</Title>
    <ContentContainer>
      <Row>
        <Avatar avatar={card.avatar}/>
        <AuthorWrapper>
          <Name>{card.author}</Name>
          <PublishDate>{card.date}</PublishDate>
        </AuthorWrapper>
      </Row>
      {Object.keys(card).map((item) => {
        if (item === 'id' || 
            item === 'name'  || 
            item === 'author' || 
            item === 'date' || 
            item === 'images'  || 
            item === 'avatar') return;
          return (<Row>
          <Item>{item}</Item>
          <Detail>{card[item]}</Detail>
        </Row>)
      })}
    </ContentContainer>
  </Wrapper>
}
export default Right;

const Wrapper = styled.div`
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.laptop} {
    display: block;
  }
`
const Title = styled.h4`
  margin-top: 0;
`
const ContentContainer = styled.div`
`
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  &:nth-child(1) {
    align-items: center;
  }
  align-items: top;
  margin-bottom: 10px;
`
const Item = styled.p`
  margin: 0;
  text-align: left;
  font-weight: bold;
`
const Detail = styled.div`
  text-align: left;
  max-width: 350px;
  line-break: anywhere;
`
const Avatar = styled.div<{avatar: string}>`
  display: inline-block;
  width: 50px;
  aspect-ratio: 1;
  background-image: url(${props => props.avatar});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`
const AuthorWrapper = styled.div`
  text-align: left;
  color: #4C85A5;
`
const Name = styled.p`
`
const PublishDate = styled.p`
`