import { Text } from '@radix-ui/themes';

type TitleProps = {
  bold?: boolean;
} & React.ComponentProps<typeof Text>;

export const Title: React.FC<TitleProps> = ({
  children,
  bold,
  size = '6',
  ...props
}) => {
  if (bold) {
    props.weight = 'bold';
  }

  return (
    <Text size={size} {...props}>
      {children}
    </Text>
  );
};
