import { useQuery } from "@tanstack/react-query";
import {
  getHarmonyExitStatistics,
  getServiceExitStatistics,
  type ExitStatisticItem,
} from "../shared/api/exitStatistics";

type ExitStatisticTab = "serviceLeave" | "roomClose";

type UseExitStatisticsQueryParams = {
  tab: ExitStatisticTab;
  searchType: string;
  startDay: string | null;
  endDay: string | null;
};

export function useExitStatisticsQuery({
  tab,
  searchType,
  startDay,
  endDay,
}: UseExitStatisticsQueryParams) {
  return useQuery<ExitStatisticItem[]>({
    queryKey: ["exitStatistics", tab, searchType, startDay, endDay],
    queryFn: () =>
      tab === "serviceLeave"
        ? getServiceExitStatistics({ searchType, startDay, endDay })
        : getHarmonyExitStatistics({ searchType, startDay, endDay }),
  });
}
