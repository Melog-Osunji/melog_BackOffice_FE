import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../shared/ui/CommonButton";
import { theme } from "../shared/styles/theme";
import img from "../assets/react.svg";
import { LongSingleInput, MultiLineInput, ShortSingleInput } from "../shared/ui/InputField";
import { useState } from "react";
import Popup from "../shared/ui/Popup";


export default function HarmonyRoomDetailPage() {
    const { roomId } = useParams<{ roomId: string }>();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [name, setName] = useState("");

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleNext = () => {
      if (!title.trim() || !content.trim() || !name.trim()) return;

      setIsPopupOpen(true);
    };

    const handleClosePopup = () => setIsPopupOpen(false);

    const handleConfirmDelete = async () => {
      // 여기서 API 호출/삭제 처리하면 됨
      // await HarmonyRoomAPI.deleteRoom({ roomId, title, content, name })
      setIsPopupOpen(false);
    };


    return(
    <Container>
      <Header>
        <Title>상세 페이지</Title>
      </Header>
        <Section>
          <InfoBlock>
            <ProfileImgSection>
              <ProfileImg src={img}/>
            </ProfileImgSection>
            <InfoWrap>
              <InfoRow>
                <Label backgroundColor={theme.colors.blue_light} fontColor={theme.colors.blue_normal_active}>운영자</Label>
                <InfoText fontWeight="600">melog@gmail.com</InfoText>
              </InfoRow>
              <InfoRow>
                <Label>이름</Label>
                <InfoText>베토벤을 사랑하는 모임</InfoText>
              </InfoRow>
              <InfoRow>
                <Label>키워드</Label>
                <InfoText>#베토벤 #피아노</InfoText>
              </InfoRow>
              <InfoRow>
                <Label>활동내용</Label>
                <InfoText>베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임 베토벤 피아노를 연구하는 모임</InfoText>
              </InfoRow>
              <InfoRow>
                <Label>개설일</Label>
                <InfoText>2026.01.01</InfoText>
              </InfoRow>
            </InfoWrap>
          </InfoBlock>
          <DeleteForm>
            <SubTitle>삭제 요청</SubTitle>
            <FormWrap>
              <FormCol>
                <FormLabel>제목</FormLabel>
                <LongSingleInput
                  value={title}
                  onChange={setTitle}
                  placeholder="안녕하세요. 멜로그 서비스팀입니다."
                />
              </FormCol>
              <FormCol>
                <FormLabel>내용</FormLabel>
                <MultiLineInput
                  value={content}
                  onChange={setContent}
                  placeholder="내용을 입력해 주세요."
                />
              </FormCol>
              <FormRow>
                <FormLabel>담당자</FormLabel>
                <ShortSingleInput
                  value={name}
                  onChange={setName}
                  placeholder="이름"
                />
              </FormRow>
            </FormWrap>
          </DeleteForm>
        </Section>
        <ButtonWrap>
          <CommonButton label="임시저장" size="md" variant="ghost" />
          <CommonButton label="다음" size="md" variant="default"  onClick={handleNext}/>
        </ButtonWrap>

        <Popup
          open={isPopupOpen}
          onClose={handleClosePopup}
          cancelText="취소"
          confirmText="보내기 및 하모니룸 삭제"
          onConfirm={handleConfirmDelete}
          width={860}
        >
          <div>
            <p>계정</p>
            <p>melog@gmail.com</p>
          </div>
          
          <div>
            <p>제목</p>
            <p>{title || "-"}</p>
          </div>

          <div>
            <p>내용</p>
            <p>{content || "-"}</p>
          </div>
          
          <div>
            <p>담당자</p>
            <p>{name || "-"}</p>
          </div>
          
        </Popup>
    </Container>
    )
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

const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  justify-content: space-between;
  align-items: center;
`;

const InfoBlock = styled.div`
  width: 60%;
  padding: 30px 24px;
  background-color: ${({ theme }) => theme.colors.gray_100};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap:28px;
  `;

const ProfileImgSection = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.blue_normal};
`;

const ProfileImg = styled.img`
  width: 114px;
  height: 114px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.gray_100};
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 68px 1fr;
  gap: 14px;
`
const Label = styled.div<{backgroundColor?: string, fontColor?: string}>`
  height: 32px;
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.02em;
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.white};
  border-radius: 28px;
  padding: 2px 10px;
  color: ${({ fontColor, theme }) => fontColor || theme.colors.gray_400};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoText = styled.div<{fontWeight?: string}>`
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  line-height: 28px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.gray_500};
`;

const DeleteForm = styled.div`
  width: 100%;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:28px;
`;

const SubTitle = styled.p`
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.black};
  margin:0;
  padding:0;
`;

const FormWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

const FormLabel = styled.p`
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: ${({theme }) => theme.colors.gray_600};
  margin:0;
  padding:0;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;