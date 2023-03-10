import styled from "styled-components";
import { langOnState } from "../store/LangAtom";
import { menuOnState } from "../store/MenuAtom";
import { useRecoilState } from "recoil";
import HamMenu from "./Mainmenu";
import { useNavigate } from "react-router-dom";

const Header = ({ id }) => {
  const [lang, setLang] = useRecoilState(langOnState);
  const [menuOn, setMenuOn] = useRecoilState(menuOnState);
  let navigate = useNavigate();

  return (
    <Wrapper id={id}>
      <HeaderWrap id={id}>
        <Menu id={id} onClick={() => setMenuOn(true)} />
        <Logo id={id} onClick={() => navigate("/")} />
        <Lang>
          <List
            id={lang === "kor" ? `selected_${id}` : undefined}
            onClick={() => setLang("kor")}
          >
            KOR
          </List>
          <List id="bar">|</List>
          <List
            id={lang === "eng" ? `selected_${id}` : undefined}
            onClick={() => setLang("eng")}
          >
            ENG
          </List>
        </Lang>
      </HeaderWrap>

      {menuOn ? <HamMenu /> : undefined}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  z-index: 100;
  &#white,
  &#simple {
    position: absolute;
  }
  &#black {
    border-bottom: 1px solid #7c7c7c;
  }
`;
const HeaderWrap = styled.header`
  width: 75%;
  height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &#simple {
    width: 90%;
  }
`;
const Menu = styled.div`
  width: 35px;
  height: 35px;
  background-size: contain;
  cursor: pointer;
  &#white {
    background: url("/img/sub_ham_w.png") no-repeat center center;
  }
  &#black,
  &#simple {
    background: url("/img/sub_ham.png") no-repeat center center;
  }
`;
const Logo = styled.div`
  width: 128px;
  height: 53px;
  background-size: contain;
  cursor: pointer;
  &#white {
    background: url("/img/logo_w.png") no-repeat center center;
  }
  &#black {
    background: url("/img/logo.png") no-repeat center center;
  }
  &#simple {
    display: none;
  }
`;
const Lang = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100px;
`;
const List = styled.li`
  cursor: pointer;
  color: #ccc;
  &:hover {
    text-decoration: underline;
  }
  &#selected_white {
    color: #fff;
    font-weight: 500;
  }
  &#selected_black,
  &#selected_simple {
    color: #000;
    font-weight: 500;
  }
  &#bar {
    cursor: default;
    text-decoration: none;
    font-size: 14px;
  }
`;
