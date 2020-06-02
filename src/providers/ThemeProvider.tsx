import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useState,
} from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const defaultValue: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {},
};

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>(defaultValue);
export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva[theme]}>
        {children}
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
