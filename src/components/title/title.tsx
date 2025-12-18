import type { PropsWithChildren } from 'react';
import { Text } from '@radix-ui/themes';

import { BoldTitleStyle, TitleStyle } from 'src/components/title/title.css';

type TitleProps = {
  bold?: boolean;
};

export const Title: React.FC<PropsWithChildren & TitleProps> = ({
  children,
  bold,
  ...props
}) => {
  return (
    <Text className={bold ? BoldTitleStyle : TitleStyle} {...props}>
      {children}
    </Text>
  );
};
