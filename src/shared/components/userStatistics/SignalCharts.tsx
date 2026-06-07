import styled from "styled-components";
import { SIGNAL_CHARTS } from "../../constants/chartConstants";
import type { SignalStatGroup } from "../../constants/mockData";
import SignalBarChart from "./SignalBarChart";

export default function SignalCharts({
  data,
  type,
}: {
  data: SignalStatGroup;
  type: String;
}) {
  return (
    <SignalGrid>
      {SIGNAL_CHARTS.map(({ key, title }) => (
        <SignalBarChart
          key={key}
          title={title}
          data={data[key]}
          type={type}
        />
      ))}
    </SignalGrid>
  );
}

const SignalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  height: 100%;
`;