import styled from "styled-components";
import { useEffect, useState } from "react";
import { DayPicker, useDayPicker } from "react-day-picker";
import type { DateRange, MonthCaptionProps } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import "react-day-picker/style.css";

type RangeCalendarProps = {
  mode?: "range";
  selectedRange?: DateRange;
  onSelect: (range?: DateRange) => void;
  selectedDate?: never;
};

type SingleCalendarProps = {
  mode: "single";
  selectedDate?: Date;
  onSelect: (date?: Date) => void;
  selectedRange?: never;
};

type Props = RangeCalendarProps | SingleCalendarProps;

export default function CustomCalendar(props: Props) {
  if (props.mode === "single") {
    return <SingleCalendar {...props} />;
  }

  return (
    <DayPickerWrap $mode="range">
      <DayPicker
        mode="range"
        locale={ko}
        selected={props.selectedRange}
        onSelect={props.onSelect}
        showOutsideDays
        fixedWeeks
        formatters={{
          formatCaption: (date) => `${date.getMonth() + 1}`,
        }}
        components={{
          MonthCaption: CustomCaption,
        }}
      />
    </DayPickerWrap>
  );
}

function SingleCalendar({ selectedDate, onSelect }: SingleCalendarProps) {
  const [month, setMonth] = useState<Date>(selectedDate ?? new Date());

  useEffect(() => {
    if (selectedDate) {
      setMonth(selectedDate);
    }
  }, [selectedDate]);

  return (
    <DayPickerWrap $mode="single">
      <DayPicker
        mode="single"
        locale={ko}
        month={month}
        onMonthChange={setMonth}
        selected={selectedDate}
        onSelect={onSelect}
        showOutsideDays
        fixedWeeks
        formatters={{
          formatCaption: (date) => `${date.getMonth() + 1}`,
        }}
        components={{
          MonthCaption: CustomCaption,
        }}
      />
    </DayPickerWrap>
  );
}

function CustomCaption({ calendarMonth }: MonthCaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useDayPicker();

  return (
    <CaptionRow>
      <NavButton
        onClick={() => previousMonth && goToMonth(previousMonth)}
        disabled={!previousMonth}
        type="button"
      >
        ‹
      </NavButton>

      <MonthLabel>{calendarMonth.date.getMonth() + 1}</MonthLabel>

      <NavButton
        onClick={() => nextMonth && goToMonth(nextMonth)}
        disabled={!nextMonth}
        type="button"
      >
        ›
      </NavButton>
    </CaptionRow>
  );
}

const DayPickerWrap = styled.div<{ $mode: "range" | "single" }>`
  .rdp-root {
    --rdp-accent-color: ${({ theme }) => theme.colors.blue_normal};
    --rdp-accent-background-color: ${({ theme }) => theme.colors.blue_light};
    --rdp-range_start-color: #ffffff;
    --rdp-range_start-background: ${({ theme }) => theme.colors.blue_normal};
    --rdp-range_end-color: #ffffff;
    --rdp-range_end-background: ${({ theme }) => theme.colors.blue_normal};
    --rdp-range_middle-background-color: ${({ theme }) => theme.colors.blue_light};
    --rdp-range_middle-color: ${({ theme }) => theme.colors.black};
    --rdp-day_button-width: 34px;
    --rdp-day_button-height: 34px;
    --rdp-day-width: 34px;
    --rdp-day-height: 34px;
    margin: 0;
  }

  .rdp-months {
    justify-content: center;
  }

  .rdp-month_caption {
    padding: 0;
  }

  .rdp-caption_label {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
  }

  .rdp-nav {
    display: none;
  }

  .rdp-weekday {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_300};
    width: var(--rdp-day-width);
    padding-bottom: 8px;
    text-align: center;
  }

  .rdp-day {
    width: var(--rdp-day-width);
    height: var(--rdp-day-height);
    padding: 0;
    text-align: center;
  }

  .rdp-day_button {
    width: var(--rdp-day_button-width);
    height: var(--rdp-day_button-height);
    border-radius: 50%;
    border: none;
    background: transparent;
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray_500};
    cursor: pointer;
    transition: background 0.15s;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.gray_100};
    }
  }

  .rdp-today .rdp-day_button {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.blue_normal_active};
  }

  ${({ $mode }) =>
    $mode === "single"
      ? `
    .rdp-selected .rdp-day_button {
      background: #3D8FB3 !important;
      color: #ffffff !important;
      border-radius: 50% !important;
    }
  `
      : `
    .rdp-range_middle {
      background: #D4EEF8;

      .rdp-day_button {
        border-radius: 8px;
        color: #636C73;
        background: transparent;
      }
    }

    .rdp-range_start {
      background: linear-gradient(to right, transparent 50%, #D4EEF8 50%);

      .rdp-day_button {
        background: #3D8FB3 !important;
        color: #ffffff !important;
        border-radius: 50% !important;
      }
    }

    .rdp-range_end {
      background: linear-gradient(to left, transparent 50%, #D4EEF8 50%);

      .rdp-day_button {
        background: #3D8FB3 !important;
        color: #ffffff !important;
        border-radius: 50% !important;
      }
    }

    .rdp-range_start.rdp-range_end {
      background: transparent;
    }
  `}

  .rdp-outside .rdp-day_button {
    color: ${({ theme }) => theme.colors.gray_300};
  }

  .rdp-disabled .rdp-day_button {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.gray_300};
  }
`;

const CaptionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 4px 0 12px;
`;

const MonthLabel = styled.span`
  font-size: 16px;
  font-weight: 700;
  min-width: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray_400};
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 6px;
  line-height: 1;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.gray_100};
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;
