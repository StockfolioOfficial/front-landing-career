import React from "react";
import styled from "styled-components";

import ViewportBox from "../../styles/ViewportBox";
import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
import Heading3 from "../UI/atoms/texts/Heading3";
import MissionHeader from "../UI/molecules/MissionHeader";
import MissionContents from "../UI/molecules/MissionContents";

const Divider = styled.div`
  ${({ theme }) => theme.flexMixin("space-between", "start")};
`;

const Box = styled.div`
  width: 20%;
  padding-top: 25px;
  border-top: 1px solid black;
`;

function Mission(): JSX.Element {
  return (
    <ViewportBox>
      <Inner size="wide">
        <Heading2>우리의 Mission</Heading2>
        <MissionHeader />
        <Divider>
          <Box>
            <Heading3>스톡폴리오</Heading3>
          </Box>
          <MissionContents />
        </Divider>
      </Inner>
    </ViewportBox>
  );
}

export default Mission;