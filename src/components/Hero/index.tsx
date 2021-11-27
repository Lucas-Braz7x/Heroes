import { CardHero } from '../CardHero';
import { HeroWrapper } from './styles';

export const Hero = ({ contents }: any) => (
  <HeroWrapper>
    {contents.map((content: any) => (
      <CardHero key={content.id} content={content} />
    ))}
  </HeroWrapper>
);