import { useMemo } from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';
import { StatusBarProps } from 'react-native';

const useThemedStatusBar = () => {
  const { theme } = useThemeContext();
  const barProps: StatusBarProps = useMemo(
    () => ({
      barStyle: theme === 'dark' ? 'light-content' : 'dark-content',
    }),
    [theme],
  );

  return barProps;
};

export default useThemedStatusBar;
