import { render } from 'react-native-testing-library';
import AppLogo from './';
import React from 'react';
import { wrapComponent } from '../../../tests/utils';

describe('<AppLogo />', () => {
  it('should render without crashing', () => {
    const cmp = render(wrapComponent(<AppLogo />));
    expect(cmp.toJSON()).toMatchSnapshot();
  });
});
