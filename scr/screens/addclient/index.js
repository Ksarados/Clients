import React, { useReducer } from 'react';
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

// const SET_PHOTO = 'photo';
// const SET_NAME = 'name';
// const SET_NUMBER = 'number';
// const SET_CITY = 'city';
// const SET_BIO = 'bio';

const initialValue = {
  photo: '',
  name: '',
  number: '',
  city: '',
  bio: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'photo':
      return {...state, photo: action.payload };
    case 'name':
      return {...state, name: action.payload };
    case 'number':
      return {...state, number: action.payload };
    case 'city':
      return {...state, city: action.payload };
    case 'bio':
      return {...state, bio: action.payload };
    default:
      return state;
  }
};

export default function AddClient({ navigation }) {
  const [clients, dispatch] = useReducer(reducer, initialValue);

  const addDatePerson = () => {
    navigation.navigate('Clients', { newClient: clients });
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
          <BrowsGallery value={clients.photo} onChangeText={(photoClient) => dispatch({type: 'photo', payload: photoClient})} />
          <TextEditPerson
            text="ФИО"
            textPlaceholder="Введите фамилию и имя"
            value={clients.name}
            onChangeText={(text) => dispatch({type: 'name', payload: text})}
          />
          <EditNumberMask
            text="Введите номар телефона"
            textPlaceholder="+7 (000) 000 00 00"
            keyboard='number-pad'
            value={clients.number}
            onChangeText={(num) => dispatch({type: 'number', payload: num})}
          />
          <CityPicker
            text="Выберите город"
            value={clients.city}
            onChangeText={(text) => dispatch({type: 'city', payload: text})}
          />
          <TextEditPerson
            text="Био"
            textPlaceholder="Укажите хобби, интересы, образование и стаж работы"
            value={clients.bio}
            onChangeText={(text) => dispatch({type: 'bio', payload: text})}
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
