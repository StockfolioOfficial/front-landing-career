import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";

import RootStore from "../../../stores/RootStore";
import { IBasicInfoAttrs } from "../../../models/ApplicationInterfaces";

import Desc from "../atoms/texts/Desc";
import Heading2 from "../atoms/texts/Heading2";
import applicationForm from "../../../assets/data/applicationForm";
import ApplicationInput from "../atoms/inputs/ApplicationInput";

const { ApplicationActions, ApplicationStore } = RootStore();

const Box = styled.section`
  position: relative;
  margin-top: 60px;
`;

const Required = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;

  i {
    color: ${theme.color.red};
  }
`;

const HeaderBox = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Asterisk = styled.i`
  margin-left: 5px;
  color: ${theme.color.red};
  font-weight: 700;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ApplicationBasicInfo = observer((): JSX.Element => {
  return (
    <Box>
      <Required>
        <i>*</i>는 필수입력사항입니다.
      </Required>
      <HeaderBox>
        <Heading2 fontSize={18} fontWeight={700}>
          {applicationForm.basicInfo.title}
        </Heading2>
        <Asterisk>*</Asterisk>
      </HeaderBox>
      <Desc fontSize={14} fontColor={theme.color.descMedium}>
        {applicationForm.basicInfo.desc}
      </Desc>
      <InputBox>
        {applicationForm.basicInfo.item.map(item => {
          return (
            <ApplicationInput
              key={item.name}
              item={item}
              value={
                ApplicationStore.basicInfo[
                  item.name as keyof IBasicInfoAttrs
                ] || ""
              }
              onChange={e =>
                ApplicationActions.setInput(
                  "basicInfo",
                  item.name as keyof IBasicInfoAttrs,
                  e.target.value
                )
              }
            />
          );
        })}
      </InputBox>
    </Box>
  );
});

export default ApplicationBasicInfo;
