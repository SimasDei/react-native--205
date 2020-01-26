import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CustomHeaderButton } from '../components/ui';

export const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text></Text>
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation: { toggleDrawer } }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title={'Menu'} iconName={'ios-menu'} onPress={toggleDrawer} />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FiltersScreen;
