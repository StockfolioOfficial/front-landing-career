import React from "react";
import styled from "styled-components";

import { observer } from "mobx-react";
import Heading4 from "../texts/Heading4";
import theme from "../../../../styles/theme";
import { IAccountItem } from "../../../../models/AdminAccountInterface";

const InputWrap = styled.div`
  margin-top: 60px;
  margin-left: 10px;
`;

const InputForm = styled.input`
  background-color: ${theme.color.greyLight1};
  padding: 20px 0 20px 20px;
  border-radius: 8px;
  width: ${props => props.width}px;
`;

interface IAddAccount {
  item: IAccountItem;
}

const AdminInput = observer(
  ({
    item,
    onChange,
  }: React.InputHTMLAttributes<HTMLInputElement> &
    IAddAccount): JSX.Element => {
    return (
      <InputWrap>
        <Heading4 fontWeight={500} fontSize={14}>
          {item.name}
        </Heading4>
        <InputForm
          name={item.title}
          placeholder={item.placeholder}
          width={item.itemWidth}
          onChange={onChange}
        />
      </InputWrap>
    );
  }
);

export default AdminInput;
