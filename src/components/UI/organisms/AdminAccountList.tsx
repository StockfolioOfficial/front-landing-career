import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import theme from "../../../styles/theme";

import { IAccountInfo } from "../../../models/AdminAccountInterface";
import { AccountAdmin } from "../../../config";
import requestHeaders from "../../../utils/getToken";

const AccountBtn = styled.button`
  padding: 10px;
  margin: 0 5px;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
`;

const AccountContentName = styled.input`
  display: inline;
  background-color: white;
  font-size: 15px;
  font-weight: bold;
`;

const AccountContent = styled.input`
  display: inline;
  background-color: white;
  font-size: 10px;
  font-weight: 400;
`;

const AccountWrap = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px auto;
  align-items: center;
  margin-top: 10px;
  padding: 9px 0 9px 30px;
  width: 100%;
  border-radius: 10px;

  &:hover {
    background-color: ${theme.color.greyLight1};

    ${AccountBtn} {
      background-color: ${theme.color.mainDeep};
      color: white;
    }

    ${AccountContentName} {
      background-color: ${theme.color.greyLight1};
    }

    ${AccountContent} {
      background-color: ${theme.color.greyLight1};
    }
  }
`;

const ButtonWrap = styled.div`
  float: right;
`;

interface IAddList {
  list: IAccountInfo;
}

const AdminAccountList = observer(({ list }: IAddList): JSX.Element => {
  const [textCheck, setTextCheck] = useState({ ...list });

  const { id, username, email, password } = textCheck;

  const changeText = (e: any) => {
    const { name, value } = e.target;
    setTextCheck({ ...textCheck, [name]: value });
  };

  const [handleEditButton, setHandleEditButton] = useState(true);
  const editAccount = () => {
    if (handleEditButton) {
      textCheck.password = " ";
      setHandleEditButton(!handleEditButton);
    } else {
      fetch(`${AccountAdmin}/${list.id}`, {
        method: "PATCH",
        headers: requestHeaders,
        body: JSON.stringify({
          newname: textCheck.username,
          newemail: textCheck.email,
          newpassword: textCheck.password?.slice(1, textCheck.password?.length),
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === "SUCCESS") {
            alert("????????? ??????????????????.");
          } else {
            alert(
              "????????? ????????? ????????? (???????????? : ??????, ??????, ???????????? ?????? 8?????? ??????)"
            );
          }
        });
      setHandleEditButton(!handleEditButton);
    }
  };

  const deleteAccount = () => {
    fetch(`${AccountAdmin}/${list.id}`, {
      method: "DELETE",
      headers: requestHeaders,
    })
      .then(res => res.json())
      .then(data => {
        console.log("messege", data);
      });
  };

  return (
    <AccountWrap key={list.id} onChange={changeText}>
      <AccountContentName
        type="text"
        name="username"
        value={textCheck.username === "" ? list.username : textCheck.username}
        disabled={handleEditButton}
      />
      <AccountContent
        type="text"
        name="email"
        value={textCheck.email === "" ? list.email : textCheck.email}
        disabled={handleEditButton}
      />
      <AccountContent
        type="text"
        name="password"
        value={textCheck.password === "" ? list.password : textCheck.password}
        disabled={handleEditButton}
      />
      <ButtonWrap>
        <AccountBtn key={list.id} onClick={editAccount}>
          {handleEditButton ? "??????" : "??????"}
        </AccountBtn>
        <AccountBtn onClick={deleteAccount}>??????</AccountBtn>
      </ButtonWrap>
    </AccountWrap>
  );
});

export default AdminAccountList;
