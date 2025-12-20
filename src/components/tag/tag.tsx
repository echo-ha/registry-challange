import { useState } from 'react';
import { CopyIcon } from '@radix-ui/react-icons';
import { Flex, Text } from '@radix-ui/themes';

import type { DockerHubTag } from 'src/api/dockerhub.types';
import {
  copyButton,
  tagCard,
  tagHeader,
  tagInfo,
  tagMeta,
  tagName
} from 'src/components/tag/tag.css';

type TagProps = {
  tag: DockerHubTag;
  repoName: string;
};

const formatSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
};

export const Tag: React.FC<TagProps> = ({ tag, repoName }) => {
  const [copied, setCopied] = useState(false);

  const dockerPullCommand = `docker pull ${repoName}:${tag.name}`;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(dockerPullCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const lastUpdatedDate = new Date(tag.last_updated).toLocaleDateString(
    'en-GB'
  );

  return (
    <Flex className={tagCard}>
      <div className={tagHeader}>
        <div className={tagInfo}>
          <Text className={tagName} size="4" weight="bold">
            {tag.name}
          </Text>
          <div className={tagMeta}>
            <Text size="2" color="gray">
              Last updated: {lastUpdatedDate}
            </Text>
            <Text size="2" color="gray">
              Size: {formatSize(tag.full_size)}
            </Text>
          </div>
        </div>
        <button
          className={copyButton}
          onClick={handleCopy}
          title={copied ? 'Copied!' : 'Copy docker pull command'}
          aria-label="Copy docker pull command"
        >
          <CopyIcon width="16" height="16" />
        </button>
      </div>
    </Flex>
  );
};
