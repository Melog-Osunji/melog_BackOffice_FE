import { useMemo, useState } from "react";
import styled from "styled-components";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// import { useExitStatisticsQuery } from "../hooks/useExitStatisticsQuery";
import type { ExitStatisticItem } from "../shared/api/exitStatistics";
import { MOCK_LEAVE_STATISTICS } from "../shared/constants/mockData";
import SearchSelect from "../shared/ui/SearchSelect";

import chevronUp from "../assets/icons/ChevronUp.svg";
import check from "../assets/icons/CheckIcon.svg";

type StatisticTab = "serviceLeave" | "roomClose";

type ChartDatum = {
  label: string;
  count: number;
};

const YEAR_OPTIONS = [
  { label: "전체", value: "" },
  { label: "2026년", value: "2026" },
  { label: "2025년", value: "2025" },
  { label: "2024년", value: "2024" },
];

const DATE_OPTIONS = [
  { label: "전체", value: "" },
  { label: "01월 20일", value: "01-20" },
  { label: "01월 21일", value: "01-21" },
  { label: "01월 22일", value: "01-22" },
  { label: "01월 25일", value: "01-25" },
  { label: "02월 22일", value: "02-22" },
];

const TIME_RANGE_OPTIONS = [
  { label: "전체 시간", value: "all" },
  { label: "00-06시", value: "00-06" },
  { label: "06-12시", value: "06-12" },
  { label: "12-18시", value: "12-18" },
  { label: "18-24시", value: "18-24" },
];

const SERVICE_REASON_LABELS: Record<string, string> = {
  "0": "기능이 복잡해요",
  "1": "원하는 정보를 찾기 어려워요",
  "2": "취향에 맞는 콘텐츠가 부족해요",
  "3": "오류가 발생했어요",
  "4": "다른 유사 서비스를 사용해요",
};

const HARMONY_REASON_LABELS: Record<string, string> = {
  "1": "멤버 참여율이 낮아요",
  "2": "관심 주제가 변경됐어요",
  "3": "기술적인 문제가 있어요",
  "4": "시간 부족 등 개인적인 이유예요",
};

export default function LeaveStatisticsPage() {
  const [tab, setTab] = useState<StatisticTab>("serviceLeave");
  const [startYear, setStartYear] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endYear, setEndYear] = useState("");
  const [endDate, setEndDate] = useState("");
  const [timeRange, setTimeRange] = useState("all");

  // todo : api 연동 후 주석 제거
  // const startDay = useMemo(
  //   () => buildRequestDate(startYear, startDate),
  //   [startYear, startDate]
  // );
  // const endDay = useMemo(() => buildRequestDate(endYear, endDate), [endYear, endDate]);
  //
  // const { data, isLoading, isError } = useExitStatisticsQuery({
  //   tab,
  //   searchType: timeRange,
  //   startDay,
  //   endDay,
  // });

  const data = useMemo<ExitStatisticItem[]>(() => {
    return tab === "serviceLeave"
      ? MOCK_LEAVE_STATISTICS.serviceLeave
      : MOCK_LEAVE_STATISTICS.roomClose;
  }, [tab]);

  const chartData = useMemo<ChartDatum[]>(() => {
    const labels = tab === "serviceLeave" ? SERVICE_REASON_LABELS : HARMONY_REASON_LABELS;

    return data.map((item) => ({
      label: labels[item.division] ?? item.division,
      count: item.num,
    }));
  }, [data, tab]);

  const yAxisMax = useMemo(() => {
    if (chartData.length === 0) return 100;

    const maxValue = Math.max(...chartData.map((item) => item.count));
    return Math.max(100, Math.ceil(maxValue / 100) * 100);
  }, [chartData]);

  return (
    <Container>
      <Header>
        <Tabs>
          <TabButton
            type="button"
            $active={tab === "serviceLeave"}
            onClick={() => setTab("serviceLeave")}
          >
            서비스 탈퇴
          </TabButton>
          <TabButton
            type="button"
            $active={tab === "roomClose"}
            onClick={() => setTab("roomClose")}
          >
            하모니룸 폐쇄
          </TabButton>
        </Tabs>
      </Header>

      <Toolbar>
        <Filters>
          <SearchSelect
            options={YEAR_OPTIONS}
            value={startYear}
            onChange={setStartYear}
            size="md"
            chevronUpIcon={chevronUp}
            chevronDownIcon={chevronUp}
            checkIcon={check}
            placeholder="시작 연도"
          />
          <SearchSelect
            options={DATE_OPTIONS}
            value={startDate}
            onChange={setStartDate}
            size="md"
            chevronUpIcon={chevronUp}
            chevronDownIcon={chevronUp}
            checkIcon={check}
            placeholder="시작 날짜"
          />
          <RangeDivider>~</RangeDivider>
          <SearchSelect
            options={YEAR_OPTIONS}
            value={endYear}
            onChange={setEndYear}
            size="md"
            chevronUpIcon={chevronUp}
            chevronDownIcon={chevronUp}
            checkIcon={check}
            placeholder="종료 연도"
          />
          <SearchSelect
            options={DATE_OPTIONS}
            value={endDate}
            onChange={setEndDate}
            size="md"
            chevronUpIcon={chevronUp}
            chevronDownIcon={chevronUp}
            checkIcon={check}
            placeholder="종료 날짜"
          />
          <TimeRangeSelect
            options={TIME_RANGE_OPTIONS}
            value={timeRange}
            onChange={setTimeRange}
            size="lg"
            chevronUpIcon={chevronUp}
            chevronDownIcon={chevronUp}
            checkIcon={check}
          />
        </Filters>
      </Toolbar>

      <ChartCard>
        <ChartArea>
          {chartData.length === 0 ? (
            <StatusMessage>조회할 데이터가 없습니다.</StatusMessage>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 8, right: 12, left: 0, bottom: 24 }}
                barCategoryGap={36}
              >
                <CartesianGrid vertical={false} stroke="#BDCAD8" />
                <XAxis
                  dataKey="label"
                  tickLine={false}
                  axisLine={false}
                  interval={0}
                  tick={{ fill: "#40474C", fontSize: 12 }}
                />
                <YAxis
                  domain={[0, yAxisMax]}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#BDCAD8", fontSize: 12 }}
                />
                <Tooltip
                  formatter={(value) => [`${value}건`, "건수"]}
                  cursor={{ fill: "rgba(117, 199, 234, 0.08)" }}
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid #BDCAD8",
                    boxShadow: "0 12px 24px rgba(16, 24, 40, 0.08)",
                  }}
                />
                <Bar dataKey="count" radius={[2, 2, 0, 0]} maxBarSize={34}>
                  {chartData.map((entry) => (
                    <Cell key={entry.label} fill="#75C7EA" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </ChartArea>
      </ChartCard>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 72px;
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

const TimeRangeSelect = styled(SearchSelect)`
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

const StatusMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.gray_400};
  font-size: 16px;
  font-weight: 500;
`;
