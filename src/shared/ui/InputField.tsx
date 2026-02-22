// InputField.tsx
import styled, { css } from "styled-components";

type Variant = "default" | "error" | "disabled";
type FieldSize = "short" | "long" | "full";

interface BaseProps {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  maxLength?: number;
  onChange: (value: string) => void;
  className?: string;
}

interface SingleLineProps extends BaseProps {
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
}

interface MultiLineProps extends BaseProps {
  rows?: number;
}

const variants = {
  default: css`
    border: 1px solid ${({ theme }) => theme.colors.gray_200};
    background: ${({ theme }) => theme.colors.white};
  `,
  error: css`
    border: 1px solid ${({ theme }) => theme.colors.danger ?? "#FF4D4F"};
    background: ${({ theme }) => theme.colors.white};
  `,
  disabled: css`
    border: 1px solid ${({ theme }) => theme.colors.gray_200};
    background: ${({ theme }) => theme.colors.white ?? "#ffffff"};
  `,
};

const sizes = {
  short: css`
    width: 208px;
    max-width: 100%;
  `,
  long: css`
    width: 100%;
  `,
  full: css`
    width: 100%;
  `,
};

/* =========================
   긴 한 줄 입력 (제목)
   ========================= */
export function LongSingleInput({
  value,
  onChange,
  placeholder = "제목을 입력해 주세요.",
  disabled,
  error,
  maxLength,
  type = "text",
  autoComplete,
  className,
}: SingleLineProps) {
  const variant: Variant = disabled ? "disabled" : error ? "error" : "default";

  return (
    <Input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      autoComplete={autoComplete}
      $variant={variant}
      $size="long"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

/* =========================
   여러 줄 입력 (내용)
   ========================= */
export function MultiLineInput({
  value,
  onChange,
  placeholder = "내용을 입력해 주세요.",
  disabled,
  error,
  maxLength,
  rows = 10,
  className,
}: MultiLineProps) {
  const variant: Variant = disabled ? "disabled" : error ? "error" : "default";

  return (
    <TextArea
      className={className}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      rows={rows}
      $variant={variant}
      $size="full"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

/* =========================
   짧은 단답 입력 (담당자 이름)
   ========================= */
export function ShortSingleInput({
  value,
  onChange,
  placeholder = "이름",
  disabled,
  error,
  maxLength,
  type = "text",
  autoComplete,
  className,
}: SingleLineProps) {
  const variant: Variant = disabled ? "disabled" : error ? "error" : "default";

  return (
    <Input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      autoComplete={autoComplete}
      $variant={variant}
      $size="short"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

/* =========================
   공통 스타일
   ========================= */

const baseStyle = css`
  border-radius: 8px;
  padding: 12px 16px;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -0.02em;
  outline: none;
  transition: border-color 0.15s ease, opacity 0.15s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_400};
  }

  &:focus {
    border-color: ${({ theme }) =>
      theme.colors.blue_normal};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const Input = styled.input<{ $variant: Variant; $size: FieldSize }>`
  ${baseStyle}
  ${({ $variant }) => variants[$variant]}
  ${({ $size }) => sizes[$size]}
`;

const TextArea = styled.textarea<{ $variant: Variant; $size: FieldSize }>`
  ${baseStyle}
  ${({ $variant }) => variants[$variant]}
  ${({ $size }) => sizes[$size]}
  height: 190px;
  min-height: 190px;
  resize: vertical;
`;