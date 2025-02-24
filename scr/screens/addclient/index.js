import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import NavigationButton from '../../components/NavigationButton';
import ActiveButton from '../../components/ActiveButton';
import TextEditPerson from './components/EditPerson';
import EditNumberMask from './components/EditNumberMask';
import BrowsGallery from './components/BrowsGallery';
import CityPicker from './components/CityPicker';

export default function AddClient({ navigation }) {
  const [titlePhoto, setTitlePhoto] = useState('');
  const [titleName, setTitleName] = useState('');
  const [titleNumber, setTitleNumber] = useState('');
  const [titleCity, setTitleCity] = useState('');
  const [titleBio, setTitleBio] = useState('');

  // const [form, setForm] = useState({
  //   titlePhoto: '',
  //   titleName: '',
  //   titleNumber: '',
  //   titleCity: '',
  //   titleBio: '',
  // });

  const addDatePerson = () => {
    //if (!photo || !name || !number || !city || !bioText) return;
    const client = {
      photo: titlePhoto,
      name: titleName,
      number: titleNumber,
      city: titleCity,
      bio: titleBio,
    };
    navigation.navigate('Clients', { newClient: client });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content" // Стиль текста (например, light-content, dark-content)
        backgroundColor="#FFFFFF" // Цвет фона статус-бара (для Android)
        translucent={false} // Делает статус-бар прозрачным (опционально)
      />
      <View style={styles.navigation}>
        <NavigationButton back text="Добавить нового" screen="Clients" />
      </View>
      <KeyboardAvoidingView style={styles.keyboardAvoiding}>
        <ScrollView style={styles.textEditView}>
          <BrowsGallery value={titlePhoto} onChangeText={setTitlePhoto} />
          <TextEditPerson
            text="ФИО"
            textPlaceholder="Введите фамилию и имя"
            value={titleName}
            onChangeText={setTitleName}
          />
          <EditNumberMask
            text="Введите номар телефона"
            textPlaceholder="+7 (000) 000 00 00"
            keyboard='number-pad'
            value={titleNumber}
            onChangeText={setTitleNumber}
          />
          <CityPicker
            text="Выберите город"
            value={titleCity}
            onChangeText={setTitleCity}
          />
          <TextEditPerson
            text="Био"
            textPlaceholder="Укажите хобби, интересы, образование и стаж работы"
            value={titleBio}
            onChangeText={setTitleBio}
            bio
          />
        </ScrollView>

        <View style={styles.addNewButton}>
          <ActiveButton
            text="Добавить"
            active
            onPress={addDatePerson}
            screen="Clients"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  navigation: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  textEditView: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  addNewButton: {
    marginHorizontal: 24,
    marginBottom: 10,
  },
});
