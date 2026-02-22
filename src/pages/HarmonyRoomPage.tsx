import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useHarmonyStore } from "../shared/stores/harmony.store";
import { MOCK_HARMONYROOM } from "../shared/constants/mockData";

import SearchInput from "../shared/ui/SearchInput";
import SearchSelect from "../shared/ui/SearchSelect";
import CommonButton from "../shared/ui/CommonButton";
import Pagination from "../shared/ui/Pagination";
import { TableSection, TableHeader, TableBody, TableRow, TableCol } from "../shared/styles/Table";

import chevronUp from "../assets/icons/ChevronUp.svg";
import check from "../assets/icons/CheckIcon.svg";

const ITEMS_PER_PAGE = 7;

const COLUMNS = "200px 150px 1fr 120px";


export default function HarmonyRoomPage() {
  const navigate = useNavigate();
  const {
    rooms,
    currentPage,
    filterType,
    searchTerm,
    setRooms,
    setCurrentPage,
    setFilterType,
    setSearchTerm,
  } = useHarmonyStore();

  useEffect(() => {
    setRooms(MOCK_HARMONYROOM);
  }, [setRooms]);

  const filtered = useMemo(() => {
    return rooms.filter((r) => {
      if (!searchTerm) return true;
      const s = searchTerm.toLowerCase();
      const nick = r.nickname.toLowerCase();
      const room = r.roomName.toLowerCase();
      switch (filterType) {
        case "닉네임":
          return nick.includes(s);
        case "하모니룸 이름":
          return room.includes(s);
        case "닉네임 + 하모니룸 이름":
          return nick.includes(s) || room.includes(s);
        default:
          return true;
      }
    });
  }, [rooms, searchTerm, filterType]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const handleDetail = (roomId: number) => {
    navigate(`/harmonyrooms/${roomId}`);
  };

  return (
    <Container>
      <Header>
        <Title>하모니룸 관리</Title>
      </Header>

      <FilterSection>
        <SearchSelect
          options={[
            { label: "닉네임", value: "닉네임" },
            { label: "하모니룸 이름", value: "하모니룸 이름" },
            { label: "닉네임 + 하모니룸 이름", value: "닉네임 + 하모니룸 이름" },
          ]}
          value={filterType}
          onChange={(v) => setFilterType(v as any)}
          placeholder="검색"
          size={"lg"}
          chevronUpIcon={chevronUp}
          chevronDownIcon={chevronUp}
          checkIcon={check}
        />

        <SearchInput placeholder="검색" value={searchTerm} on-Change={setSearchTerm} />

        <div />
      </FilterSection>

      <TableSection>
        <TableHeader columns={COLUMNS}>
          <TableCol>닉네임</TableCol>
          <TableCol>구분</TableCol>
          <TableCol>하모니룸 이름</TableCol>
          <TableCol/>
        </TableHeader>

        <TableBody>
          {paginated.map((r) => (
            <TableRow key={r.id} columns={COLUMNS}>
              <TableCol>{r.nickname}</TableCol>
              <TableCol>{r.role === "owner" ? "운영자" : "일반 회원"}</TableCol>
              <TableCol>{r.roomName}</TableCol>
              <TableCol>
                {r.role === "owner" && (
                  <CommonButton label="자세히 보기" variant="ghostGray" size="md" onClick={() => handleDetail(r.roomId)} />
                )}
              </TableCol>
            </TableRow>
          ))}
        </TableBody>
      </TableSection>

      <PaginationWrapper>
        <Pagination currentPage={currentPage} totalPages={totalPages} itemCount={filtered.length} itemsPerPage={ITEMS_PER_PAGE} onPageChange={setCurrentPage} />
      </PaginationWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 72px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 24px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
