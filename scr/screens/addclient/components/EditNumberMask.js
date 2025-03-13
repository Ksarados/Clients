import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaskImput from 'react-native-mask-input';

export default function EditNumberMask({
  text,
  textPlaceholder,
  value,
  onChangeText,
}) {
  return (
    <View>
      <Text style={styles.textEdit}>{text}</Text>
      <MaskImput
        style={styles.input}
        placeholder={textPlaceholder}
        onChangeText={onChangeText}
        value={value}
        mask={['+','7',' ','(',/\d/,/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,'-',/\d/,/\d/]}
        keyboardType='number-pad'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textEdit: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 7,
  },
  input: {
    height: 48,
    marginBottom: 24,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
    padding: 10,
    placeholderTextColor: '#A3A3A3',
  },
});
