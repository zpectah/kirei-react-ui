import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];
const componentPrefix = process.argv[3];

function createTypes(directory, componentName, componentPrefix) {
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
  const fileName = `${componentPrefix}.ts`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createConstants(directory, componentName, componentPrefix) {
  const content = `
export const ${componentName.toUpperCase()}_ROOT = '${componentName}';

export const ${componentName.toUpperCase()}_DEFAULT_VALUES = {
  as: 'div',
};  
  `;
  const fileName = `${componentPrefix}.ts`;
  const filePath = path.join(directory, fileName);

  fs.writeFileSync(filePath, content);

  console.log(`File ${fileName} created at ${filePath}`);
}
function createMain(directory, componentName) {
  const content = `
import React, { ElementType } from 'react';
import { ${componentName}Props } from 'types';
import { ${componentName.toUpperCase()}_DEFAULT_VALUES } from 'core';
import { use${componentName}Styles, use${componentName}Props } from './hooks';

const ${componentName} = <T extends ElementType>(props: ${componentName}Props<T>) => {
  const {
    as: Component = ${componentName.toUpperCase()}_DEFAULT_VALUES.as,
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
import { ${componentName.toUpperCase()}_ROOT } from 'core';

export const use${componentName}Props = <E extends Element>(props: Use${componentName}Props): Use${componentName}PropsReturn<E> => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(${componentName.toUpperCase()}_ROOT, className),
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

function generateReactComponent(componentName, componentPrefix) {
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

  createTypes(dir.typesRoot, componentName, componentPrefix);
  createConstants(dir.constantsRoot, componentName, componentPrefix);
  createMain(dir.componentRoot, componentName);
  createIndex(dir.componentRoot, componentName);
  createHookProps(dir.componentHooksRoot, componentName);
  createHookStyles(dir.componentHooksRoot, componentName);
  createHookCreateStyles(dir.componentHooksRoot, componentName);
  createHooksIndex(dir.componentHooksRoot, componentName);

  console.log(`\n\n***************************************************************************************`);
  console.log(
    `1.\nMain file import:\n* "import * from './${componentName}'" --> "${directoryRoot}/components/index.ts".\n`
  );
  console.log(`2.\nUpdate types:\n* "types/theme/components.ts"\n* "styles/theme/components.ts".\n`);
  console.log(
    `3.\nAdd imports:\n * "import * from './${componentPrefix}.ts'" --> "${dir.typesRoot}index.ts"\n * "import * from './${componentPrefix}.ts'" --> "${dir.constantsRoot}index.ts"`
  );
  console.log(`***************************************************************************************\n\n`);
}

if (!componentName) {
  console.error('Component name is required.');
  process.exit(1);
}
if (!componentPrefix) {
  console.error('Component prefix is required.');
  process.exit(1);
}

generateReactComponent(componentName, componentPrefix);
