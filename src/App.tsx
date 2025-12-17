import { Theme } from '@radix-ui/themes';

import { appContainer, themeClass } from './theme.css';

const App: React.FC = () => {
  return (
    <Theme
      appearance="light"
      accentColor="mint"
      grayColor="mauve"
      radius="medium"
      scaling="100%"
    >
      <div className={`${themeClass} ${appContainer}`}>
        Whereas disregard and contempt for human rights have resulted
      </div>
    </Theme>
  );
};

export default App;
