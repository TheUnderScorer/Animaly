import React, {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Layout, Spinner } from '@ui-kitten/components';
import { RowView } from '../styles/view';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Linking,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../store';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';
import { useAsyncStorageContext } from '../providers/AsyncStorageProvider';
import { fetchCurrentUser } from '../store/reducers/user/actions';
import AppLogo from '../ui/molecules/AppLogo';
import { useNavigation } from '@react-navigation/native';
import { RootScreens } from '../screens';
import { wait } from '../utils/timeout';
import CreateUserForm from '../ui/organisms/CreateUserForm';
import GetStartedBtn from '../ui/atoms/GetStartedBtn';
import Bg from '../assets/paws.jpg';
import { BackgroundOverlay } from '../styles/overlay';
import { A } from '../styles/typography';

export interface SplashScreenProps {}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 40,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  layout: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
    top: 0,
  },
  bgSource: {
    position: 'absolute',
    color: '#fff',
    bottom: 20,
    left: 10,
  },
});

export type CreationState = 'notCreating' | 'creating';

const SplashScreen: FC<SplashScreenProps> = () => {
  const transitionRef = useRef<TransitioningView>();

  const [creationState, setCreationState] = useState<CreationState>(
    'notCreating',
  );

  const navigation = useNavigation();

  const { storage } = useAsyncStorageContext();

  const dispatch = useDispatch();
  const currentUser = useSelector<AppStore>((store) => store.user.currentUser);
  const didInitialUserFetch = useSelector<AppStore>(
    (store) => store.user.didInitialFetch,
  );
  const [loading, setLoading] = useState(false);

  const handleToggleIsCreatingUser = useCallback(() => {
    transitionRef.current!.animateNextTransition();
    setCreationState('creating');
  }, [transitionRef]);

  useEffect(() => {
    if (didInitialUserFetch || loading || !transitionRef.current) {
      return;
    }

    const timeout = setTimeout(async () => {
      transitionRef.current!.animateNextTransition();

      setLoading(true);

      await wait(1000);

      await dispatch(fetchCurrentUser(storage));

      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    didInitialUserFetch,
    currentUser,
    dispatch,
    loading,
    storage,
    transitionRef,
  ]);

  useEffect(() => {
    if (didInitialUserFetch) {
      if (currentUser) {
        navigation.navigate(RootScreens.Home);
      }
    }
  }, [didInitialUserFetch, currentUser, navigation, transitionRef]);

  return (
    <Transitioning.View
      style={styles.container}
      ref={transitionRef as MutableRefObject<TransitioningView>}
      transition={
        <Transition.Sequence>
          <Transition.Out type="fade" />
          <Transition.In type="fade" delayMs={500} />
          <Transition.Change interpolation="easeInOut" />
        </Transition.Sequence>
      }>
      <Layout level="4" style={styles.layout}>
        {creationState === 'notCreating' && (
          <>
            <Image source={Bg} style={styles.bg} />
            <BackgroundOverlay />
            <Text style={styles.bgSource}>
              Designed by{' '}
              <A
                variant="dark"
                onPress={() =>
                  Linking.openURL('https://www.freepik.com/pch-vector')
                }>
                pch-vector
              </A>
            </Text>
          </>
        )}
        <StatusBar hidden />
        {creationState === 'creating' && <CreateUserForm />}
        <View>
          {creationState === 'notCreating' && (
            <View style={styles.logo}>
              <AppLogo />
            </View>
          )}
          <RowView style={[styles.row]}>
            {loading && <Spinner testID="splashSpinner" size="giant" />}
            {didInitialUserFetch &&
              !currentUser &&
              creationState === 'notCreating' && (
                <GetStartedBtn onPress={handleToggleIsCreatingUser} />
              )}
          </RowView>
        </View>
      </Layout>
    </Transitioning.View>
  );
};

export default SplashScreen;
