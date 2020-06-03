import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Route, SafeAreaView } from 'react-native';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import React, { ReactElement } from 'react';

const FooterNavigator = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const onLongPress = (route: Route) => () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const handleSelect = (index: number) => {
    const route = state.routes[index];

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    const isFocused = index === state.index;

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <SafeAreaView>
      <BottomNavigation onSelect={handleSelect} selectedIndex={state.index}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          return (
            <BottomNavigationTab
              testID={options.tabBarTestID}
              key={route.key}
              onLongPress={onLongPress(route)}
              title={label.toString()}
              icon={
                options.tabBarIcon
                  ? (props) =>
                      options.tabBarIcon!({
                        focused: isFocused,
                        color: '#000',
                        size: 20,
                        ...props,
                      }) as ReactElement
                  : undefined
              }
            />
          );
        })}
      </BottomNavigation>
    </SafeAreaView>
  );
};

export default FooterNavigator;
