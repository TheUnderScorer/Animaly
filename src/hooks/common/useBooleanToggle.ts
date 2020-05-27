import { useCallback, useState } from 'react';

interface BooleanToggleProps {
  initialValue?: boolean;
}

const useBooleanToggle = ({ initialValue = false }: BooleanToggleProps) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(!value);
  }, [value]);

  return {
    value,
    setValue,
    toggle,
  };
};

export default useBooleanToggle;
