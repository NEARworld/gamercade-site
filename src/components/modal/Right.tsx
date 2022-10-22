import { getLabel } from "components/Label";
import { type ICard } from "mocks/cards";
import styled from "styled-components";
import { devices } from "styles/global";

interface Props {
  card: ICard<string>;
}
function Right({ card }: Props) {
  const cardKeys = Object.keys(card);
  const validKeys = [
    "developers",
    "release",
    "description",
    "multiplayer",
    "singleplayer",
    "languages",
    "website",
    "tags",
    "download",
  ];
  function filterContent(key: string) {
    if (!validKeys.includes(key)) return;
    if (key === "developers" || key === "languages")
      return (
        <Row>
          <Item>{key}</Item>
          <Detail>{card[key].join(", ")}</Detail>
        </Row>
      );
    if (key === "tags")
      return (
        <Row>
          <Item>{key}</Item>
          <Detail>{card[key].map((label) => getLabel(label))}</Detail>
        </Row>
      );
    return (
      <Row>
        <Item>{key}</Item>
        <Detail>{card[key]}</Detail>
      </Row>
    );
  }
  // function handleArray(key: string) {
  //   if (key === "developers" || key === "languages") {
  //     return card[key].join(", ");
  //   }
  // }
  // function handleLabel(key: string) {
  //   if (key === "tags") return card[key].map((label) => getLabel(label));
  // }

  // function pipe(...fns: Function[]) {
  //   return function pipled(data: string) {
  //     for (let fn of fns) {
  //       data = fn(data);
  //     }
  //     console.log(data);
  //     return <Detail>{data}</Detail>;
  //   };
  // }
  return (
    <Wrapper>
      <Title>{card.name}</Title>
      <ContentContainer>
        <Row>
          <Avatar avatar={card.avatar} />
          <AuthorWrapper>
            <Name>{card.author}</Name>
            <PublishDate>{card.date}</PublishDate>
          </AuthorWrapper>
        </Row>
        {cardKeys.map((key) => filterContent(key))}
      </ContentContainer>
    </Wrapper>
  );
}
export default Right;

const Wrapper = styled.div`
  @media ${devices.mobileS} {
    display: none;
  }
  @media ${devices.laptop} {
    display: block;
  }
`;
const Title = styled.h4`
  margin-top: 0;
`;
const ContentContainer = styled.div``;
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  &:nth-child(1) {
    align-items: center;
  }
  align-items: top;
  margin-bottom: 10px;
`;
const Item = styled.p`
  margin: 0;
  text-align: left;
  font-weight: bold;
`;
const Detail = styled.div`
  display: flex;
  gap: 5px;
  text-align: left;
  max-width: 350px;
  line-break: anywhere;
`;
const Avatar = styled.div<{ avatar: string }>`
  display: inline-block;
  width: 50px;
  aspect-ratio: 1;
  background-image: url(${(props) => props.avatar});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;
const AuthorWrapper = styled.div`
  text-align: left;
  color: #4c85a5;
`;
const Name = styled.p``;
const PublishDate = styled.p``;
