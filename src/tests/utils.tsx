import React, { ReactNode } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export const wrapComponent = (
  cmp: ReactNode,
  theme: 'light' | 'dark' = 'light',
) => (
  <ApplicationProvider {...eva} theme={eva[theme]}>
    {cmp}
  </ApplicationProvider>
);
