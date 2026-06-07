import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { MOCK_USER_STATISTICS } from "../../constants/mockData";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export default function FeatureUsageChart() {
    const { featureUsage } = MOCK_USER_STATISTICS;
  
    return (
      <FeatureChartWrap>
        <ChartTitle>누적 사용량 통계</ChartTitle>
        <DonutWrap>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={featureUsage.items}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="48%"
                innerRadius={88}
                outerRadius={132}
                paddingAngle={1}
                labelLine={false}
              >
                {featureUsage.items.map((entry) => (
                  <Cell key={entry.name} fill={theme.colors[entry.colorKey]} stroke="none" />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value}명`, "사용량"]}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid #BDCAD8",
                  boxShadow: "0 12px 24px rgba(16, 24, 40, 0.08)",
                }}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                formatter={(value) => <LegendText>{value}</LegendText>}
              />
            </PieChart>
          </ResponsiveContainer>
          <CenterLabel>
            <CenterSubText>누적 사용량</CenterSubText>
            <CenterValue>{featureUsage.totalUsage.toLocaleString()}명</CenterValue>
          </CenterLabel>
        </DonutWrap>
      </FeatureChartWrap>
    );
  }

const FeatureChartWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const DonutWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  min-height: 0;
`;

const ChartTitle = styled.h3`
  margin: 0 0 8px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const CenterLabel = styled.div`
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  pointer-events: none;
`;

const CenterSubText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray_400};
`;

const CenterValue = styled.strong`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const LegendText = styled.span`
  color: ${({ theme }) => theme.colors.gray_500};
  font-size: 14px;
`;