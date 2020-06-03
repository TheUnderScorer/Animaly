import React, { FC, useCallback } from 'react';
import { AProps, A } from '../../../styles/typography';
import { Linking } from 'react-native';

export interface LinkProps extends AProps {
  href: string;
}

const Link: FC<LinkProps> = ({ variant, href, children }) => {
  const handlePress = useCallback(async () => {
    await Linking.openURL(href);
  }, [href]);

  return (
    <A onPress={handlePress} variant={variant}>
      {children}
    </A>
  );
};

export default Link;
