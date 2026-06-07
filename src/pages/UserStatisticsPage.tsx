import { useMemo } from "react";
import styled from "styled-components";
import "react-day-picker/style.css";

import SearchSelect from "../shared/ui/SearchSelect";
import { MOCK_USER_STATISTICS } from "../shared/constants/mockData";
import {
  ALL_STAT_TYPE_OPTIONS,
  STAT_TYPE_OPTIONS,
  useUserStatisticsStore,
  type AllUserStatType,
  type MemberStatType,
} from "../shared/stores/userStatistics.store";

import chevronUp from "../assets/icons/ChevronUp.svg";
import check from "../assets/icons/CheckIcon.svg";
import FeatureUsageChart from "../shared/components/userStatistics/FeatureUsageChart";
import HarmonyRoomUserChart from "../shared/components/userStatistics/HarmonyRoomUserChart";
import SignalCharts from "../shared/components/userStatistics/SignalCharts";
import SocialLoginChart from "../shared/components/userStatistics/SocialLoginChart";
import UsageTimeChart from "../shared/components/userStatistics/UsageTimeChart";
import WithdrawalRateChart from "../shared/components/userStatistics/WithdrawalRateChart";
import CalendarDatePicker from "../shared/ui/CalendarDatePicker";

export default function UserStatisticsPage() {
  const {
    category,
    statType,
    allStatType,
    startYear,
    startDate,
    endYear,
    endDate,
    setCategory,
    setStatType,
    setAllStatType,
    setStartYear,
    setStartDate,
    setEndYear,
    setEndDate,
  } = useUserStatisticsStore();

  const chartContent = useMemo(() => {
    if (category === "feature") {
      return <FeatureUsageChart />;
    }

    if (category === "all") {
      switch (allStatType) {
        case "harmonyRoom":
          return <HarmonyRoomUserChart />;
        case "positiveSignal":
          return <SignalCharts data={MOCK_USER_STATISTICS.positiveSignal} type="positive" />;
        case "negativeSignal":
          return <SignalCharts data={MOCK_USER_STATISTICS.negativeSignal} type="negative" />;
        default:
          return null;
      }
    }

    switch (statType) {
      case "socialLogin":
        return <SocialLoginChart />;
      case "usageTime":
        return <UsageTimeChart />;
      case "withdrawalRate":
        return <WithdrawalRateChart />;
      default:
        return null;
    }
  }, [category, statType, allStatType]);

  return (
    <Container>
      <Header>
        <Tabs>
          <TabButton
            type="button"
            $active={category === "member"}
            onClick={() => setCategory("member")}
          >
            멤버
          </TabButton>
          <TabButton
            type="button"
            $active={category === "feature"}
            onClick={() => setCategory("feature")}
          >
            기능
          </TabButton>
          <TabButton
            type="button"
            $active={category === "all"}
            onClick={() => setCategory("all")}
          >
            전체 사용자
          </TabButton>
        </Tabs>
      </Header>

      <Toolbar>
        <Filters>
          <CalendarDatePicker
            year={startYear}
            dateValue={startDate}
            onYearChange={setStartYear}
            onDateChange={setStartDate}
            yearPlaceholder="시작 연도"
          />
          <RangeDivider>~</RangeDivider>
          <CalendarDatePicker
            year={endYear}
            dateValue={endDate}
            onYearChange={setEndYear}
            onDateChange={setEndDate}
            yearPlaceholder="종료 연도"
          />
          {category === "member" && (
            <StatTypeSelect
              options={STAT_TYPE_OPTIONS.map((option) => ({
                label: option.label,
                value: option.value,
              }))}
              value={statType}
              onChange={(value) => setStatType(value as MemberStatType)}
              size="lg"
              chevronUpIcon={chevronUp}
              chevronDownIcon={chevronUp}
              checkIcon={check}
              placeholder="통계 내역"
            />
          )}
          {category === "all" && (
            <StatTypeSelect
              options={ALL_STAT_TYPE_OPTIONS.map((option) => ({
                label: option.label,
                value: option.value,
              }))}
              value={allStatType}
              onChange={(value) => setAllStatType(value as AllUserStatType)}
              size="lg"
              chevronUpIcon={chevronUp}
              chevronDownIcon={chevronUp}
              checkIcon={check}
              placeholder="통계 내역"
            />
          )}
        </Filters>
      </Toolbar>

      <ChartCard>
        <ChartArea>{chartContent}</ChartArea>
      </ChartCard>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-bottom: 24px;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TabButton = styled.button<{ $active: boolean }>`
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.gray_300};
  font-size: 24px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`;

const RangeDivider = styled.span`
  color: ${({ theme }) => theme.colors.gray_400};
  font-size: 18px;
  font-weight: 500;
`;

const StatTypeSelect = styled(SearchSelect)`
  min-width: 242px;
`;


const ChartCard = styled.section`
  min-height: 500px;
  padding: 28px 28px 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
`;

const ChartArea = styled.div`
  width: 100%;
  height: 400px;
`;