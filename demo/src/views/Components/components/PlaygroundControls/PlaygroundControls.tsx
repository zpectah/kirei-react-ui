import React, { ReactNode } from 'react';
import { useKireiContext } from 'styles';

export interface PlaygroundControlsItemProps {
  key: number;
  label: ReactNode;
  value: ReactNode;
}

export interface PlaygroundControlsProps {
  rows: PlaygroundControlsItemProps[];
}

const PlaygroundControls = (props: PlaygroundControlsProps) => {
  const { rows = [] } = props;

  const {
    theme: { spacing },
  } = useKireiContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.get(3) }}>
      {rows.map(({ key, label, value }) => {
        return (
          <div key={key} style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '50%' }}>{label}</div>
            <div style={{ width: '50%' }}>{value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PlaygroundControls;
