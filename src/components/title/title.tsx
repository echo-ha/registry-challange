import { Text } from '@radix-ui/themes';

import { BoldTitleStyle, TitleStyle } from 'src/components/title/title.css';

type TitleProps = {
  bold?: boolean;
} & React.ComponentProps<typeof Text>;

export const Title: React.FC<TitleProps> = ({ children, bold, ...props }) => {
  return (
    <Text className={bold ? BoldTitleStyle : TitleStyle} {...props}>
      {children}
    </Text>
  );
};
