import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { Button, Icon, Input, Spinner, Text } from '@ui-kitten/components';
import { normalIcon } from '../../../styles/icons';
import { getBehavior } from '../../../utils/keyboardAvoidingView';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../store/reducers/user/actions';
import { useAsyncStorageContext } from '../../../providers/AsyncStorageProvider';
import { User } from '../../../typings/user';
import ControlImg from '../../../assets/arabica-31.png';
import Link from '../../atoms/Link';

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
    bottom: 40,
    marginTop: 20,
  },
  label: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  btn: {
    marginTop: 50,
    width: '100%',
  },
  labelView: {
    alignItems: 'center',
  },
  img: {
    marginBottom: 40,
  },
  source: {
    textAlign: 'right',
    paddingRight: 5,
    bottom: '4%',
  },
  inner: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
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
      await onCreate(user);
    }
  }, [name, storage, dispatch, onCreate]);

  useEffect(() => {
    if (name) {
      setError('');
    }
  }, [name]);

  return (
    <KeyboardAvoidingView behavior={getBehavior()}>
      <View style={styles.container}>
        <Text style={styles.title} category="h3">
          Welcome!
        </Text>
        <View
          style={{
            width: dimensions.width,
            height: dimensions.height * 0.4,
          }}>
          <Image
            fadeDuration={1000}
            resizeMode="cover"
            source={ControlImg}
            style={styles.image}
          />
          <Text style={styles.source}>
            illustration by <Link href="https://icons8.com">Ouch.pics</Link>
          </Text>
        </View>
        <Text style={styles.label} category="h5">
          How should I call you?
        </Text>
        <View style={[styles.inner]}>
          <Input
            testID="createUserInput"
            disabled={loading}
            value={name}
            status={error ? 'danger' : 'basic'}
            size="large"
            caption={error}
            onChangeText={setName}
            placeholder="Enter your name..."
          />
          <Button
            size="small"
            testID="createUserBtn"
            disabled={loading}
            onPress={handleSave}
            accessoryRight={() =>
              loading ? (
                <Spinner />
              ) : (
                <Icon
                  style={normalIcon}
                  fill="#fff"
                  name="arrow-forward-outline"
                />
              )
            }
            style={styles.btn}>
            {loading ? '' : 'Continue'}
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateUserForm;
