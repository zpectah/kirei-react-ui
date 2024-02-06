import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const BreakpointsView = () => {
  return (
    <View
      title="Breakpoints"
      subtitle="Suspendisse odio, sodales rhoncus placerat nibh maximus congue maximus non, cras dictum elementum molestie et elit. Sollicitudin dui vel dolor, maximus maximus ullamcorper nunc consequat sollicitudin venenatis, bibendum proin aliquet ligula."
    >
      <Article>
        <Section>...Breakpoints...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(BreakpointsView);
