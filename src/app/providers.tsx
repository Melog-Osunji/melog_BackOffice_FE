import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../shared/styles/globalStyle";
import { theme } from "../shared/styles/theme";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}