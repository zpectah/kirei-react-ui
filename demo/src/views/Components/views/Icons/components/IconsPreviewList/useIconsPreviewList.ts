import { ComponentType, useMemo, useState } from 'react';
import iconsList from './iconsList.ts';

type IconProps = { label: string; node: ComponentType };

export const useIconsPreviewList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const results = useMemo(() => {
    let resultsStatic: IconProps[] = [];
    let resultsAnimated: IconProps[] = [];

    if (searchQuery.length > 3) {
      const lQuery = searchQuery.toLowerCase();
      iconsList.static.forEach((item) => {
        if (item.label.toLowerCase().includes(lQuery)) resultsStatic.push(item);
      });
      iconsList.animated.forEach((item) => {
        if (item.label.toLowerCase().includes(lQuery)) resultsAnimated.push(item);
      });
    } else {
      resultsStatic = [...iconsList.static];
      resultsAnimated = [...iconsList.animated];
    }

    return {
      static: resultsStatic,
      animated: resultsAnimated,
    };
  }, [searchQuery]);

  return {
    iconsList: results,
    searchQuery,
    setSearchQuery,
  };
};
