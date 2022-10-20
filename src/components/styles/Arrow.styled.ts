import { type IDirection } from "components/icons/Arrow";
import styled from "styled-components";

export const Arrow = {
  Wrapper: styled.div<IDirection>`
  cursor: pointer;
  transform: ${props => props.direction === 'right' ? "rotate(180deg)" : 'none'};
  &:hover {
    & > svg > path {
      fill: #fafafa;
    }
  }
`}