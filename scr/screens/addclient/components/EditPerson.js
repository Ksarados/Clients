import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function EditPerson({
  text,
  bio,
  textPlaceholder,
  value,
  onChangeText,
}) {
  return (
    <View>
      <Text style={styles.textEdit}>{text}</Text>
      <TextInput
        style={[styles.input, bio ? styles.inputBio : {}]}
        placeholder={textPlaceholder}
        multiline={bio ? true : false}
        onChangeText={onChangeText}
        value={value}
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
  inputBio: {
    height: 64,
  },
});
