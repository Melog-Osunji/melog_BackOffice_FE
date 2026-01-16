import styled, { css } from "styled-components";

type Variant = "default" | "ghost" | "outline" | "ghostGray";
type Size = "sm" | "lg";

interface ButtonProps {
  label?: string;
  variant?: Variant;
  size?: Size;
  icon?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

const variants = {
  default: css`
    background: ${({ theme }) => theme.colors.blue_normal};
    color: ${({ theme }) => theme.colors.white};
    border-color: transparent;
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.gray_300};
    border: 1px solid ${({ theme }) => theme.colors.gray_200};
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.blue_normal_active};
    border: 1px solid ${({ theme }) => theme.colors.blue_normal_active};
  `,
  ghostGray: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.gray_500};
    border: 1px solid ${({ theme }) => theme.colors.gray_200};
  `,
};

const sizes = {
  sm: css`
    padding: 8px 10px;
    font-size: 15px;
    font-weight: 400;
    line-height: 27px;
  `,
  lg: css`
    font-size: 24px;
    font-weight: 700;
    width: 100%;
  `,
};

export default function CommonButton(props: ButtonProps) {
  const { label, variant = "default", size = "sm", icon, iconPosition = "left", onClick } = props;

  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      iconPosition={iconPosition}
    >
      {iconPosition === "left" && icon && <IconWrapper src={icon} alt="icon" />}
      {label}
      {iconPosition === "right" && icon && <IconWrapper src={icon} alt="icon" />}
    </Button>
  );
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 3px;
  border: 1px solid ${({ theme }) => theme.colors.blue_normal};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  ${({ variant = "default" }) => variants[variant]}
  ${({ size = "sm" }) => sizes[size]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:hover {
    outline: none;
    opacity: 0.9;
  }
`;

const IconWrapper = styled.img`
  width: 22px;
  height: 22px;
`;