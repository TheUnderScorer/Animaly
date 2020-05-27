import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../../../store';
import { act, fireEvent, render } from 'react-native-testing-library';
import CreateUserForm from './index';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import AsyncStorageProvider from '../../../providers/AsyncStorageProvider';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { wait } from '../../../utils/timeout';

const wrapComponent = (cmp: ReactNode) => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <IconRegistry icons={EvaIconsPack} />
    <AsyncStorageProvider>
      <Provider store={store}>{cmp}</Provider>
    </AsyncStorageProvider>
  </ApplicationProvider>
);

describe('<CreateUserForm />', () => {
  it('should render without crashing', () => {
    const component = render(wrapComponent(<CreateUserForm />));
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should show error if user leaves input empty', async () => {
    const component = render(wrapComponent(<CreateUserForm />));
    const btn = await component.findByTestId('createUserBtn');

    act(() => {
      fireEvent.press(btn);
    });

    const error = await component.findByText('Provide your name.');
    expect(error).toBeDefined();
  });

  it('should handle user creation', async () => {
    const handleCreation = jest.fn();

    const component = render(
      wrapComponent(<CreateUserForm onCreate={handleCreation} />),
    );
    const input = await component.findByTestId('createUserInput');

    act(() => {
      fireEvent.changeText(input, 'Test');
    });

    const btn = await component.findByTestId('createUserBtn');

    await act(async () => {
      fireEvent.press(btn);

      await wait(100);
    });

    expect(handleCreation).toHaveBeenCalledTimes(1);
  });
});
