import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import NavigationButton from '../../components/NavigationButton';
import AvatarPerson from './components/AvatarPerson';
import ActiveButton from '../../components/ActiveButton';
import BioDisription from './components/BioDiscription';

export default function ProfileClient({ navigation, route }) {
  const client = route.params?.client;
  //console.log('ProfileClient', client);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content" // Стиль текста (например, light-content, dark-content)
        backgroundColor="#FFFFFF" // Цвет фона статус-бара (для Android)
        translucent={false} // Делает статус-бар прозрачным (опционально)
      />
      <NavigationButton back edit screen="Clients" />
      <AvatarPerson client={client} />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonVertical}>
          <ActiveButton text="Чат" screen="Clients" />
        </View>
        <View style={styles.widthBut} />
        <View style={styles.buttonVertical}>
          <ActiveButton text="Звонок" active screen="Clients" />
        </View>
      </View>
      <BioDisription client={client} />
      <View style={styles.showMoreBut}>
        <ActiveButton text="Показать больше" icon={true} screen="Clients" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 32,
  },
  widthBut: {
    width: 10,
  },
  showMoreBut: {
    marginTop: 40,
    marginBottom: 10,
    marginHorizontal: 24,
  },
  buttonVertical: {
    flex: 1,
  },
});
