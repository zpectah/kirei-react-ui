import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];

function createApiView(directory, componentName) {
    const content = ``;
    const fileName = `index.ts`;
    const filePath = path.join(directory, fileName);

    fs.writeFileSync(filePath, content);

    console.log(`File ${fileName} created at ${filePath}`);
}

function generateDemoNewComponentApi(componentName) {
    const directoryRoot = './demo/src/views/Api/views/';
    const apiDir = `${directoryRoot}`;

    createApiView(apiDir, componentName);
}

if (!componentName) {
    console.error('Component name is required.');
    process.exit(1);
}

generateDemoNewComponentApi(componentName);