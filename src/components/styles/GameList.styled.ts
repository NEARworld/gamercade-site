import styled from "styled-components";
import { devices } from 'styles/global';

export const CardObj = {
  Wrapper: styled.div`
  position: relative;
  background-color: #10151c;
  width: 290px;
  height: 400px;
  margin: auto;
  box-shadow: 1px 4px 10px -1px rgba(0, 0, 0, 0.71);
  &:hover {
    cursor: pointer;
    border: 1px solid orange;
  }
  &:hover > .card__footer {
    animation-name: bounce;
    animation-duration: 0.5s;
    bottom: 5px;
    @keyframes bounce {
      from {
        bottom: 0;
      }
      to {
        bottom: 5px;
      }
    }
  }
`,
  Image: styled.div<{ main: string }>`
  position: relative;
  background-image: url(${(props) => props.main});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    background: linear-gradient(#ffffff0f, #000000f2);
    width: 100%;
    height: 100%;
  }
`,
  Footer: styled.div.attrs({ className: "card__footer" })`
  position: absolute;
  bottom: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  translate: bottom 0.4s ease;
`,
  Title: styled.h3``,
  LabelWrapper: styled.div`
  display: flex;
  gap: 5px;
`
}
export const GameList = {
  Wrapper: styled.div`
  display: grid;
  gap: 10px;
  margin-top: 50px;
  @media ${devices.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${devices.laptopL} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1855px) {
    grid-template-columns: repeat(6, 1fr);
  }
`
}