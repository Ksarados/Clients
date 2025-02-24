import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

export default function SearchClient({filter, setFilter}) {

  return (
    <View style={styles.searchView}>
      <Image
        source={require('../../../../assets/searchIcon.png')}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Поиск"
        placeholderTextColor="#A3A3A3"
        value={filter}
        onChangeText={setFilter}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: '#F6F6F6',
  },
  searchIcon: {
    height: 17,
    width: 17,
    marginLeft: 16,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '400',
  },
});
