import React, { ReactNode } from "react";

import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
  ThemeOptions,
} from "@material-ui/core";
import { darkTheme } from "../theme/dark";
import { lightTheme } from "../theme/light";

import usePersistedState from "../hooks/usePersistedState";

interface ThemeProps {
  theme: boolean;
  children: ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ theme, children }) => {
  const themeConfig = createMuiTheme(
    theme
      ? ({ ...darkTheme } as ThemeOptions)
      : ({ ...lightTheme } as ThemeOptions)
  );
  return (
    <MuiThemeProvider theme={themeConfig}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

// decorator theme
const dynamicTheme = (Component: any) => {
  return (props: any) => {
    const [themeValue, setThemeValue] = usePersistedState("darkTheme", false);
    return (
      <Theme theme={themeValue}>
        <Component
          {...props}
          themeValue={themeValue}
          setThemeValue={setThemeValue}
        />
      </Theme>
    );
  };
};

export default dynamicTheme;
