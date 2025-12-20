import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Flex, Text } from '@radix-ui/themes';

import { OFFICIAL_REPO_OWNER } from 'src/api/dockerhub';
import {
  repositoryOfficial,
  repositoryOwner
} from 'src/components/repository/repository.css';

type RepoOwnerProps = {
  owner?: string;
};

export const RepoOwner: React.FC<RepoOwnerProps> = ({ owner }) => {
  if (!owner) {
    return null;
  }

  const isOfficial = owner === OFFICIAL_REPO_OWNER;

  if (isOfficial) {
    return (
      <Flex className={repositoryOfficial} align="center" gap="1">
        <CheckCircledIcon />
        <Text size="2">Official repository</Text>
      </Flex>
    );
  }

  return (
    <Text className={repositoryOwner} size="2" color="gray">
      by: {owner}
    </Text>
  );
};
