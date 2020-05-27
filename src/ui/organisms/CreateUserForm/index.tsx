import React, { FC, useCallback, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Icon, Input, Spinner, Text } from '@ui-kitten/components';
import { normalIcon } from '../../../styles/icons';
import { getBehavior } from '../../../utils/keyboardAvoidingView';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../store/reducers/user/actions';
import { useAsyncStorageContext } from '../../../providers/AsyncStorageProvider';
import { User } from '../../../typings/user';

export interface CreateUserFormProps {
  onCreate?: (user: User) => any;
}

const styles = StyleSheet.create({
  input: {
    minWidth: 300,
  },
  container: {
    minWidth: 300,
  },
  title: {
    textAlign: 'center',
    marginBottom: 40,
  },
  btn: {
    marginTop: 40,
  },
  labelView: {
    alignItems: 'center',
  },
});

const CreateUserForm: FC<CreateUserFormProps> = ({ onCreate }) => {
  const { storage } = useAsyncStorageContext();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSave = useCallback(async () => {
    setError('');

    if (!name) {
      setError('Provide your name.');

      return;
    }

    setLoading(true);

    const user = await dispatch<any>(
      createUser(storage, {
        name,
      }),
    );

    if (onCreate) {
      onCreate(user);
    }
  }, [name, storage, dispatch, onCreate]);

  return (
    <KeyboardAvoidingView behavior={getBehavior()} style={styles.container}>
      <Input
        testID="createUserInput"
        disabled={loading}
        label={() => (
          <Text style={styles.title} category="h4">
            How should I call you?
          </Text>
        )}
        value={name}
        status={error ? 'danger' : 'basic'}
        size="large"
        caption={error ? error : 'It can be changed later.'}
        onChangeText={setName}
        placeholder="Enter your name..."
      />
      <Button
        testID="createUserBtn"
        disabled={loading}
        size="medium"
        onPress={handleSave}
        accessoryLeft={() =>
          loading ? (
            <Spinner />
          ) : (
            <Icon style={normalIcon} fill="#fff" name="save-outline" />
          )
        }
        style={styles.btn}>
        {loading ? '' : 'Save'}
      </Button>
    </KeyboardAvoidingView>
  );
};

export default CreateUserForm;
