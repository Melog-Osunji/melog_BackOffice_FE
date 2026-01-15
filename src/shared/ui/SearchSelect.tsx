// SearchSelect.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled, {css} from "styled-components";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string;
  size: "md" | "lg";
  onChange: (value: string) => void;
  placeholder?: string; // "검색"
  className?: string;
  chevronUpIcon: string;
  chevronDownIcon: string;
  checkIcon: string;
};

export default function SearchSelect({
  options,
  value,
  size="md",
  onChange,
  placeholder = "검색",
  className,
  chevronUpIcon,
  chevronDownIcon,
  checkIcon,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const selected = useMemo(
    () => options.find((o) => o.value === value),
    [options, value]
  );

  // 바깥 클릭 닫기
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <Container ref={ref} className={className} $size={size}>
      <Trigger
        type="button"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <TriggerText $isPlaceholder={!selected}>
          {selected ? selected.label : placeholder}
        </TriggerText>

        <Chevron
          src={open ? chevronUpIcon : chevronDownIcon}
          alt="toggle"
        />
      </Trigger>

      {open && (
        <Menu role="listbox">
          {options.map((opt) => {
            const active = opt.value === value;
            return (
              <Item
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                $active={active}
              >
                <ItemLabel $active={active}>{opt.label}</ItemLabel>
                {active && <Check src={checkIcon} alt="selected" />}
              </Item>
            );
          })}
        </Menu>
      )}
    </Container>
  );
}

/* ================= styles ================= */

const sizes = {
  md: css`width: 8.75rem; `,
  lg: css`width: 13.25rem;`,
};

const Container = styled.div<{ $size: "md" | "lg" }>`
  position: relative;
  ${({ $size }) => sizes[$size]}
  box-sizing: border-box;
`;

const Trigger = styled.button`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray_300};

  cursor: pointer;
`;

const TriggerText = styled.span<{ $isPlaceholder: boolean }>`
  font-size: 15px;
  font-weight: 400;
  color: ${({ $isPlaceholder, theme }) => ($isPlaceholder ? theme.colors.black : theme.colors.gray_400)};
`;

const Chevron = styled.img`
  width: 20px;
  height: 20px;
`;

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 18px);
  left: 0;
  width: 100%;

  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray_100};

  overflow: hidden;
  box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08);
`;

const Item = styled.button<{ $active: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 14px;
  cursor: pointer;

  background: ${({ $active, theme }) => ($active ?  theme.colors.gray_100 :theme.colors.white)};
  border: none;
  border-radius: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.gray_100};
  }

  /* 옵션 사이 구분선 느낌(원하면) */
  & + & {
    border-top: 1px solid #eef2f7;
  }
`;

const ItemLabel = styled.span<{ $active: boolean }>`
  font-size: 15px;
  font-weight: 400;
  color: ${({ $active, theme }) => ($active ? theme.colors.black : theme.colors.gray_400)};
`;

const Check = styled.img`
  width: 20px;
  height: 20px;
`;
