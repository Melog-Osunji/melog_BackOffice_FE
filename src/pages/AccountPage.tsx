import { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useAccountStore } from "../shared/stores/account.store";
import { MOCK_ACCOUNTS } from "../shared/constants/mockData";

import SearchInput from "../shared/ui/SearchInput";
import SearchSelect from "../shared/ui/SearchSelect";
import CommonButton from "../shared/ui/CommonButton";
import Pagination from "../shared/ui/Pagination";
import { StyledCheckbox, TableSection, TableHeader, TableBody, TableRow, TableCol} from "../shared/styles/Table";

import chevronUp from "../assets/icons/ChevronUp.svg";
import check from "../assets/icons/CheckIcon.svg";
import checkBoxActive from "../assets/icons/CheckBoxActivate.svg";
import checkBox from "../assets/icons/CheckBox.svg";
import deleteIcon from "../assets/icons/Delete.svg";

const ITEMS_PER_PAGE = 7;

export default function AccountPage() {
  const {
    selectedAccounts,
    accounts,
    currentPage,
    filterType,
    searchTerm,
    toggleSelectAccount,
    toggleSelectAll,
    setCurrentPage,
    setFilterType,
    setSearchTerm,
    setAccounts,
    deleteAccounts,
  } = useAccountStore();

  // 초기 목업 데이터 로드
  useEffect(() => {
    setAccounts(MOCK_ACCOUNTS);
  }, [setAccounts]);

  // 필터링 및 검색
  const filteredAccounts = useMemo(() => {
    return accounts.filter((account) => {
      if (!searchTerm) return true;

      const searchLower = searchTerm.toLowerCase();
      const nameLower = account.name.toLowerCase();
      const emailLower = account.email.toLowerCase();

      switch (filterType) {
        case "이름":
          return nameLower.includes(searchLower);
        case "이메일":
          return emailLower.includes(searchLower);
        case "이름 + 이메일":
          return (
            nameLower.includes(searchLower) || emailLower.includes(searchLower)
          );
        default:
          return true;
      }
    });
  }, [accounts, searchTerm, filterType]);

  // 페이지네이션
  const paginatedAccounts = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAccounts.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredAccounts, currentPage]);

  const totalPages = Math.ceil(filteredAccounts.length / ITEMS_PER_PAGE);
  const paginatedAccountIds = paginatedAccounts.map((acc) => acc.id);
  const isAllSelected =
    paginatedAccountIds.length > 0 &&
    paginatedAccountIds.every((id) => selectedAccounts.includes(id));

  const handleDelete = () => {
    deleteAccounts(selectedAccounts);
  };

  return (
    <Container>
      <Header>
        <Title>계정 관리</Title>
      </Header>

      <FilterSection>
        <SearchInput
          placeholder="검색"
          value={searchTerm}
          on-Change={setSearchTerm}
        />
        <SearchSelect
          options={[
            { label: "이름", value: "이름" },
            { label: "이메일", value: "이메일" },
            { label: "이름 + 이메일", value: "이름 + 이메일" },
          ]}
          value={filterType}
          onChange={(value) => setFilterType(value as any)}
          placeholder="소셜 로그인" 
          size={"lg"}
          chevronUpIcon={chevronUp}
          chevronDownIcon={chevronUp}
          checkIcon={check}  
          />
          <CommonButton
            label={`${selectedAccounts.length}개 삭제`}
            variant="outline"
            size="sm"
            icon={deleteIcon}
            iconPosition="right"
            onClick={handleDelete}
          />
      </FilterSection>

      <TableSection>
        <TableHeader>
           <TableCol width="50px">
            <StyledCheckbox
              src={isAllSelected ? checkBoxActive : checkBox}
              alt="select all"
              onClick={() => toggleSelectAll(paginatedAccountIds)}
            />
          </TableCol>
          <TableCol width="150px">이름</TableCol>
          <TableCol width="250px">이메일</TableCol>
        </TableHeader>

        <TableBody>
          {paginatedAccounts.map((account) => (
            <TableRow key={account.id}>
              <TableCol width="50px">
                <StyledCheckbox
                  src={
                    selectedAccounts.includes(account.id)
                      ? checkBoxActive
                      : checkBox
                  }
                  alt="select"
                  onClick={() => toggleSelectAccount(account.id)}
                />
              </TableCol>
              <TableCol width="150px">{account.name}</TableCol>
              <TableCol width="250px">{account.email}</TableCol>
            </TableRow>
          ))}
        </TableBody>
      </TableSection>
      <PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemCount={filteredAccounts.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
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
