import { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { customTheme } from './templates/custom'

interface ThemeProviderProps {
  children: ReactNode,

}

export function ThemeProvider({children}: ThemeProviderProps){

  return(
    <StyledThemeProvider theme={customTheme}>
      {children}
    </StyledThemeProvider>
  )
}

