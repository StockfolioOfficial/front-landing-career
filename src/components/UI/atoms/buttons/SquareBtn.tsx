import React from "react";
import styled, { css } from "styled-components";

import { SquareBtnProps } from "../../../../models/commonInterfaces";

const Button = styled.button`
  width: ${({ btnWidth }: SquareBtnProps) => `${btnWidth}px`};
  color: ${({ fontColor }: SquareBtnProps) => fontColor};
  font-size: ${({ fontSize }: SquareBtnProps) => `${fontSize}px`};
  font-weight: ${({ fontWeight }: SquareBtnProps) => fontWeight};
  ${({ isFilled }: SquareBtnProps) =>
    (isFilled &&
      css`
        background: ${({ btnColor }: SquareBtnProps) => btnColor};
      `) ||
    (!isFilled &&
      css`
        border: ${({ btnColor }: SquareBtnProps) => `1px solid ${btnColor}`};
      `)}
`;

function SquareBtn({
  children,
  isFilled,
  btnWidth,
  btnColor,
  fontSize,
  fontColor,
  fontWeight,
  className,
}: SquareBtnProps): JSX.Element {
  return (
    <Button
      type="button"
      isFilled={isFilled}
      btnWidth={btnWidth}
      btnColor={btnColor}
      fontSize={fontSize}
      fontColor={fontColor}
      fontWeight={fontWeight}
      className={className}
    >
      {children}
    </Button>
  );
}

export default SquareBtn;
