import React from 'react';
import { WithChildren } from 'types';
import { PreviewStack, PreviewStackProps } from '../PreviewStack';
import { PreviewCode } from '../PreviewCode';

export interface PreviewComboProps extends WithChildren {
  code?: string;
  stackProps?: Partial<PreviewStackProps>;
}

const PreviewCombo = (props: PreviewComboProps) => {
  const { children, code, stackProps } = props;

  return (
    <div>
      <PreviewStack {...stackProps}>{children}</PreviewStack>
      {/*<div>controls</div>*/}
      {code && <PreviewCode code={code} />}
    </div>
  );
};

export default PreviewCombo;
