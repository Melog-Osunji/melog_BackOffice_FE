import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts";
import { Y_AXIS_TICKS } from "../../constants/chartConstants";
import { MOCK_USER_STATISTICS } from "../../constants/mockData";
import { theme } from "../../styles/theme";

export default function UsageTimeChart() {
    const { usageTime } = MOCK_USER_STATISTICS;
  
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={usageTime}
          margin={{ top: 8, right: 12, left: 0, bottom: 8 }}
        >
          <CartesianGrid vertical={false} stroke={theme.colors.gray_200} />
          <XAxis
            dataKey="hour"
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
            formatter={(value: number) => [`${value}명`, "사용자"]}
            contentStyle={{
              borderRadius: 12,
              border: `1px solid ${theme.colors.gray_200}`,
              boxShadow: "0 12px 24px rgba(16, 24, 40, 0.08)",
            }}
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke= {theme.colors.blue_normal}
            strokeWidth={2}
            dot={{ r: 4, fill: theme.colors.blue_normal, strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  