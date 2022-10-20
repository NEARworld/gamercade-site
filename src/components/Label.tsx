import { labels } from "mocks/labels";
import styled from "styled-components";

interface Props<T> {
  data: { 
    bg: T,
    stroke: T, 
    text?: T
  };
export function getLabel(label: string | undefined) {
  const data = labels.filter((item) => item.text === label)[0];
  return <Label key={data.id} data={data} />;
}

function Label({ data }: Props<string>) {
  return <StyledLabel data={data}>
    {data.text}
  </StyledLabel>
}

export default Label;
const StyledLabel = styled.div<Props<string>>`
  background-color: ${props => props.data.bg};
  border: 1px solid ${props => props.data.stroke};
  padding: 5px 10px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`