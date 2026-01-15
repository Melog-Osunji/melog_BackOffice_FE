import React from "react";
import styled from "styled-components";
import searchIcon from "../../assets/icons/SearchIcon.svg"; 


type Props = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};


export default function SearchInput({
  value,
  onChange,
  placeholder = "검색",
  className,
}: Props) {
  return (
    <Wrap className={className}>
      <Icon src={searchIcon} alt="search" />
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 21.5rem;
  height: 48px;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radius.md};

  background: ${({ theme }) => theme.colors.gray_100};
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  outline: none;
  background: transparent;

  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_400};
    font-weight: 400;
  }
`;