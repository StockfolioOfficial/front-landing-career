import styled from "styled-components";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { useLocation, useHistory, Link } from "react-router-dom";
import theme from "../../styles/theme";
import Inner from "../../styles/Inner";
import Heading2 from "../UI/atoms/texts/Heading2";
import AdminMenuApplicant from "../UI/organisms/AdminMenuApplicant";
import AdminApplicantStore from "../../stores/AdminApplicantStore";
import { AdminRecentApplicant1 } from "../../models/adminMainMenu";

const AdminBox = styled.section`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background: ${theme.color.white};
  padding-top: 80px;
`;

const Wrap = styled.div`
  padding: 40px 0px;
  display: flex;
`;

const Title1 = styled.div`
  color: ${theme.color.mainDeep};
  margin-left: 258px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const Applicant = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: ${theme.color.white};
  border-radius: 16px;
  cursor: pointer;
  height: 82px;
  margin: 16px 0px;

  &:hover {
    background-color: ${theme.color.greyLight1};
  }
`;

const TitleWrap = styled.div`
  font-size: 12px;
  margin-left: 24px;
  position: relative;
`;

const Title = styled.div`
  font-size: 12px;
  color: ${theme.color.grey2};
  font-weight: 400;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
`;

const ContentWrap = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${theme.color.black};
  margin-right: 24px;
  line-height: 20px;
  span {
    margin: 0px 8px 0px 8px;
    color: ${theme.color.grey1};
  }
`;

const Career = styled.div`
  text-align: right; 
  }
`;

const Email = styled.div`
  font-size: 12px;
`;

const Label2 = styled.div`
  background-color: ${theme.color.red2};
  width: 38px;
  height: 18px;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;

  span {
    font-size: 12px;
    font-weight: 700;
    color: ${theme.color.white};
  }
`;

const NameWrap = styled.div`
  display: flex;
  align-items: center;
`;

const AdminApplicantList = observer((): JSX.Element => {
  const { ApplicantList } = AdminApplicantStore;
  const { pathname } = useLocation();

  return (
    <AdminBox>
      <Inner size="narrow">
        <Wrap>
          <Heading2
            fontColor={theme.color.black}
            fontSize={24}
            fontWeight={700}
          >
            지원자 리스트(5)
          </Heading2>
          <Title1>UX/UI 디자이너 모집</Title1>
        </Wrap>
        {toJS(ApplicantList).map((data: AdminRecentApplicant1) => {
          return (
            <Applicant
              key={data.created_at}
              to={`/admin/applicant/${data.application_id}`}
            >
              <TitleWrap>
                {pathname === "/admin/current" && (
                  <Title>{data.position_title} 채용</Title>
                )}
                <NameWrap>
                  <Name>{data.user_name}</Name>
                  {data.log ? null : (
                    <Label2>
                      <span>new</span>
                    </Label2>
                  )}
                </NameWrap>
              </TitleWrap>
              <ContentWrap>
                <Career>
                  4년 2개월 <span>|</span> {data.created_at}
                </Career>
                <Email>
                  {data.user_email} <span>|</span> {data.user_phoneNumber}
                </Email>
              </ContentWrap>
            </Applicant>
          );
        })}
      </Inner>
    </AdminBox>
  );
});

export default AdminApplicantList;
