import React from "react";
import styled from "styled-components";

import Heading2 from "../atoms/texts/Heading2";
import Desc from "../atoms/texts/Desc";
import theme from "../../../styles/theme";

const OverViewBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 60px 0;
  height: 230px;
  width: 610px;
`;

function OverViewCard(): JSX.Element {
  return (
    <OverViewBox>
      <Heading2 fontWeight={700}>스폴러 소개 & 인터뷰</Heading2>
      <Desc
        fontColor={theme.color.desc}
        fontSize={16}
        fontWeight={400}
        lineHeight={1.5}
      >
        스폴러들은 넘치는 개성의 소유자에요. 물리학을 전공한 CEO부터 스페인어에
        능통한 마케터까지! 이러한 개성이 모여 스폴만의 톡톡 튀는 사내문화가
        형성되었죠. 매력쟁이 스폴러들을 만나보세요.
      </Desc>
    </OverViewBox>
  );
}

export default OverViewCard;