import styled from "styled-components";
import chevronUp from "../../assets/icons/ChevronUp.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemCount?: number;
  itemsPerPage?: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemCount = 0,
  itemsPerPage = 10,
}: PaginationProps) {

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <Container>
      <PaginationButtons>
        <NavButton onClick={handlePrevious} disabled={currentPage === 1}>
          <ChevronIcon src={chevronUp} alt="previous" isLeft />
        </NavButton>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PageButton
            key={page}
            isActive={currentPage === page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        ))}

        <NavButton onClick={handleNext} disabled={currentPage === totalPages}>
          <ChevronIcon src={chevronUp} alt="next" />
        </NavButton>
      </PaginationButtons>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  height: 40px;
`;

const PaginationButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
`;

const NavButton = styled.button<{ disabled: boolean }>`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const PageButton = styled.button<{ isActive: boolean }>`
padding: 0; 
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.black
      : props.theme.colors.gray_400};
  cursor: pointer;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: ${(props) => (props.isActive ? 600 : 400)};

  &:hover {
    color: ${(props) => props.theme.colors.blue_normal};
  }
`;

const ChevronIcon = styled.img<{ isLeft?: boolean }>`
  width: 24px;
  height: 24px;
  transform: ${(props) => (props.isLeft ? "rotate(-90deg)" : "rotate(90deg)")};
`;