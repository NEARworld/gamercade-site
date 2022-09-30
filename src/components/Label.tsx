import styled from "styled-components";

interface StyledProps<T> {
  bg: T;
  stroke: T;
}

interface Props<T> extends StyledProps<string> {
  text?: T;
};

function Label({ bg, stroke, text }: Props<string>) {
  return <StyledLabel bg={bg} stroke={stroke}>
    {text}
  </StyledLabel>
}

export default Label;
const StyledLabel = styled.div<StyledProps<string>>`
  background-color: ${props => props.bg};
  border: 1px solid ${props => props.stroke};
  padding: 5px 10px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`