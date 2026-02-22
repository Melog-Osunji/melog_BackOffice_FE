import { useEffect, useMemo } from "react";
import styled from "styled-components";
import type { DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import Pagination from "../shared/ui/Pagination";
import { TableSection, TableHeader, TableBody, TableRow, TableCol } from "../shared/styles/Table";
import { useCalendarStore } from "../shared/stores/calendar.store";
import { MOCK_CALENDAR } from "../shared/constants/mockData";
import CustomCalendar from "../shared/ui/CustomCalendar";

const ITEMS_PER_PAGE = 7;
const COLUMNS = "1fr 160px 160px 120px";

function parseDotDate(dot: string) {
  // "2026.01.01" -> Date
  const [y, m, d] = dot.split(".").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

function formatDot(d?: Date) {
  if (!d) return "";
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
}

function inRange(dotDate: string, range: DateRange | undefined) {
  if (!range?.from && !range?.to) return true;

  const target = parseDotDate(dotDate);
  target.setHours(0, 0, 0, 0);

  const from = range.from ? new Date(range.from) : undefined;
  const to = range.to ? new Date(range.to) : undefined;
  from?.setHours(0, 0, 0, 0);
  to?.setHours(0, 0, 0, 0);

  if (from && !to) return target.getTime() === from.getTime();
  if (!from && to) return target.getTime() === to.getTime();
  return !!(from && to && target >= from && target <= to);
}

export default function CalendarPage() {
  const {
    calendars,
    currentPage,
    category,
    searchTerm,
    selectedRange,
    setCalendars,
    setCurrentPage,
    setCategory,
    setSearchTerm,
    setSelectedRange,
  } = useCalendarStore();

  useEffect(() => {
    setCalendars(MOCK_CALENDAR);
  }, [setCalendars]);

  /** 카테고리 옵션: "전체" + 데이터에서 유니크 추출 */
  const categoryOptions = useMemo(() => {
    const unique = Array.from(new Set(calendars.map((c) => c.category)));
    return ["전체", ...unique];
  }, [calendars]);

  const filtered = useMemo(() => {
    const s = searchTerm.trim().toLowerCase();

    return calendars.filter((c) => {
      const okCategory = category === "전체" ? true : c.category === category;
      const okSearch = !s ? true : c.name.toLowerCase().includes(s);
      const okDate = inRange(c.date, selectedRange);
      return okCategory && okSearch && okDate;
    });
  }, [calendars, category, searchTerm, selectedRange]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

  const rangeText = useMemo(() => {
    const from = selectedRange?.from ? formatDot(selectedRange.from) : "----.--.--";
    const to = selectedRange?.to ? formatDot(selectedRange.to) : "----.--.--";
    return `${from} - ${to}`;
  }, [selectedRange]);

  return (
    <Page>
      {/* 왼쪽 리스트 */}
      <Left>
        <Header>
          <Title>캘린더</Title>
        </Header>

        <TableSection>
          <TableHeader columns={COLUMNS}>
            <TableCol>공연 제목</TableCol>
            <TableCol>카테고리</TableCol>
            <TableCol>날짜</TableCol>
            <TableCol>저장 수</TableCol>
          </TableHeader>

          <TableBody>
            {paginated.map((c) => (
              <TableRow key={c.id} columns={COLUMNS}>
                <EllipsisCol title={c.name}>{c.name}</EllipsisCol>
                <TableCol>{c.category}</TableCol>
                <TableCol>{c.date}</TableCol>
                <TableCol>{c.bookmarks}</TableCol>
              </TableRow>
            ))}
          </TableBody>
        </TableSection>

        <PaginationWrap>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemCount={filtered.length}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={setCurrentPage}
          />
        </PaginationWrap>
      </Left>

      {/* 오른쪽 달력 */}
      <Right>
        <SideCard>
          <SideTitle>날짜</SideTitle>

          <SideBlock>
            <BlockLabel>달력</BlockLabel>
            <RangeText>{rangeText}</RangeText>

            <CustomCalendar
                selectedRange={selectedRange}
                onSelect={(range) => setSelectedRange(range)}
            />
          </SideBlock>
        </SideCard>
      </Right>
    </Page>
  );
}

const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  gap: 28px;
  padding: 24px 32px;
  background: ${({ theme }) => theme.colors.white};
`;

const Line = styled.div`
  width: 20px;
  background: ${({ theme }) => theme.colors.bg};
`

const Left = styled.div`
  min-width: 0;
`;

const Right = styled.div`
  border-left: 24px solid ${({ theme }) => theme.colors.bg};
  padding-left: 32px;
  width: 312px;
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

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
`;

const EllipsisCol = styled(TableCol)`
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

/* ---------- Right Panel ---------- */

const SideCard = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const SideTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;

const SideBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BlockLabel = styled.div`
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray_600};
`;

const RangeText = styled.div`
  font-family: "Pretendard";
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray_400};
  margin-bottom: 14px;
`;