import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { Y_AXIS_TICKS } from "../../constants/chartConstants";
import { MOCK_USER_STATISTICS } from "../../constants/mockData";
import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export default function WithdrawalRateChart() {
    const { withdrawalRate } = MOCK_USER_STATISTICS;
  
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={withdrawalRate}
          margin={{ top: 8, right: 12, left: 0, bottom: 24 }}
        >
          <CartesianGrid vertical={false} stroke={theme.colors.gray_200} />
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            tick={{ fill: theme.colors.gray_500, fontSize: 12 }}
          />
          <YAxis
            domain={[0, 1000]}
            ticks={Y_AXIS_TICKS}
            tickLine={false}
            axisLine={false}
            tick={{ fill: theme.colors.gray_200, fontSize: 12 }}
          />
          <Tooltip
            formatter={(value: number, name: string) => [
              `${value}명`,
              name,
            ]}
            contentStyle={{
              borderRadius: 12,
              border: `1px solid  ${theme.colors.gray_200}`,
              boxShadow: "0 12px 24px rgba(16, 24, 40, 0.08)",
            }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            formatter={(value) => <LegendText>{value}</LegendText>}
          />
          <Line
            type="linear"
            dataKey="cumulativeLogin"
            name="누적 로그인 수"
            stroke={theme.colors.blue_normal}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="linear"
            dataKey="cumulativeWithdrawal"
            name="누적 탈퇴 수"
            stroke={theme.colors.error_100}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }


const LegendText = styled.span`
  color: ${({ theme }) => theme.colors.gray_500};
  font-size: 14px;
`;