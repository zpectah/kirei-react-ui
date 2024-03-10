import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];
const componentKey = process.argv[3];

function createMainView(directory, componentName, componentKey) {
  const content = `
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { kireiComponentsRootListKeys } from 'types';
import { routes } from '../../../../config';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Playground from './_Playground';

const ${componentName}View = () => (
  <Routes>
    <Route
      path={routes.root.route}
      element={<DetailLayout route={kireiComponentsRootListKeys.${componentKey}} title="${componentName}" subtitle="..." />}
    >
      <Route index element={<Preview />} />
      <Route path={routes.components.detail.playground} element={<Playground />} />
    </Route>
  </Routes>
);

export default ${componentName}View;    
    `;
  const fileName = `${componentName}.tsx`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createPlaygroundView(directory, componentName) {
  const content = `
import React from 'react';
import { Article } from '../../../../components';

const PlaygroundView = () => {
  return (
    <>
      <Article>${componentName} Playground</Article>
    </>
  );
};

export default PlaygroundView;    
    `;
  const fileName = `_Playground.tsx`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createPreviewView(directory, componentName) {
  const content = `
import React from 'react';
import { ${componentName} } from 'components';
import { Article, Section, PreviewCode, PreviewCombo } from '../../../../components';

const PreviewView = () => {
  return (
    <>
      <Section>
        <PreviewCode code={\`import { ${componentName} } from 'components';\`} />
      </Section>
      <Article title="Basics" subtitle="...">
        <Section>
          <PreviewCombo code={\`<${componentName} />\`}>
            <${componentName} />
          </PreviewCombo>
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;    
    `;
  const fileName = `_Preview.ts`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createRootIndex(directory, componentName) {
  const content = `
export { default as ${componentName}View } from './${componentName}';    
    `;
  const fileName = `index.ts`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}

function generateDemoNewComponent(componentName, componentKey) {
  const directoryRoot = './demo/src/views/Components/views/';
  const componentDir = `${directoryRoot}${componentName}`;

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
  } else {
    console.log(`Component root ${componentName} already exists.`);
    process.exit(1);
  }

  createMainView(componentDir, componentName, componentKey);
  createPlaygroundView(componentDir, componentName);
  createPreviewView(componentDir, componentName);
  createRootIndex(componentDir, componentName);

  console.log(`\n\n***************************************************************************************`);
  console.log(`** WHAT NEXT **************************************************************************`);
  console.log(`***************************************************************************************`);
  console.log(`1. Add new line "import * from './${componentName}'" at "./demo/src/views/Components/views/index.ts"`);
  console.log(
    `2. Add new line "import { ${componentName}View } from './views'" at "./demo/src/views/Components/Components.tsx"`
  );
  console.log(`3. Update "./demo/src/config/routes.ts"`);
  console.log(`4. Update "./demo/src/enums/routes.ts"`);
  console.log(`5. Update "./demo/src/constants/navigation.ts"`);
  console.log(`***************************************************************************************\n\n`);
}

if (!componentName) {
  console.error('Component name is required.');
  process.exit(1);
}
if (!componentKey) {
  console.error('Component key is required.');
  process.exit(1);
}

generateDemoNewComponent(componentName, componentKey);
