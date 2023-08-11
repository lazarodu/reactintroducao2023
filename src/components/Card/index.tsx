import * as S from "./styles";
export interface ICard {
  nome: string
  Image: ImageBitmapOptions
}
export const Card = ({ nome, Image}: ICard) => {
  return (
    <S.Aside>
      <h3>
        <strong> {nome} </strong> 
      </h3>
      <p> {Image} </p>
    </S.Aside>
  );
};
