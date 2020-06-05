import React, { FC, useCallback, useEffect } from 'react';
import {
  LayoutAnimation,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import useBooleanToggle from '../../../hooks/common/useBooleanToggle';
import { Button, Icon, Layout } from '@ui-kitten/components';
import { normalIcon } from '../../../styles/icons';

export interface CollapsableProps {
  expandedStyle?: StyleProp<ViewStyle>;
  collapsedStyle?: StyleProp<ViewStyle>;
  onExpandChange?: (isExpanded: boolean) => any;
}

const styles = StyleSheet.create({
  expanded: {
    paddingTop: 35,
    height: '85%',
  },
  collapsed: {
    paddingTop: 35,
    height: 180,
    justifyContent: 'space-between',
  },
  btn: {
    zIndex: 2,
  },
  btnCollapsed: {
    position: 'absolute',
    top: -25,
    width: 50,
    height: 50,
    left: '44%',
    borderRadius: 100,
  },
  expandedIcon: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  layout: {
    alignSelf: 'flex-end',
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

const Collapsable: FC<CollapsableProps> = ({
  children,
  collapsedStyle,
  expandedStyle,
  onExpandChange,
}) => {
  const { value: expanded, toggle: toggleExpanded } = useBooleanToggle({
    initialValue: false,
  });

  const handleToggle = useCallback(() => {
    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.easeInEaseOut,
      duration: 250,
    });

    toggleExpanded();
  }, [toggleExpanded]);

  useEffect(() => {
    if (onExpandChange) {
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.easeInEaseOut,
        duration: 250,
      });

      onExpandChange(expanded);
    }
  }, [expanded, onExpandChange]);

  return (
    <View style={styles.container}>
      <Layout
        level="4"
        style={[expanded ? expandedStyle : collapsedStyle, styles.layout]}>
        <Button
          size="large"
          style={[styles.btn, styles.btnCollapsed]}
          onPress={handleToggle}
          accessoryLeft={() => (
            <Icon
              fill="#fff"
              style={[normalIcon, expanded ? styles.expandedIcon : undefined]}
              name="arrow-up-outline"
            />
          )}
        />
        <View style={expanded ? styles.expanded : styles.collapsed}>
          {children}
        </View>
      </Layout>
    </View>
  );
};

export default Collapsable;
