import styled from "styled-components";
import CommonButton from "../shared/ui/CommonButton";

// 지우시고 작성하시면 됩니다.

const Wrap = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const Box = styled.div`
  width: 520px;
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.card};
  text-align: center;
`;

const Title = styled.h1`
  margin: 0 0 22px;
  font-size: ${({ theme }) => theme.font.lg};
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 14px;
  margin-top: 12px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: #f3f6fb;
  outline: none;
`;

export default function LoginPage() {
  return (
    <Wrap>
      <Box>
        <Title>멜로그 백오피스 로그인</Title>
        <Input placeholder="아이디를 입력해주세요." />
        <Input placeholder="비밀번호를 입력해주세요." type="password" />
        <CommonButton label="로그인" size="lg" variant="default"/>
      </Box>
    </Wrap>
  );
}
