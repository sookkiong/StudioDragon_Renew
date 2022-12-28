import styled from "styled-components";
import { useState } from "react";
import { Works } from "../components/Contents";

const Contents = () => {
  const [category, setCategory] = useState("방영작 전체");
  const [on, setOn] = useState(false);
  const [poster, setPoster] = useState("all");
  const onItem = () => {
    const id = on === true ? "arrow" : undefined;
    return id;
  };

  return (
    <>
      <PageTop>
        <TopTextbox>
          <PageTitle>CONTENTS</PageTitle>
          <PageExplain>
            스튜디오 드래곤은 웰메이드 드라마 제작을 통한 국내 드라마 콘텐츠의
            질적 향상을 추구합니다.
          </PageExplain>
        </TopTextbox>
      </PageTop>

      <ContentsWrap>
        <ContentsTop>
          <div style={{ position: "absolute", left: "0", lineHeight: "50px" }}>
            스튜디오 드래곤의 웰메이드 작품들을 한눈에 볼 수 있습니다.
          </div>
          <div
            style={{
              width: "220px",
              position: "absolute",
              right: "0",
              zIndex: "10",
            }}
          >
            <ItemText id={onItem()} onClick={() => setOn(!on)}>
              {category}
            </ItemText>
            {on === true ? (
              <Categorys>
                <Item
                  onClick={() => {
                    setCategory("방영작 전체");
                    setOn(!on);
                    setPoster("all");
                  }}
                >
                  방영작 전체
                </Item>
                <Item
                  onClick={() => {
                    setCategory("방영 중");
                    setOn(!on);
                    setPoster("방영 중");
                  }}
                >
                  방영 중
                </Item>
                <Item
                  onClick={() => {
                    setCategory("종영작");
                    setOn(!on);
                    setPoster("종영작");
                  }}
                >
                  종영 작
                </Item>
              </Categorys>
            ) : undefined}
          </div>
        </ContentsTop>

        <PosterWrap>
          {poster === "all"
            ? Works.map((value) => {
                return <Work bg={value.id}></Work>;
              })
            : Works.filter((work) => work.onAir === poster).map((value) => {
                return <Work bg={value.id}></Work>;
              })}
        </PosterWrap>
      </ContentsWrap>
    </>
  );
};

export default Contents;

const PageTop = styled.div`
  width: 100%;
  height: 560px;
  background: url("/img/contentstitle.png") no-repeat center 65%;
  background-size: cover;
`;
const TopTextbox = styled.div`
  padding: 200px;
`;
const PageTitle = styled.span`
  display: block;
  font-size: 52px;
  color: #fff;
  font-weight: 600;
  font-family: "YDestreet";
`;
const PageExplain = styled.span`
  color: #fff;
  display: block;
  margin-top: 10px;
`;

const ContentsWrap = styled.div`
  margin-top: 80px;
  margin-bottom: 100px;
  padding: 0 15%;
`;
const ContentsTop = styled.div`
  position: relative;
  height: 50px;
`;
const ItemText = styled.div`
  padding: 10px 120px 10px 15px;
  border: 1px solid #000;
  background: url("/img/m_arrow_off.png") no-repeat 90% center;
  cursor: pointer;
  &#arrow {
    background: url("/img/m_arrow_on.png") no-repeat 90% center;
  }
`;
const Categorys = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #000;
  border-top: none;
  background: #fff;
`;
const Item = styled.li`
  padding: 10px 120px 10px 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const PosterWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  justify-content: space-between;
`;

const Work = styled.div`
  height: 400px;
  margin-bottom: 50px;
  background: url("/img/wc${(props) => props.bg}.jpg") no-repeat center center;
  background-size: cover;
  cursor: pointer;
`;
