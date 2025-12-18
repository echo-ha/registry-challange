import { Theme } from '@radix-ui/themes';
import { Repositories } from 'src/components/repositories/repositories';
import { Title } from 'src/components/title/title';
import { TitleHighlightStyle } from 'src/components/title/title.css';
import { appContainer, themeClass } from 'src/theme.css';

const App: React.FC = () => {
  return (
    <Theme appearance="dark" grayColor="mauve" radius="medium" scaling="100%">
      <div className={`${themeClass} ${appContainer}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Title>
            The same images, but{' '}
            <span className={TitleHighlightStyle}>secure</span>
          </Title>
          <Repositories />
        </div>
      </div>
    </Theme>
  );
};

export default App;
