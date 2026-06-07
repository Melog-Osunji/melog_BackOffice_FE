import { useEffect, useMemo, useRef, useState } from "react";
import { formatMonthDayLabel, formatStoreDate, parseStoreDate, YEAR_OPTIONS } from "../stores/userStatistics.store";
import styled from "styled-components";
import check from "../../assets/icons/CheckIcon.svg";
import CustomCalendar from "./CustomCalendar";
import SearchSelect from "./SearchSelect";
import chevronUp from "../../assets/icons/ChevronUp.svg";

export default function CalendarDatePicker({
    year,
    dateValue,
    onYearChange,
    onDateChange,
    yearPlaceholder,
  }: {
    year: string;
    dateValue: string;
    onYearChange: (year: string) => void;
    onDateChange: (date: string) => void;
    yearPlaceholder: string;
  }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const selectedDate = useMemo(
      () => parseStoreDate(year, dateValue),
      [year, dateValue]
    );
  
    useEffect(() => {
      const handler = (event: MouseEvent) => {
        if (!ref.current?.contains(event.target as Node)) {
          setOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, []);
  
    return (
      <DatePickerGroup ref={ref}>
        <SearchSelect
          options={YEAR_OPTIONS}
          value={year}
          onChange={onYearChange}
          size="md"
          chevronUpIcon={chevronUp}
          chevronDownIcon={chevronUp}
          checkIcon={check}
          placeholder={yearPlaceholder}
        />
  
        <DateTriggerWrap>
          <DateTrigger
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
          >
            <TriggerText>{formatMonthDayLabel(year, dateValue)}</TriggerText>
            <Chevron src={chevronUp} alt="toggle" />
          </DateTrigger>
  
          {open && (
            <CalendarPopover>
              <CustomCalendar
                key={`${year}-${dateValue}`}
                mode="single"
                selectedDate={selectedDate}
                onSelect={(date) => {
                  if (!date) return;
                  onYearChange(String(date.getFullYear()));
                  onDateChange(formatStoreDate(date));
                  setOpen(false);
                }}
              />
            </CalendarPopover>
          )}
        </DateTriggerWrap>
      </DatePickerGroup>
    );
  }


  const DatePickerGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DateTriggerWrap = styled.div`
  position: relative;
`;

const DateTrigger = styled.button`
  width: 8.75rem;
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

const TriggerText = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray_400};
`;

const Chevron = styled.img`
  width: 20px;
  height: 20px;
`;

const CalendarPopover = styled.div`
  position: absolute;
  top: calc(100% + 18px);
  right: 0;
  z-index: 10;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray_100};
  box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08);
`;