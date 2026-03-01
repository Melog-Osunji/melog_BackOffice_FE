import { api } from "./axios";

export type ExitStatisticDivision = string;

export type ExitStatisticItem = {
  division: ExitStatisticDivision;
  num: number;
};

type ExitStatisticResponse = {
  success: boolean;
  code: number;
  message: string;
  data: ExitStatisticItem[];
};

export type ExitStatisticParams = {
  searchType: string;
  startDay: string | null;
  endDay: string | null;
};

// GET /api/admin/exit/service : 서비스 탈퇴 통계 조회
export async function getServiceExitStatistics(params: ExitStatisticParams) {
  const response = await api.request<ExitStatisticResponse>({
    method: "GET",
    url: "/api/admin/exit/service",
    params: { searchType: params.searchType },
    data: {
      startDay: params.startDay,
      endDay: params.endDay,
    },
  });

  return response.data.data ?? [];
}

// GET /api/admin/exit/haramony : 하모니룸 폐쇄 통계 조회
export async function getHarmonyExitStatistics(params: ExitStatisticParams) {
  const response = await api.request<ExitStatisticResponse>({
    method: "GET",
    url: "/api/admin/exit/haramony",
    params: { searchType: params.searchType },
    data: {
      startDay: params.startDay,
      endDay: params.endDay,
    },
  });

  return response.data.data ?? [];
}
