import { Repositories } from 'src/components/repositories/repositories';
import { Title } from 'src/components/title/title';
import { TitleHighlightStyle } from 'src/components/title/title.css';
import { mainTitle } from 'src/theme.css';

export const HomePage: React.FC = () => {
  return (
    <>
      <Title className={mainTitle}>
        The same images, but <span className={TitleHighlightStyle}>secure</span>
      </Title>
      <Repositories />
    </>
  );
};
