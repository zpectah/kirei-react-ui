import React from 'react';
import { Article } from '../../../../components';
import { IconsPreviewList } from './components';

const PreviewView = () => {
  return (
    <>
      <Article title="Static">
        <IconsPreviewList />
      </Article>
      <Article title="Animated">
        <IconsPreviewList />
      </Article>
    </>
  );
};

export default PreviewView;
