import * as S from "./styles"
import Face from "../../assets/face.png"
import Insta from "../../assets/insta.png"
import Whatsapp from "../../assets/whatsapp.png"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://facebook.com" target="_blank">
        <img src={Face} alt="Facebook" />
      </a>
      <img src={Insta} alt="Instagram" />
      <img src={Whatsapp} alt="Whatsapp" />
    </S.Footer>
  )
}