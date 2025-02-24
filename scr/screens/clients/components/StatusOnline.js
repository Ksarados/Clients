import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function StatusOnline({ online }) {
  if (online === true) {
    return <View style={styles.statusOnline} />;
  }
  return null;
}

export const styles = StyleSheet.create({
  statusOnline: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    position: 'absolute',
    top: 37,
    right: 3,
    zIndex: 1,
  },
});
