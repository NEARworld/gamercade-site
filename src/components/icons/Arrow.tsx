import Styled from "components/styles/Index.styled";

export interface IDirection {
  direction: "left" | "right";
}
interface Props extends IDirection {
  handler: (direction: "right" | "left") => void;
}

function Arrow({ direction, handler }: Props) {
  return (
    <Styled.Arrow.Wrapper
      direction={direction}
      onMouseDown={() => handler(direction)}
    >
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0.943376V13.0566C8 13.8954 6.97817 14.3155 6.38057 13.7224L0.277835 7.66573C-0.0926115 7.29808 -0.0926115 6.70194 0.277835 6.33429L6.38057 0.277656C6.97817 -0.315477 8 0.104612 8 0.943376Z"
          fill="#B5B5B5"
        />
      </svg>
    </Styled.Arrow.Wrapper>
  );
}
export default Arrow;
