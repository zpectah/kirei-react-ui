import React, { useEffect, useMemo, useState } from 'react';
import { Global, css, SerializedStyles } from '@emotion/react';
import { Theme, PartialTheme, ThemeMode, themeModeKeys, KireiProviderProps } from 'types';
import { createTheme } from '../../theme';
import { cssReset, createGlobalStyles } from '../../global';
import { KireiContextProvider } from '../KireiContext';

const KireiProvider = ({ children, theme, styles, applyCSSReset, applyGlobalStyles }: KireiProviderProps) => {
  const [uiTheme, setUiTheme] = useState<Theme>(createTheme(theme));

  const defaultProviderValues = useMemo(() => {
    return {
      theme: uiTheme,
      setTheme: (theme: PartialTheme) => setUiTheme(createTheme(theme)),
      setThemeMode: (mode: ThemeMode) => {
        setUiTheme(createTheme({ palette: { mode } }));
      },
      toggleThemeMode: () => {
        const mode = uiTheme.palette.mode === themeModeKeys.light ? themeModeKeys.dark : themeModeKeys.light;

        setUiTheme(createTheme(Object.assign({ palette: { mode } })));
      },
    };
  }, [uiTheme]);

  const defaultGlobalStyles = css([
    applyCSSReset && cssReset,
    applyGlobalStyles && createGlobalStyles(uiTheme),
    styles as SerializedStyles,
  ]);

  useEffect(() => {
    const newTheme = createTheme(theme);

    setUiTheme(newTheme);
  }, [theme]);

  return (
    <KireiContextProvider value={defaultProviderValues}>
      <Global styles={defaultGlobalStyles} />
      {children}
    </KireiContextProvider>
  );
};

export default KireiProvider;
