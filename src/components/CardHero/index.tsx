import { CardHover, CardWrapper, Heart, ImageCharacter } from './styles';
import { AiOutlineHeart } from 'react-icons/ai';
export const CardHero = ({ content }: any) => {
  return (
    <CardWrapper id={content.id}>
      <Heart >
        <AiOutlineHeart />
      </Heart>
      <ImageCharacter src={content.images.sm} alt="Imagem do personagem" />
      <p>{content.name}</p>
      <CardHover>
        <p>{content.biography.fullName}</p>
      </CardHover>
    </CardWrapper >
  )
}