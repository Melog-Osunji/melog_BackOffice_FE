import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import type { DateRange } from "react-day-picker";
import "react-day-picker/style.css";

import CommonButton from "../shared/ui/CommonButton";
import CustomCalendar from "../shared/ui/CustomCalendar";
import {
  LongSingleInput,
  MultiLineInput,
  ShortSingleInput,
} from "../shared/ui/InputField";
import {
  useAlarmStore,
  type AlarmCategory,
  toDateRange,
} from "../shared/stores/alarm.store";
import { MOCK_ALARMS } from "../shared/constants/mockData";

const CATEGORY_OPTIONS: AlarmCategory[] = ["공지사항", "이벤트", "알림"];

export default function AlarmDetailPage() {
  const navigate = useNavigate();
  const { alarmId } = useParams<{ alarmId: string }>();
  const {
    alarms,
    alarmForm,
    selectedRange,
    setAlarms,
    initAlarmForm,
    updateAlarmForm,
    setSelectedRange,
    saveAlarmDraft,
    saveAlarm,
  } = useAlarmStore();

  useEffect(() => {
    if (alarms.length === 0) {
      setAlarms(MOCK_ALARMS);
    }
  }, [alarms.length, setAlarms]);

  useEffect(() => {
    if (!alarmId) return;
    initAlarmForm(Number(alarmId));
  }, [alarmId, alarms, initAlarmForm]);

  const handleRangeSelect = (range?: DateRange) => {
    setSelectedRange(range);
  };

  const handleStartDateChange = (value: string) => {
    updateAlarmForm({ startDate: value });
    setSelectedRange(toDateRange(value, alarmForm.endDate));
  };

  const handleDraftSave = () => {
    saveAlarmDraft();
  };

  const handleComplete = () => {
    saveAlarm();
    navigate("/alarm");
  };

  return (
    <Page>
      <Left>
        <Header>
          <Title>{alarmForm.category} 작성</Title>
        </Header>

        <FormCard>
          <SubTitle>알림 추가</SubTitle>

          <FormWrap>
            <FormCol>
              <FormLabel>제목</FormLabel>
              <LongSingleInput
                value={alarmForm.title}
                onChange={(value) => updateAlarmForm({ title: value })}
                placeholder="안녕하세요. 멜로그 서비스팀입니다."
              />
            </FormCol>

            <FormCol>
              <FormLabel>내용</FormLabel>
              <MultiLineInput
                value={alarmForm.content}
                onChange={(value) => updateAlarmForm({ content: value })}
                placeholder="내용을 입력해 주세요."
              />
            </FormCol>
          </FormWrap>

          <ButtonWrap>
            <CommonButton
              label="임시 저장"
              size="md"
              variant="ghost"
              onClick={handleDraftSave}
            />
            <CommonButton
              label="완료"
              size="md"
              variant="default"
              onClick={handleComplete}
            />
          </ButtonWrap>
        </FormCard>
      </Left>

      <Right>
        <SideCard>
          <SideBlock>
            <BlockLabel>알림 옵션</BlockLabel>
            <OptionGroup>
              {CATEGORY_OPTIONS.map((option) => (
                <OptionButton
                  key={option}
                  type="button"
                  $active={alarmForm.category === option}
                  onClick={() => updateAlarmForm({ category: option })}
                >
                  {option}
                </OptionButton>
              ))}
            </OptionGroup>
          </SideBlock>

          <SideBlock>
            <BlockLabel>담당자</BlockLabel>
            <ShortSingleInput
              value={alarmForm.author}
              onChange={(value) => updateAlarmForm({ author: value })}
              placeholder="이름"
            />
          </SideBlock>

          <SideBlock>
            <BlockLabel>날짜</BlockLabel>
            <CustomCalendar
              selectedRange={selectedRange}
              onSelect={handleRangeSelect}
            />
            <DateTimeRow>
              <DateInput
                value={alarmForm.startDate}
                onChange={(e) => handleStartDateChange(e.target.value)}
                placeholder="2023-12-17"
              />
              <TimeInput
                value={alarmForm.startTime}
                onChange={(e) =>
                  updateAlarmForm({ startTime: e.target.value })
                }
                placeholder="10:00"
              />
            </DateTimeRow>
          </SideBlock>
        </SideCard>
      </Right>
    </Page>
  );
}

const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 312px;
  gap: 28px;
  padding: 24px 32px;
  background: ${({ theme }) => theme.colors.white};
`;

const Left = styled.div`
  min-width: 0;
`;

const Right = styled.div`
  border-left: 24px solid ${({ theme }) => theme.colors.bg};
  padding-left: 32px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const SubTitle = styled.p`
  margin: 0;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.black};
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FormLabel = styled.p`
  margin: 0;
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.gray_600};
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const SideCard = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const SideBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BlockLabel = styled.div`
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray_600};
`;

const OptionGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const OptionButton = styled.button<{ $active: boolean }>`
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.blue_normal_active : theme.colors.gray_200};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.blue_normal_active : theme.colors.gray_400};
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 20px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue_normal_active};
  }
`;

const DateTimeRow = styled.div`
  display: flex;
  gap: 8px;
`;

const DateInput = styled.input`
  flex: 1;
  height: 40px;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
  font-family: "Pretendard";
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray_500};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue_normal};
  }
`;

const TimeInput = styled(DateInput)`
  width: 88px;
  flex: 0 0 88px;
`;
