import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const DefaultText = ({ children, ...otherProps }) => {
  return (
    <Text style={styles.defaultText} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'open-sans',
  },
});

export default DefaultText;
