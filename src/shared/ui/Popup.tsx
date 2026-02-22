import React from "react";
import styled from "styled-components";
import CommonButton from "./CommonButton";

type PopupProps = {
  open: boolean;
  onClose: () => void;

  /** 버튼 텍스트 */
  cancelText: string;
  confirmText: string;

  /** 버튼 핸들러 */
  onCancel?: () => void; // 없으면 onClose로 처리
  onConfirm: () => void;

  /** children으로 내용 구성 */
  children: React.ReactNode;

  /** 옵션 */
  closeOnBackdrop?: boolean; // 기본 true
  width?: number; // 기본 760
};

export default function Popup({
  open,
  onClose,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
  children,
  closeOnBackdrop = true,
  width = 760,
}: PopupProps) {
  if (!open) return null;

  const handleBackdropClick = () => {
    if (closeOnBackdrop) onClose();
  };

  const handleCancel = () => {
    (onCancel ?? onClose)();
  };

  return (
    <Backdrop onMouseDown={handleBackdropClick}>
      <Dialog
        $width={width}
        role="dialog"
        aria-modal="true"
        onMouseDown={(e) => e.stopPropagation()} // 바깥 클릭만 닫히게
      >
        <Content>{children}</Content>

        <Footer>
          <CommonButton size="md" variant="ghost" onClick={handleCancel} label={cancelText}/>
          <CommonButton size="md" variant="default" onClick={onConfirm} label={confirmText}/>
        </Footer>
      </Dialog>
    </Backdrop>
  );
}

/* ===================== styles ===================== */

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 9999;
`;

const Dialog = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width}px;
  max-width: 100%;
  background: ${({ theme }) => theme.colors?.white ?? "#fff"};
  border-radius: 8px;
  box-shadow: 0 12px 4px rgba(16, 24, 40, 0.08);
  padding: 54px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  /* children의 p태그들이 "라벨 / 값"처럼 보이게 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 0;
    font-family: "Pretendard";
  }

  /* 홀수번째 p: 라벨 */
  p:nth-child(odd) {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 10px;
  }

  /* 짝수번째 p: 값 */
  p:nth-child(even) {
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors?.gray_400};
  }
`;

const Footer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;