import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  useAlarmStore,
  type AlarmStatus,
  type CategoryFilter,
} from "../shared/stores/alarm.store";
import { MOCK_ALARMS } from "../shared/constants/mockData";

import SearchInput from "../shared/ui/SearchInput";
import SearchSelect from "../shared/ui/SearchSelect";
import CommonButton from "../shared/ui/CommonButton";
import Pagination from "../shared/ui/Pagination";
import {
  StyledCheckbox,
  TableSection,
  TableHeader,
  TableBody,
  TableRow,
  TableCol,
} from "../shared/styles/Table";

import chevronUp from "../assets/icons/ChevronUp.svg";
import check from "../assets/icons/CheckIcon.svg";
import checkBoxActive from "../assets/icons/CheckBoxActivate.svg";
import checkBox from "../assets/icons/CheckBox.svg";
import deleteIcon from "../assets/icons/Delete.svg";
import editIcon from "../assets/icons/EditIcon.svg";

const ITEMS_PER_PAGE = 7;
const COLUMNS = "50px 100px 120px 1fr 300px 88px";

const CATEGORY_OPTIONS: { label: string; value: CategoryFilter }[] = [
  { label: "전체", value: "전체" },
  { label: "공지사항", value: "공지사항" },
  { label: "이벤트", value: "이벤트" },
  { label: "알림", value: "알림" },
];

function getStatusVariant(status: AlarmStatus) {
  switch (status) {
    case "노출":
      return "default" as const;
    case "예정":
      return "outline" as const;
    case "완료":
      return "ghost" as const;
  }
}

export default function AlarmPage() {
  const navigate = useNavigate();
  const {
    selectedAlarms,
    alarms,
    currentPage,
    categoryFilter,
    searchTerm,
    toggleSelectAlarm,
    toggleSelectAll,
    setCurrentPage,
    setCategoryFilter,
    setSearchTerm,
    setAlarms,
    deleteAlarms,
  } = useAlarmStore();

  useEffect(() => {
    setAlarms(MOCK_ALARMS);
  }, [setAlarms]);

  const filteredAlarms = useMemo(() => {
    const searchLower = searchTerm.trim().toLowerCase();

    return alarms.filter((alarm) => {
      const matchesCategory =
        categoryFilter === "전체" || alarm.category === categoryFilter;

      const matchesSearch =
        !searchLower ||
        alarm.author.toLowerCase().includes(searchLower) ||
        alarm.title.toLowerCase().includes(searchLower);

      return matchesCategory && matchesSearch;
    });
  }, [alarms, categoryFilter, searchTerm]);

  const paginatedAlarms = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAlarms.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredAlarms, currentPage]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAlarms.length / ITEMS_PER_PAGE)
  );
  const paginatedAlarmIds = paginatedAlarms.map((alarm) => alarm.id);
  const isAllSelected =
    paginatedAlarmIds.length > 0 &&
    paginatedAlarmIds.every((id) => selectedAlarms.includes(id));

  const handleDelete = () => {
    if (selectedAlarms.length === 0) return;
    deleteAlarms(selectedAlarms);
  };

  const handleEdit = () => {
    if (selectedAlarms.length !== 1) return;
    navigate(`/alarm/${selectedAlarms[0]}`);
  };

  return (
    <Container>
      <Header>
        <Title>알림</Title>
      </Header>

      <FilterSection>
        <SearchSelect
          options={CATEGORY_OPTIONS}
          value={categoryFilter}
          onChange={(value) => setCategoryFilter(value as CategoryFilter)}
          placeholder="검색"
          size="lg"
          chevronUpIcon={chevronUp}
          chevronDownIcon={chevronUp}
          checkIcon={check}
        />

        <SearchInput
          placeholder="검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ActionButtons>
          <IconButton
            type="button"
            aria-label="삭제"
            onClick={handleDelete}
            disabled={selectedAlarms.length === 0}
          >
            <Icon src={deleteIcon} alt="delete" />
          </IconButton>
          <IconButton
            type="button"
            aria-label="수정"
            onClick={handleEdit}
            disabled={selectedAlarms.length !== 1}
          >
            <Icon src={editIcon} alt="edit" />
          </IconButton>
        </ActionButtons>
      </FilterSection>

      <TableSection>
        <TableHeader columns={COLUMNS}>
          <TableCol>
            <StyledCheckbox
              src={isAllSelected ? checkBoxActive : checkBox}
              alt="select all"
              onClick={() => toggleSelectAll(paginatedAlarmIds)}
            />
          </TableCol>
          <TableCol>작성자</TableCol>
          <TableCol>옵션</TableCol>
          <TableCol>제목</TableCol>
          <TableCol />
          <StatusCol>상태</StatusCol>
        </TableHeader>

        <TableBody>
          {paginatedAlarms.map((alarm) => {
            const isSelected = selectedAlarms.includes(alarm.id);

            return (
              <AlarmTableRow
                key={alarm.id}
                columns={COLUMNS}
                $selected={isSelected}
              >
                <TableCol>
                  <StyledCheckbox
                    src={isSelected ? checkBoxActive : checkBox}
                    alt="select"
                    onClick={() => toggleSelectAlarm(alarm.id)}
                  />
                </TableCol>
                <TableCol>{alarm.author}</TableCol>
                <TableCol>{alarm.category}</TableCol>
                <TableCol ellipsis>{alarm.title}</TableCol>
                <TableCol fontSize="13px">
                  {alarm.startDate} ~ {alarm.endDate}
                </TableCol>
                <StatusCol>
                  <StatusButtonWrap>
                    <CommonButton
                      label={alarm.status}
                      size="sm"
                      variant={getStatusVariant(alarm.status)}
                    />
                  </StatusButtonWrap>
                </StatusCol>
              </AlarmTableRow>
            );
          })}
        </TableBody>
      </TableSection>

      <PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemCount={filteredAlarms.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </PaginationWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 32px;
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

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray_400};

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.gray_100};
  }
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
`;

const StatusCol = styled(TableCol)`
  width: 100%;
`;

const StatusButtonWrap = styled.div`
  width: 100%;

  & > button {
    width: 100%;
    justify-content: center;
  }
`;

const AlarmTableRow = styled(TableRow)<{ $selected?: boolean }>`
  background-color: ${({ $selected, theme }) =>
    $selected ? theme.colors.blue_pale : theme.colors.white};
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
