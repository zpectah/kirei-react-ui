import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];

function createApiView(directory, componentName) {
  const content = `
import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const ${componentName}View = () => {
  return (
    <View title="${componentName} API">
      <Article>
        <ApiTable title="${componentName}Props" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(${componentName}View);    
    `;
  const fileName = `${componentName}.tsx`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}

function generateDemoNewComponentApi(componentName) {
  const directoryRoot = './demo/src/views/Api/views/';
  const apiDir = `${directoryRoot}`;

  createApiView(apiDir, componentName);

  console.log(`\n\n***************************************************************************************`);
  console.log(`** WHAT NEXT **************************************************************************`);
  console.log(`***************************************************************************************`);
  console.log(
    `1. Add new line "import { default as ${componentName} } from './${componentName}'" at "./demo/src/views/Api/views/index.ts"`
  );
  console.log(`2. Update "./demo/src/views/Api/Api.tsx"`);
  console.log(`3. Update "./demo/src/constants/navigation.ts"`);
  console.log(`***************************************************************************************\n\n`);
}

if (!componentName) {
  console.error('Component name is required.');
  process.exit(1);
}

generateDemoNewComponentApi(componentName);
