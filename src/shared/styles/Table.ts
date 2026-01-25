import styled from "styled-components";

export const TableSection = styled.div`
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_100};
`;

export const TableBody = styled.div`
  max-height: 600px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_100};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TableCol = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  height: 48px;
  width: ${({ width }) => width || "auto"};
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.gray_400};
  text-overflow: ellipsis;
`;

export const StyledCheckbox = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;