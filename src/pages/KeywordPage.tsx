import { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useKeywordStore } from "../shared/stores/keyword.store";
import { MOCK_KEYWORDS } from "../shared/constants/mockData";

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

const COLUMNS = "50px 150px 150px 1fr";


export default function KeywordPage() {
  const {
    selectedKeywords,
    keywords,
    currentPage,
    filterType,
    searchTerm,
    toggleSelectKeyword,
    toggleSelectAll,
    setCurrentPage,
    setFilterType,
    setSearchTerm,
    setKeywords,
    deleteKeywords,
  } = useKeywordStore();

  useEffect(() => {
    setKeywords(MOCK_KEYWORDS);
  }, [setKeywords]);

  const filteredKeywords = useMemo(() => {
    return keywords.filter((kw) => {
      if (!searchTerm) return true;

      const searchLower = searchTerm.toLowerCase();
      const nameLower = kw.name.toLowerCase();
      const categoryLower = kw.category.toLowerCase();

      switch (filterType) {
        case "이름":
          return nameLower.includes(searchLower);
        case "구분":
          return categoryLower.includes(searchLower);
        case "키워드":
          return (
            nameLower.includes(searchLower) || categoryLower.includes(searchLower)
          );
        default:
          return true;
      }
    });
  }, [keywords, searchTerm, filterType]);

  const paginatedKeywords = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredKeywords.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredKeywords, currentPage]);

  const totalPages = Math.ceil(filteredKeywords.length / ITEMS_PER_PAGE);
  const paginatedKeywordIds = paginatedKeywords.map((k) => k.id);
  const isAllSelected =
    paginatedKeywordIds.length > 0 &&
    paginatedKeywordIds.every((id) => selectedKeywords.includes(id));

  const handleDelete = () => {
    deleteKeywords(selectedKeywords);
  };

  return (
    <Container>
      <Header>
        <Title>키워드 관리</Title>
      </Header>

      <FilterSection>
        <SearchSelect
          options={[
            { label: "이름", value: "이름" },
            { label: "구분", value: "구분" },
            { label: "키워드", value: "키워드" },
          ]}
          value={filterType}
          onChange={(value) => setFilterType(value as any)}
          placeholder="키워드"
          size={"lg"}
          chevronUpIcon={chevronUp}
          chevronDownIcon={chevronUp}
          checkIcon={check}
        />

        <SearchInput
          placeholder="검색"
          value={searchTerm}
          on-Change={setSearchTerm}
        />

        <CommonButton
          label={`${selectedKeywords.length}개 삭제`}
          variant="outline"
          size="sm"
          icon={deleteIcon}
          iconPosition="right"
          onClick={handleDelete}
        />
      </FilterSection>

      <TableSection>
        <TableHeader columns={COLUMNS}>
          <TableCol>
            <StyledCheckbox
              src={isAllSelected ? checkBoxActive : checkBox}
              alt="select all"
              onClick={() => toggleSelectAll(paginatedKeywordIds)}
            />
          </TableCol>
          <TableCol>이름</TableCol>
          <TableCol>구분</TableCol>
          <TableCol>데이터</TableCol>
        </TableHeader>

        <TableBody>
          {paginatedKeywords.map((kw) => (
            <TableRow key={kw.id} columns={COLUMNS}>
              <TableCol >
                <StyledCheckbox
                  src={
                    selectedKeywords.includes(kw.id) ? checkBoxActive : checkBox
                  }
                  alt="select"
                  onClick={() => toggleSelectKeyword(kw.id)}
                />
              </TableCol>
              <TableCol>{kw.name}</TableCol>
              <TableCol>{kw.category}</TableCol>
              <TableCol>{kw.keywords.join(", ")}</TableCol>
            </TableRow>
          ))}
        </TableBody>
      </TableSection>

      <PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemCount={filteredKeywords.length}
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
