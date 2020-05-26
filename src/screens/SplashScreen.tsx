import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button, Spinner } from '@ui-kitten/components';
import { CenteredSafeArea, RowView } from '../styles/view';
import { StyleSheet } from 'react-native';
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
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { RootScreens } from '../screens';

export interface SplashScreenProps {}

const styles = StyleSheet.create({
  loaderRow: {
    marginTop: 20,
    height: 60,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SplashScreen: FC<SplashScreenProps> = () => {
  const navigation = useNavigation();

  const [isCreatingUser, setIsCreatingUser] = useState(false);

  const { storage } = useAsyncStorageContext();

  const transitionRef = useRef<TransitioningView>();

  const dispatch = useDispatch();
  const currentUser = useSelector<AppStore>((store) => store.user.currentUser);
  const didInitialUserFetch = useSelector<AppStore>(
    (store) => store.user.didInitialFetch,
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (didInitialUserFetch || !transitionRef.current || loading) {
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);

      transitionRef.current!.animateNextTransition();

      await dispatch(fetchCurrentUser(storage));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    didInitialUserFetch,
    currentUser,
    transitionRef,
    dispatch,
    loading,
    storage,
  ]);

  useEffect(() => {
    if (didInitialUserFetch) {
      if (!currentUser) {
        transitionRef.current!.animateNextTransition();

        setIsCreatingUser(true);
        setLoading(false);
      } else {
        navigation.navigate(RootScreens.Home);
      }
    }
  }, [didInitialUserFetch, currentUser, transitionRef, navigation]);

  return (
    <CenteredSafeArea>
      <Transitioning.View
        ref={transitionRef as MutableRefObject<TransitioningView>}
        transition={
          <Transition.Sequence>
            <Transition.Out type="fade" />
            <Transition.In type="fade" delayMs={1000} />
            <Transition.Change interpolation="easeInOut" />
          </Transition.Sequence>
        }>
        <AppLogo />

        {(isCreatingUser || loading) && (
          <RowView style={[styles.row, styles.loaderRow]}>
            {loading && <Spinner testID="splashSpinner" size="giant" />}
            {isCreatingUser && (
              <Button
                testID="getStarted"
                accessoryLeft={() => (
                  <MaterialIcon name="pets" color="#fff" size={20} />
                )}>
                Get started
              </Button>
            )}
          </RowView>
        )}
      </Transitioning.View>
    </CenteredSafeArea>
  );
};

export default SplashScreen;
