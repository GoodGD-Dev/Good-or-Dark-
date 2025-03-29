import { Link } from 'react-router-dom'
import * as S from './style'

const Sinopse = () => {
  return (
    <>
      <S.Secion1></S.Secion1>
      <S.Secion2>
        <S.TextArea>
          <S.SinposeSpan>
            Sinopse
          </S.SinposeSpan>
        </S.TextArea>
        <S.TextArea>
          <p>Entre mundos fragmentados, um amor luta para existir. <br/>Dionatha e Emily despertam separados por uma anomalia inexplicável <br /> - cada um em uma realidade onde nunca se conheceram.
<br />Emily, artista de horror, vê seus desenhos macabros ganhando vida, sussurrando nas sombras com olhos vazios.
<br />Dionatha, programador meticuloso, observa seu mundo desmoronar em glitches que revelam fragmentos de memórias de alguém que não consegue lembrar.
<br />O tempo se esgota. As realidades se deterioram. Os monstros se aproximam.
<br />Será o amor forte o suficiente para reconectar mundos que nunca deveriam ter sido separados? Ou estão destinados a esquecer um ao outro para sempre?
<br />GOOD OR DARK. Uma visual novel de horror psicológico sobre os monstros que criamos quando perdemos nossa conexão com quem amamos.</p>
        </S.TextArea>
        <S.TextArea2>
          <S.SinposeSpan>EM BREVE...</S.SinposeSpan>
          <S.SinposeSpan>
            <Link to="/">TT</Link>
          </S.SinposeSpan>
        </S.TextArea2>
      </S.Secion2>
      <S.Secion3></S.Secion3>
    </>
  )
}

export default Sinopse
