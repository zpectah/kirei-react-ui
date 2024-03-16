import React from 'react';

export interface IconsPreviewSearchBarProps {
  query: string;
  setQuery: (string: string) => void;
}

const IconsPreviewSearchBar = ({ query, setQuery }: IconsPreviewSearchBarProps) => {
  return (
    <>
      <input type="search" placeholder="Type for search" value={query} onChange={(e) => setQuery(e.target.value)} />
    </>
  );
};

export default IconsPreviewSearchBar;
