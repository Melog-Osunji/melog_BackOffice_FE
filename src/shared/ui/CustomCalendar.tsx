import styled from "styled-components";
import { DayPicker, useDayPicker } from "react-day-picker";
import type { DateRange, MonthCaptionProps } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import "react-day-picker/style.css";

type Props = {
  selectedRange?: DateRange;
  onSelect: (range?: DateRange) => void;
};

export default function CustomCalendar({ selectedRange, onSelect }: Props) {
  return (
    <DayPickerWrap>
      <DayPicker
        mode="range"
        locale={ko}
        selected={selectedRange}
        onSelect={(range) => onSelect(range)}
        showOutsideDays
        fixedWeeks
        formatters={{
          formatCaption: (date) => `${date.getMonth() + 1}`,
        }}
        components={{
          MonthCaption: CustomCaption, // v9 기준
        }}
      />
    </DayPickerWrap>
  );
}

/** 커스텀 캡션 컴포넌트 */
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

/* ===================== Styles ===================== */

const DayPickerWrap = styled.div`
  /* ── CSS 변수 재정의 ── */
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

  /* ── 월 레이아웃 ── */
  .rdp-months {
    justify-content: center;
  }

  /* ── 헤더 캡션 (월 표시 영역) ── */
  .rdp-month_caption {
    padding: 0;
  }

  .rdp-caption_label {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
  }

  /* 기본 네비게이션 숨김(우리는 CustomCaption에서 구현) */
  .rdp-nav {
    display: none;
  }

  /* ── 요일 헤더 ── */
  .rdp-weekday {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_300};
    width: var(--rdp-day-width);
    padding-bottom: 8px;
    text-align: center;
  }

  /* ── 날짜 셀 ── */
  .rdp-day {
    width: var(--rdp-day-width);
    height: var(--rdp-day-height);
    padding: 0;
    text-align: center;
  }

  /* ── 날짜 버튼 ── */
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

  /* ── 오늘 날짜 ── */
  .rdp-today .rdp-day_button {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.blue_normal_active};
  }

  /* ── 범위 중간 ── */
  .rdp-range_middle {
    background: ${({ theme }) => theme.colors.blue_light};

    .rdp-day_button {
      border-radius: 8px;
      color: ${({ theme }) => theme.colors.gray_500};
      background: transparent;
    }
  }

  /* ── 범위 시작 ── */
  .rdp-range_start {
    background: linear-gradient(
      to right,
      transparent 50%,
      ${({ theme }) => theme.colors.blue_light} 50%
    );

    .rdp-day_button {
      background: ${({ theme }) => theme.colors.blue_normal_active} !important;
      color: #ffffff !important;
      border-radius: 50% !important;
    }
  }

  /* ── 범위 끝 ── */
  .rdp-range_end {
    background: linear-gradient(
      to left,
      transparent 50%,
      ${({ theme }) => theme.colors.blue_light} 50%
    );

    .rdp-day_button {
      background: ${({ theme }) => theme.colors.blue_normal_active} !important;
      color: #ffffff !important;
      border-radius: 50% !important;
    }
  }

  /* ── 단일 날짜만 선택 ── */
  .rdp-range_start.rdp-range_end {
    background: transparent;
  }

  /* ── 월 바깥 날짜 ── */
  .rdp-outside .rdp-day_button {
    color: ${({ theme }) => theme.colors.gray_300};
  }

  /* ── 비활성 날짜 ── */
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