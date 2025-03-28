import * as S from './style'

const StartMenu = () => {
  return (
    <S.MenuContainer>
      <S.MenuNav>
        <S.MenuUl>
          <S.MenuLi><a href="#">New Game</a></S.MenuLi>
          <S.MenuLi><a href="#">Load Game</a></S.MenuLi>
          <S.MenuLi><a href="#">Settings</a></S.MenuLi>
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

export default StartMenu
