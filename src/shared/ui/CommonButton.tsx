import styled, { css } from "styled-components";

type Variant = "default" | "ghost" | "outline" | "ghostGray";
type Size = "sm" | "lg";

interface ButtonProps {
  label?: string
  variant?: Variant
  size?: Size
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
    color: ${({ theme }) => theme.colors.blue_normal};
    border: 1px solid ${({ theme }) => theme.colors.blue_normal};
    `,
  ghostGray: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.gray_500};
    border: 1px solid ${({ theme }) => theme.colors.gray_200};
  `,
};

const sizes = {
  sm: css`padding: 4px 24px; font-size: 15px; font-weight: 400; line-height: 27px;`,
  lg: css`font-size: 24px; font-weight: 700; width:100%;`,
};

export default function CommonButton(props: ButtonProps) {
  return (
    <Button size={props.size} variant={props.variant}>
      {props.label}
    </Button>
  )
}

const Button = styled.button<ButtonProps>`

  border: 1px solid ${({ theme }) => theme.colors.blue_normal};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  ${({ variant = "default" }) => variants[variant]}
  ${({ size = "sm" }) => sizes[size]}

  
  &:disabled { opacity: 0.6; cursor: not-allowed; }
  &:hover {
    outline: none;
    opacity: 0.9;
  }
`