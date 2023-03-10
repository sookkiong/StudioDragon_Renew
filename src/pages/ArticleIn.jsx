import { ArticleList } from "../components/Article";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ArticleBox = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const item = ArticleList.find((element) => element.id === id);
  const prevItem = ArticleList.find((element) => element.id === id - 1);
  const nextItem = ArticleList.find((element) => element.id === id + 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Wrapper>
      <CategoeyNDate>
        <CDspan id="category">ARTICLES</CDspan>
        <CDspan id="line">|</CDspan>
        <CDspan id="date">{item.date}</CDspan>
      </CategoeyNDate>

      <ArticleTitle>{item.title}</ArticleTitle>

      <ArticleRef>{item.reference}</ArticleRef>

      <PhotoboxWrap>
        <PhotoBox>
          <img src={`/img/an${item.id}.jpg`} alt="기사 이미지" width="100%" />
        </PhotoBox>
        <Explain>{item.photoExp}</Explain>
      </PhotoboxWrap>

      <Content>{item.content}</Content>

      <ButtonWrap>
        <ButtonInner>
          <span style={{ display: "block", fontWeight: "600" }}>PREV</span>
          <PrevNnext
            disabled={!prevItem}
            onClick={() => navigate(`/article/detail?id=${prevItem.id}`)}
          >
            {prevItem ? prevItem.title : <div>이전 기사가 없습니다.</div>}
          </PrevNnext>
        </ButtonInner>

        <GoList onClick={() => navigate("/article")}></GoList>

        <ButtonInner id="right">
          <span
            style={{ display: "block", fontWeight: "600", textAlign: "right" }}
          >
            NEXT
          </span>
          <PrevNnext
            id="next"
            disabled={!nextItem}
            onClick={() => navigate(`/article/detail?id=${nextItem.id}`)}
          >
            {nextItem ? nextItem.title : <div>마지막 기사입니다.</div>}
          </PrevNnext>
        </ButtonInner>
      </ButtonWrap>
    </Wrapper>
  );
};

export default ArticleBox;

const Wrapper = styled.div`
  width: 65%;
  margin: 80px auto 0;
`;
const CategoeyNDate = styled.div`
  margin-bottom: 40px;
`;
const CDspan = styled.span`
  font-size: 20px;
  &#line {
    margin: 0 15px;
  }
  &#date {
    font-weight: 600;
    color: #003371;
  }
`;
const ArticleTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 50px;
`;
const ArticleRef = styled.div`
  margin-bottom: 40px;
  line-height: 32px;
  padding-left: 20px;
  border-left: 5px solid #003371;
  font-style: oblique;
`;
const PhotoboxWrap = styled.div`
  margin: 60px auto;
  width: 100%;
`;
const PhotoBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Explain = styled.span`
  display: block;
  text-align: center;
  padding-top: 20px;
  color: #7c7c7c;
`;
const Content = styled.div`
  line-height: 30px;
  text-align: justify;
`;
const ButtonWrap = styled.div`
  margin: 60px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonInner = styled.div`
  width: 440px;
  text-align: left;
  font-size: 15px;
  &#right {
    text-align: right;
  }
`;
const PrevNnext = styled.button`
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  text-align: left;
  color: ${(props) => (props.disabled ? "#ccc" : "#7c7c7c")};
  &#next {
    text-align: right;
  }
  &:hover {
    text-decoration: ${(props) => (props.disabled ? "none" : "underline")};
    font-weight: ${(props) => (props.disabled ? "400" : "600")};
    color: ${(props) => (props.disabled ? "default" : "#000")};
  }
`;
const GoList = styled.button`
  width: 50px;
  height: 50px;
  background: url("/img/go_arti.png") no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;
