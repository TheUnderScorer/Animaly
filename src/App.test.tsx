import React from 'react';
import App from './App';
import { render } from 'react-native-testing-library';

it('renders correctly', async () => {
  const { findByText } = render(<App />);

  const learnMore = await findByText('Learn More');
  expect(learnMore).toBeDefined();
});
