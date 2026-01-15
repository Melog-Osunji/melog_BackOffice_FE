import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  display: flex;
  overflow:hidden;
  background: ${({ theme }) => theme.colors.bg};
`;

const Side = styled.aside`
  flex: 0 1 16rem;
  width: 16rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 28px 8px;
  padding-top: 4rem;
`;

const Brand = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue_normal};
  margin-bottom: 65px;
  padding-left: 21px;
`;

const Menu = styled.nav`
  display: grid;
  gap: 12px;
`;

const MenuItem = styled(NavLink)`
  padding: 10px 24px;
  border-radius: ${({ theme }) => theme.radius.xs};
  color: ${({ theme }) => theme.colors.gray_500};
  font-size: 15px;
  font-weight: 600;
  line-height: 27px;
  display: flex;
  align-items: center;
  gap:8px;

  &:hover {
    color: ${({ theme }) => theme.colors.blue_normal};
  }
  &.active {
    background: ${({ theme }) => theme.colors.gray_100};
    color: ${({ theme }) => theme.colors.gray_600};
  }
  &.active::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.blue_normal};
  }
`;

const Main = styled.main`
  flex: 1 1 auto;
  padding: 6rem 4.5rem;
`;

const Panel = styled.section`
  background: ${({ theme }) => theme.colors.white};
  height: 100%;
  padding: 28px;
`;

export default function DashboardLayout() {
  return (
    <Root>
      <Side>
        <Brand>Dashboard</Brand>
        <Menu>
          <MenuItem to="/" end>계정 관리</MenuItem>
          <MenuItem to="/keywords">키워드 관리</MenuItem>
          <MenuItem to="/harmonyrooms">하모니룸 관리</MenuItem>
          <MenuItem to="/calender">캘린더</MenuItem>
          <MenuItem to="/QnA">1:1 문의</MenuItem>
          <MenuItem to="/notice">알림</MenuItem>
          <MenuItem to="/userstatistics">사용자 통계</MenuItem>
          <MenuItem to="/leavestatistics">탈퇴•폐쇄 통계</MenuItem>
          <MenuItem to="/server">서버 관리</MenuItem>
        </Menu>
      </Side>

      <Main>
        <Panel>
          <Outlet />
        </Panel>
      </Main>
    </Root>
  );
}
