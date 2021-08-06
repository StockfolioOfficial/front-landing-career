import React from "react";
import styled from "styled-components";

import { ChildrenPropsType } from "../ChildrenPropsType";

interface Props {
  fontColor: string;
  fontSize: string;
  fontWeight: string;
}

const Text = styled.p.attrs((props: Props) => ({
  fontColor: props.fontColor,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
}))`
  color: ${({ fontColor }: Props) => `${fontColor}`};
  font-size: ${({ fontSize }: Props) => `${fontSize}px`};
  font-weight: ${({ fontWeight }: Props) => `${fontWeight}`};
`;

function Desc({ children }: ChildrenPropsType): JSX.Element {
  return <Text>{children}</Text>;
}

export default Desc;
