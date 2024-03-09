import React from 'react';

export interface ColorTileProps {
  size?: string;
  label?: string;
  background: string;
  color: string;
}

const ColorTile = (props: ColorTileProps) => {
  const { size = '5rem', label, background, color } = props;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: background,
        color: color,
      }}
    >
      {label}
    </div>
  );
};

export default ColorTile;
