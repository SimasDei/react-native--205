import React from 'react';
import { Switch, Text, View, StyleSheet } from 'react-native';

import { colors } from '../../constants';

export const FilterSwitch = ({ isValue, setValue, title }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{title}</Text>
      <Switch
        value={isValue}
        onValueChange={newVal => setValue(newVal)}
        trackColor={{ true: colors.primaryColor, false: colors.accentColor }}
        thumbColor={colors.primaryColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 16,
  },
});

export default FilterSwitch;
