import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavigationButton({ back, edit, text, screen }) {
  const navigation = useNavigation();

  return (
    <View style={styles.navgationBar}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image
          style={styles.arrowLeft}
          source={back ? require('../../assets/arrowleft.png') : null}
        />
      </TouchableOpacity>
      {text ? <Text style={styles.textHeader}>{text}</Text> : null}
      <TouchableOpacity>
        <Image
          style={styles.arrowLeft}
          source={edit ? require('../../assets/edit.png') : null}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navgationBar: {
    height: 42,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowLeft: {
    height: 24,
    width: 24,
    marginVertical: 9,
    marginHorizontal: 20,
  },
  textHeader: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
