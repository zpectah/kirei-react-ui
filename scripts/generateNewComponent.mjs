import fs from 'fs';
import path from 'path';
import { formatCamelCaseToUpper } from './utils';

const componentName = process.argv[2];
const componentKey = process.argv[3];

function createTypes(directory, componentName, componentKey) {
  const content = `
import { ElementType } from 'react';
import { ElementRestProps, PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles } from '../styles';

interface StylesScheme<T> {
  root: T;
}

export type ${componentName}Styles = NonNullable<unknown> & StylesScheme<ComponentStyles>;
export type ${componentName}InitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;
export type ${componentName}RestProps<E extends Element> = ElementRestProps<E>;

export interface ${componentName}ElementaryProps extends Partial<WithStyle> {}

export interface ${componentName}ShapeProps {}

export type ${componentName}Props<T extends ElementType> = {
  styles?: Partial<${componentName}Styles>;
} & ${componentName}InitialProps<T> &
  ${componentName}ElementaryProps &
  Partial<${componentName}ShapeProps>;

export interface Use${componentName}Styles {
  styles?: Partial<${componentName}Styles>;
}

export interface Use${componentName}StylesReturn {
  composedStyles: ${componentName}Styles;
}

export interface Use${componentName}Props extends Partial<${componentName}ShapeProps>, Partial<WithStyle> {}

export interface Use${componentName}PropsReturn<E extends Element> {
  root: Partial<${componentName}RestProps<E>>;
}

export interface ${componentName}StylesProps extends ${componentName}ShapeProps {}  
  `;
  const fileName = `${componentKey}.ts`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createConstants(directory, componentName, componentKey) {
  const content = `
export const ${formatCamelCaseToUpper(componentName)}_ROOT = '${componentName}';

export const ${formatCamelCaseToUpper(componentName)}_DEFAULT_VALUES = {
  as: 'div',
};  
  `;
  const fileName = `${componentKey}.ts`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createMain(directory, componentName) {
  const content = `
import React, { ElementType } from 'react';
import { ${componentName}Props } from 'types';
import { ${formatCamelCaseToUpper(componentName)}_DEFAULT_VALUES } from 'core';
import { use${componentName}Styles, use${componentName}Props } from './hooks';

const ${componentName} = <T extends ElementType>(props: ${componentName}Props<T>) => {
  const {
    as: Component = ${formatCamelCaseToUpper(componentName)}_DEFAULT_VALUES.as,
    children,
    className,
    style,
    styles,
    ...rest
  } = props;
  const styleProps = {};

  const {
    composedStyles: { root },
  } = use${componentName}Styles({ styles }, { ...styleProps });
  const { root: rootProps } = use${componentName}Props({ style, className, ...styleProps });

  return (
    <Component css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default ${componentName};
  `;
  const fileName = `${componentName}.tsx`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createHookProps(directory, componentName) {
  const content = `
import clsx from 'clsx';
import { Use${componentName}Props, Use${componentName}PropsReturn } from 'types';
import { ${formatCamelCaseToUpper(componentName)}_ROOT } from 'core';

export const use${componentName}Props = <E extends Element>(props: Use${componentName}Props): Use${componentName}PropsReturn<E> => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(${formatCamelCaseToUpper(componentName)}_ROOT, className),
      style: { ...style },
    },
  };
};  
  `;
  const fileName = `use${componentName}Props.ts`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createHookStyles(directory, componentName) {
  const content = `
import { Use${componentName}Styles, Use${componentName}StylesReturn, ${componentName}StylesProps } from 'types';
import { useKireiContext } from 'styles';
import { useCreate${componentName}Styles } from './useCreateContainerStyles';

export const use${componentName}Styles = (
  { styles }: Use${componentName}Styles,
  { ...${componentName.toLowerCase()}Styles }: ${componentName}StylesProps
): Use${componentName}StylesReturn => {
  const { theme } = useKireiContext();
  const {
    styles: { root },
  } = useCreate${componentName}Styles(theme, ${componentName.toLowerCase()}Styles);

  const composedStyles = {
    root: [root, theme.components.${componentName}.root, styles?.root],
  };

  return {
    composedStyles,
  };
};  
  `;
  const fileName = `use${componentName}Styles.ts`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createHookCreateStyles(directory, componentName) {
  const content = `
import { Theme, ${componentName}StylesProps } from 'types';

export const useCreate${componentName}Styles = (theme: Theme, stylesProps: ${componentName}StylesProps) => {
  const {} = stylesProps;
  const {} = theme;

  const rootBase = {};

  const styles = {
    root: Object.assign({
      ...rootBase,
    }),
  };

  return { styles };
};  
  `;
  const fileName = `useCreate${componentName}Styles.ts`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createHooksIndex(directory, componentName) {
  const content = `
export * from './use${componentName}Styles';
export * from './use${componentName}Props';
export * from './useCreate${componentName}Styles';  
  `;
  const fileName = `index.ts`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createIndex(directory, componentName) {
  const content = `
export { default as ${componentName} } from './${componentName}';
export * from './hooks';  
  `;
  const fileName = `index.ts`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createRootReadme(directory, componentName) {
  const content = `
# ${componentName}

## Description
...

## API
...

  `;
  const fileName = `README.md`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}

function generateReactComponent(componentName, componentKey) {
  const directoryRoot = './packages';
  const dir = {
    componentRoot: `${directoryRoot}/components/${componentName}/`,
    componentHooksRoot: `${directoryRoot}/components/${componentName}/hooks/`,
    constantsRoot: `${directoryRoot}/core/constants/components/`,
    typesRoot: `${directoryRoot}/types/components/`,
  };

  if (!fs.existsSync(dir.componentHooksRoot)) {
    fs.mkdirSync(dir.componentRoot);
    fs.mkdirSync(dir.componentHooksRoot);
  } else {
    console.log(`Component ${componentName} already exists.`);
    process.exit(1);
  }

  createTypes(dir.typesRoot, componentName, componentKey);
  createConstants(dir.constantsRoot, componentName, componentKey);
  createMain(dir.componentRoot, componentName);
  createIndex(dir.componentRoot, componentName);
  createRootReadme(dir.componentRoot, componentName);
  createHookProps(dir.componentHooksRoot, componentName);
  createHookStyles(dir.componentHooksRoot, componentName);
  createHookCreateStyles(dir.componentHooksRoot, componentName);
  createHooksIndex(dir.componentHooksRoot, componentName);

  console.log(`\n\n***************************************************************************************`);
  console.log(`** WHAT NEXT **************************************************************************`);
  console.log(`***************************************************************************************`);
  console.log(
    `1. Main file import: "import * from './${componentName}'" --> "${directoryRoot}/components/index.ts".`
  );
  console.log(`2. Update types:\n* "types/theme/components.ts"\n* "styles/theme/components.ts".`);
  console.log(
    `3. Add imports:\n * "import * from './${componentKey}.ts'" --> "${dir.typesRoot}index.ts"\n * "import * from './${componentKey}.ts'" --> "${dir.constantsRoot}index.ts"`
  );
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

generateReactComponent(componentName, componentKey);
