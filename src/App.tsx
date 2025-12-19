import { Theme } from '@radix-ui/themes';
import { RouterProvider } from '@tanstack/react-router';

import { router } from 'src/router';
import { appContainer, themeClass } from 'src/theme.css';

const App: React.FC = () => {
  return (
    <Theme appearance="dark" grayColor="mauve" radius="medium" scaling="100%">
      <div className={`${themeClass} ${appContainer}`}>
        <RouterProvider router={router} />
      </div>
    </Theme>
  );
};

export default App;
