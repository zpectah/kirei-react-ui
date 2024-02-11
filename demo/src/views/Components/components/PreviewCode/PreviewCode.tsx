import React from 'react';
import { WithChildren } from 'types';
import { useKireiContext } from 'styles';

export interface PreviewCodeProps extends WithChildren {}

const PreviewCode = (props: PreviewCodeProps) => {
  const { children } = props;

  const {
    theme: { palette, spacing },
  } = useKireiContext();

  return (
    <div
      style={{
        padding: spacing.get(2, 4),
        backgroundColor: palette.neutral.main,
        color: palette.neutral.contrast,
      }}
    >
      <div>
        <pre>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};

export default PreviewCode;
