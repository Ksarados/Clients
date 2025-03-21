import React, { useReducer } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addClientAction } from '../../reducer/clientReducer';
import NavigationButton from '../../components/NavigationButton';
import ActiveButton from '../../components/ActiveButton';
import TextEditPerson from './components/EditPerson';
import EditNumberMask from './components/EditNumberMask';
import BrowsGallery from './components/BrowsGallery';
import CityPicker from './components/CityPicker';

export const PHOTO_CHANGED = 'client/PHOTO_changed';
export const NAME_CHANGED = 'client/name_changed';
export const NUMBER_CHANGED = 'client/number_changed';
export const CITY_CHANGED = 'client/city_changed';
export const BIO_CHANGED = 'client/bio_changed';

const initialValue = {
  // photo: '',
  // name: '',
  number: '7',
  // city: '',
  // bio: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case PHOTO_CHANGED:
      return {...state, photo: action.payload };
    case NAME_CHANGED:
      return {...state, name: action.payload };
    case NUMBER_CHANGED:
      return {...state, number: action.payload };
    case CITY_CHANGED:
      return {...state, city: action.payload };
    case BIO_CHANGED:
      return {...state, bio: action.payload };
    default:
      return state;
  }
};

const onChangePhoto = (photo) => {
  return { type: PHOTO_CHANGED, payload: photo };
};

const onChangeName = (name) => {
  return { type: NAME_CHANGED, payload: name };
};

const onChangeNumber = (number) => {
  return { type: NUMBER_CHANGED, payload: number };
};

const onChangeCity = (city) => {
  return { type: CITY_CHANGED, payload: city };
};

const onChangeBio = (bio) => {
  return { type: BIO_CHANGED, payload: bio };
};

export default function AddClient({ navigation }) {

  const [state, dispatch] = useReducer(reducer, initialValue);
  // console.log('state in component', state);

  const clients = useSelector((state) => state);
  console.log('clients:', clients);

  const reduxDispatch = useDispatch();

  const addDatePerson = () => {
    if (!state.name && !state.city && !state.bio) {
      return alert( 'Заполните все поля' );
    }
    const client = state;
    reduxDispatch(addClientAction(client));
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
          <BrowsGallery onChangeText={(url) => dispatch(onChangePhoto(url))} />
          <TextEditPerson
            text="ФИО"
            textPlaceholder="Введите фамилию и имя"
            value={state.name}
            onChangeText={(text) => dispatch(onChangeName(text))}
          />
          <EditNumberMask
            text="Введите номар телефона"
            textPlaceholder="+7 (000) 000 00 00"
            keyboard='number-pad'
            value={state.number}
            onChangeText={(num) => dispatch(onChangeNumber(num))}
          />
          <CityPicker
            text="Выберите город"
            value={state.city}
            onChangeText={(text) => dispatch(onChangeCity(text))}
          />
          <TextEditPerson
            text="Био"
            textPlaceholder="Укажите хобби, интересы, образование и стаж работы"
            value={state.bio}
            onChangeText={(text) => dispatch(onChangeBio(text))}
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
