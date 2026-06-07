import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Cell } from "recharts";
import styled from "styled-components";
import { SIGNAL_Y_AXIS_TICKS, TOOLTIP_STYLE } from "../../constants/chartConstants";
import type { SignalBarItem } from "../../constants/mockData";
import { theme } from "../../styles/theme";

type Props = {
    title: string;
    data: SignalBarItem[];
    type?: string;
  };


export default function SignalBarChart({
    title,
    data,
    type,
  }: {
    title: string;
    data: SignalBarItem[];
    type: String;
  }) {
    console.log(title, data.length);
    console.log(title, data);
    return (
      <MiniChartWrap>
        <MiniChartTitle>{title}</MiniChartTitle>
        <MiniChartArea>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 8, right: 8, left: 0, bottom: 8 }}
              barCategoryGap={24}
            >
              <CartesianGrid vertical={false} stroke={theme.colors.gray_200} />
              <XAxis
                dataKey="label"
                tickLine={false}
                axisLine={false}
                interval={0}
                tick={{ fill: theme.colors.gray_500, fontSize: 11 }}
              />
              <YAxis
                domain={[0, 500]}
                ticks={SIGNAL_Y_AXIS_TICKS}
                tickLine={false}
                axisLine={false}
                tick={{ fill: theme.colors.gray_200, fontSize: 11 }}
              />
              <Tooltip
                formatter={(value: number) => [`${value}건`, "건수"]}
                cursor={{ fill: "rgba(117, 199, 234, 0.08)" }}
                contentStyle={TOOLTIP_STYLE}
              />
              <Bar dataKey="count" radius={[2, 2, 0, 0]} maxBarSize={34}>
                {data.map((entry) => (
                  <Cell key={entry.label} fill={type === "positive" ? theme.colors.blue_normal : theme.colors.error_100} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </MiniChartArea>
      </MiniChartWrap>
    );
  }
  
  const MiniChartWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
`;

const MiniChartTitle = styled.h4`
  margin: 0 0 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const MiniChartArea = styled.div`
  flex: 1;
  min-height: 0;
`;
