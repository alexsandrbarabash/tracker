import styled from "styled-components";
import { ActivityStyleProps } from "../common/model";

export const Wrapper = styled.div<ActivityStyleProps>`
  ${(props) =>
    props.index === 0
      ? `margin-top: 30px; border-top:2px solid #e5e5e5;`
      : null}

  ${(props) => (props.active ? `background-color: #fdfdf6;` : null)}

  border-bottom: 2px solid #e5e5e5;
  margin-left: 5px;
  margin-right: 5px;

  padding-top: 15px;
  padding-bottom: 15px;

  font-weight: 700;

  color: ${(props) => (props.active ? `#3faf6c` : `#5a5a5a`)};
`;
