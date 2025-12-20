import { Outlet } from '@tanstack/react-router';

import { Navbar } from 'src/components/navbar/navbar';

export const RootLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
