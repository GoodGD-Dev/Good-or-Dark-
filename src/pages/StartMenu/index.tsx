import * as S from './style';
import { Link } from 'react-router-dom';

const StartMenu = () => {
  return (
    <S.MenuContainer>
      <S.MenuNav>
        <S.MenuUl>
          <S.MenuLi><Link to="/sinopse">New Game</Link></S.MenuLi>
          <S.MenuLi><Link to="#">Load Game</Link></S.MenuLi>
          <S.MenuLi><Link to="#">Settings</Link></S.MenuLi>
        </S.MenuUl>
      </S.MenuNav>
      <S.MenuSection>
        <S.MenuTitle>
          <S.TitleGood>Good</S.TitleGood>
          <S.TitleO>O</S.TitleO>
          <S.TitleR>R</S.TitleR>
          <S.TitleDark>Dark</S.TitleDark>
        </S.MenuTitle>
      </S.MenuSection>
    </S.MenuContainer>
  )
}

export default StartMenu;
