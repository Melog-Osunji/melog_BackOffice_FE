import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface TableFilterOption {
  label: string;
  value: string;
}

interface TableFilterProps {
  options: TableFilterOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  upIcon: string;
  checkIcon: string;
}

export default function TableFilter({
  options,
  value,
  onChange,
  placeholder = "선택",
  upIcon,
  checkIcon,
}: TableFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  return (
    <Container ref={dropdownRef}>
      <TriggerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <TriggerText>{placeholder}</TriggerText>
        <UpIcon src={upIcon} alt="toggle" isOpen={isOpen} />
      </TriggerButton>

      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              isSelected={value.includes(option.value)}
              onClick={() => handleToggle(option.value)}
            >
              <ItemLabel>{option.label}</ItemLabel>
              {value.includes(option.value) && (
                <CheckIconImg src={checkIcon} alt="check" />
              )}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </Container>
  );
}

const Container = styled.div`
    position: relative;

`;

const TriggerButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  height: 48px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  background-color: ${({ theme }) => theme.colors.blue_light};
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    opacity: 0.9;
  }
`;

const TriggerText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const UpIcon = styled.img<{ isOpen: boolean }>`
  width: 11px;
  height: 9px;
  flex: none;
  order: 1;
  flex-grow: 0;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
`;

const DropdownItem = styled.button<{ isSelected: boolean }>`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.gray_100 : theme.colors.white};
  border: none;
  border-radius: 0;
  cursor: pointer;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.gray_400};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue_normal};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }
`;

const ItemLabel = styled.span`
  flex: 1;
  text-align: left;
`;

const CheckIconImg = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;