import React, { FC, useCallback, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { Button, Icon, Input, Spinner, Text } from '@ui-kitten/components';
import { normalIcon } from '../../../styles/icons';
import { getBehavior } from '../../../utils/keyboardAvoidingView';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../store/reducers/user/actions';
import { useAsyncStorageContext } from '../../../providers/AsyncStorageProvider';
import { User } from '../../../typings/user';
import ControlImg from '../../../assets/106.png';

export interface CreateUserFormProps {
  onCreate?: (user: User) => any;
}

const styles = StyleSheet.create({
  input: {
    minWidth: 300,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  btn: {
    marginTop: 40,
  },
  labelView: {
    alignItems: 'center',
  },
  img: {
    marginBottom: 40,
  },
});

const CreateUserForm: FC<CreateUserFormProps> = ({ onCreate }) => {
  const dimensions = useWindowDimensions();

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
      <Image
        fadeDuration={1000}
        resizeMode="cover"
        source={ControlImg}
        style={{
          overflow: 'visible',
          width: dimensions.width * 0.9,
          height: dimensions.height * 0.5,
        }}
      />
      <Text style={styles.title} category="h4">
        How should I call you?
      </Text>
      <Input
        testID="createUserInput"
        disabled={loading}
        value={name}
        status={error ? 'danger' : 'basic'}
        size="large"
        caption={error ? error : 'It can be changed later.'}
        onChangeText={setName}
        placeholder="Enter your name..."
      />
      <Button
        size="small"
        testID="createUserBtn"
        disabled={loading}
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
