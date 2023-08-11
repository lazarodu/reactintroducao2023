import * as S from './styles'
import Woman from "../../assets/Mulher_Flor.jpg"

export function Home() {
  return (
    <S.Section>
      <img src={Woman} alt="Mulher esquerda" />
      <img src={Woman} alt="Mulher direita" />
    </S.Section>
  )
}
