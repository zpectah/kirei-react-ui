import React from 'react';
import { WithChildren } from 'types';
import { PreviewStack } from '../PreviewStack';
import { PreviewCode } from '../PreviewCode';

export interface PreviewComboProps extends WithChildren {
  code?: string;
}

const PreviewCombo = (props: PreviewComboProps) => {
  const { children, code } = props;

  return (
    <div>
      <PreviewStack>{children}</PreviewStack>
      {/*<div>controls</div>*/}
      {code && <PreviewCode code={code} />}
    </div>
  );
};

export default PreviewCombo;
