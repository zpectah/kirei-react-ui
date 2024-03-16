import React from 'react';
import { Article } from '../../../../components';
import { IconsPreviewList, IconsPreviewSearchBar, useIconsPreviewList } from './components';

const PreviewView = () => {
  const { iconsList, searchQuery, setSearchQuery } = useIconsPreviewList();

  return (
    <>
      <IconsPreviewSearchBar query={searchQuery} setQuery={setSearchQuery} />
      <Article title="Static">
        <IconsPreviewList iconsList={iconsList.static} />
      </Article>
      <Article title="Animated">
        <IconsPreviewList iconsList={iconsList.animated} />
      </Article>
    </>
  );
};

export default PreviewView;
