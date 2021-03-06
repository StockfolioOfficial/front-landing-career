import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";

import applicationForm from "../../../assets/data/applicationForm";
import ApplicationInput from "../atoms/inputs/ApplicationInput";
import {
  ApplicationActions,
  ApplicationListStore,
} from "../../../stores/ApplicationStore";
import {
  IApplicationForm,
  ICareerAttrs,
} from "../../../models/ApplicationInterfaces";
import RootStore from "../../../stores/RootStore";

import AddListBtn from "../atoms/buttons/AddListBtn";
import CheckBox from "../atoms/inputs/CheckBox";
import Desc from "../atoms/texts/Desc";
import Heading2 from "../atoms/texts/Heading2";

const { CheckboxActions, CheckboxStore, ApplicationStore } = RootStore();

const Box = styled.section`
  position: relative;
  margin-top: 60px;
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

const ApplicationCareer = observer((): JSX.Element => {
  const [listUnit, setListUnit] = useState([applicationForm.career.item]);

  const handleAddList = () => {
    ApplicationActions.setAddList("career");
    setListUnit(prev => [...prev, applicationForm.career.item]);
  };

  return (
    <Box>
      <CheckBox
        onChange={() => CheckboxActions.setIsChecked("career")}
        checked={CheckboxStore.isChecked.career}
        title={applicationForm.career.title}
      />
      <HeaderBox>
        <Heading2 fontSize={18} fontWeight={700}>
          {applicationForm.career.title}
        </Heading2>
        {applicationForm.career.isRequired && <Asterisk>*</Asterisk>}
      </HeaderBox>
      <Desc fontSize={14} fontColor={theme.color.descMedium}>
        {applicationForm.career.desc}
      </Desc>
      <InputBox>
        {listUnit.map((chunk, chunkIdx) => {
          return chunk.map((item, itemIdx) => (
            <ApplicationInput
              key={`${chunk}${chunkIdx - itemIdx}`}
              item={item}
              value={
                ApplicationListStore.career[chunkIdx][
                  item.name as keyof ICareerAttrs
                ] || ""
              }
              onChange={e =>
                ApplicationActions.setCareerListInput(
                  chunkIdx,
                  item.name as keyof ICareerAttrs,
                  e.target.value
                )
              }
            />
          ));
        })}
      </InputBox>
      <AddListBtn onClick={handleAddList}>
        {applicationForm.career.title}
      </AddListBtn>
    </Box>
  );
});

export default ApplicationCareer;
