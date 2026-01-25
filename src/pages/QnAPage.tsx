import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import SearchInput from "../shared/ui/SearchInput";
import SearchSelect from "../shared/ui/SearchSelect";
import CommonButton from "../shared/ui/CommonButton";
import Pagination from "../shared/ui/Pagination";
import { StyledCheckbox, TableSection, TableHeader, TableBody, TableRow, TableCol} from "../shared/styles/Table";
import { MOCK_QNAS, type QnA } from "../shared/constants/mockData";
import TableFilter from "../shared/ui/TableFilter";

import chevronUp from "../assets/icons/ChevronUp.svg";
import check from "../assets/icons/CheckIcon.svg";
import checkBoxActive from "../assets/icons/CheckBoxActivate.svg";
import checkBox from "../assets/icons/CheckBox.svg";
import deleteIcon from "../assets/icons/Delete.svg";
import upTriangle from "../assets/icons/UpTriangle.svg";

const ITEMS_PER_PAGE = 7;

export default function QnAPage() {
  const [qnas, setQnas] = useState<QnA[]>([]);
  const [selectedQnas, setSelectedQnas] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("이름");
  const [categoryFilter, setCategoryFilter] = useState<string[]>([
    "서비스 문의",
    "기능 제안",
    "기타",
  ]);

  useEffect(() => {
    setQnas(MOCK_QNAS);
  }, []);

  const filteredQnas = useMemo(() => {
    return qnas.filter((qna) => {
      let matchesSearch = true;
      let matchesCategory = true;

      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        switch (filterType) {
          case "이름":
            matchesSearch = qna.name.toLowerCase().includes(searchLower);
            break;
          case "이메일":
            matchesSearch = qna.email.toLowerCase().includes(searchLower);
            break;
          case "이름 + 이메일":
            matchesSearch =
              qna.name.toLowerCase().includes(searchLower) ||
              qna.email.toLowerCase().includes(searchLower);
            break;
        }
      }

      if (categoryFilter.length > 0) {
        matchesCategory = categoryFilter.includes(qna.category);
      }

      return matchesSearch && matchesCategory;
    });
  }, [qnas, searchTerm, filterType, categoryFilter]);

  const paginatedQnas = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredQnas.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredQnas, currentPage]);

  const totalPages = Math.ceil(filteredQnas.length / ITEMS_PER_PAGE);
  const paginatedQnaIds = paginatedQnas.map((qna) => qna.id);
  const isAllSelected =
    paginatedQnaIds.length > 0 &&
    paginatedQnaIds.every((id) => selectedQnas.includes(id));

  const toggleSelectAll = (ids: number[]) => {
    if (isAllSelected) {
      setSelectedQnas(selectedQnas.filter((id) => !ids.includes(id)));
    } else {
      setSelectedQnas([...selectedQnas, ...ids.filter((id) => !selectedQnas.includes(id))]);
    }
  };

  const toggleSelectQna = (id: number) => {
    setSelectedQnas((prev) =>
      prev.includes(id) ? prev.filter((qnaId) => qnaId !== id) : [...prev, id]
    );
  };

  return (
    <Container>
      <Header>
        <Title>1:1문의</Title>
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
          placeholder="검색 유형"
          size="lg"
          chevronUpIcon={chevronUp}
          chevronDownIcon={chevronUp}
          checkIcon={check}
        />
        <CommonButton
          label={`${selectedQnas.length}개 삭제`}
          variant="outline"
          size="sm"
          icon={deleteIcon}
          iconPosition="right"
          onClick={() => {
            setQnas(qnas.filter((qna) => !selectedQnas.includes(qna.id)));
            setSelectedQnas([]);
          }}
        />
      </FilterSection>

      <TableSection>
        <TableHeader>
          <TableCol width="50px">
            <StyledCheckbox
              src={isAllSelected ? checkBoxActive : checkBox}
              alt="select all"
              onClick={() => toggleSelectAll(paginatedQnaIds)}
            />
          </TableCol>
          <TableCol width="100px">이름</TableCol>
          <TableCol width="180px">이메일</TableCol>
          <TableCol width="160px">
            <TableFilter
              options={[
                { label: "서비스 문의", value: "서비스 문의" },
                { label: "기능 제안", value: "기능 제안" },
                { label: "기타", value: "기타" },
              ]}
              value={categoryFilter}
              onChange={setCategoryFilter}
              placeholder="문의 유형"
              upIcon={upTriangle}
              checkIcon={check}
            />
          </TableCol>
          <TableCol width="350px">내용</TableCol>
          <TableCol width="150px">날짜</TableCol>
          <TableCol width="100px">상태</TableCol>
        </TableHeader>

        <TableBody>
          {paginatedQnas.map((qna) => (
            <TableRow key={qna.id}>
              <TableCol width="50px">
                <StyledCheckbox
                  src={
                    selectedQnas.includes(qna.id) ? checkBoxActive : checkBox
                  }
                  alt="select"
                  onClick={() => toggleSelectQna(qna.id)}
                />
              </TableCol>
              <TableCol width="100px">{qna.name}</TableCol>
              <TableCol width="180px">{qna.email}</TableCol>
              <TableCol width="160px">{qna.category}</TableCol>
              <TableCol width="350px">{qna.content}</TableCol>
              <TableCol width="150px">{qna.date}</TableCol>
              <TableCol width="100px">
                <CommonButton label={qna.status} size="sm" variant={qna.status === "답변완료" ? "ghost" : "default"}/>
              </TableCol>
            </TableRow>
          ))}
        </TableBody>
      </TableSection>

      <PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemCount={filteredQnas.length}
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