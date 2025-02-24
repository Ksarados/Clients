import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function BrowsGallery({value, onChangeText}) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onChangeText(result.assets[0].uri);
    }
  };
  console.log('photo ', value)
  return (
    <TouchableOpacity style={styles.container} onPress={pickImage} >
      <Text style={styles.titleButton}>Добавить фото</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    borderRadius: 16,
    backgroundColor: '#FB7360',
    padding: 10,
    },
    titleButton: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    },
  image: {
    width: 200,
    height: 200,
  },
});
