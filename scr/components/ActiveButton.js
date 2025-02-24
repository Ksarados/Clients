import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ActiveButton({ active, icon, text, onPress }) {
  //if (!active || !icon || !text || !onPress) return null;

  return (
    <TouchableOpacity
      style={[
        styles.buttonPassive,
        active? styles.buttonActive:{},
        icon? styles.buttonShowIcon:{},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonPassiveText,
          active? styles.buttonActiveText: {},
          icon? styles.buttonPassiveText:{},
        ]}>
        {text}
      </Text>
      {Boolean(icon) && (
        <Image
          style={styles.arrowDown}
          source={require('../../assets/arrowDown.png')}
        />
      )}
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  buttonPassive: {
    width: '100%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#FB7360',
    backgroundColor: '#FFFFFF',
  },
  buttonActive: {
    backgroundColor: '#FB7360',
  },
  buttonShowIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonActiveText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  buttonPassiveText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FB7360',
  },
  arrowDown: {
    height: 8,
    width: 14,
    marginLeft: 9,
  },
})
