import { Flex } from '@radix-ui/themes';
import { Link } from '@tanstack/react-router';

import echoLogo from 'src/assets/echo-logo.svg';
import {
  navbar,
  navbarLink,
  navbarLogo
} from 'src/components/navbar/navbar.css';

export const Navbar: React.FC = () => {
  return (
    <Flex className={navbar}>
      <Link to="/" className={navbarLink}>
        <img src={echoLogo} alt="Echo Logo" className={navbarLogo} />
      </Link>
    </Flex>
  );
};
