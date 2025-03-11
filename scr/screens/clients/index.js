import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from "expo-splash-screen";

import ClientItem from './components/ClientItem';
import ActiveButton from '../../components/ActiveButton';
import SearchClient from './components/SearchClient';

const client1 = {
  id: '1',
  online: true,
  photo: require('../../../assets/SergayChernishovMin.png'),
  name: 'Сергей Чернышев',
  number: '79999999999',
  city: 'Казань',
  bio: 'Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трехлетней дочкой. \n\n По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.',
};

const client2 = {
  id: '2',
  online: false,
  photo: require('../../../assets/IvanIgnatovMin.png'),
  name: 'Иван Игнатов',
  number: '79999999999',
  city: 'Калининград',
  bio: 'Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трехлетней дочкой. \n\n По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.',
};

const client3 = {
  id: '3',
  online: false,
  photo: require('../../../assets/OlegIvanovMin.png'),
  name: 'Олег Иванов',
  number: '79999999999',
  city: 'Москва',
  bio: 'Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трехлетней дочкой. \n\n По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.',
};

const defultClients = [client1, client2, client3];

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@clients', jsonValue)
  } catch (e) {
// saving error
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@clients')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
// error reading value
  }
}

// const clearStorage = async () => {
//   try {
//     await AsyncStorage.clear();
//     console.log('Хранилище очищено');
//   } catch (error) {
//     console.error('Ошибка при очистке AsyncStorage:', error);
//   }
// };

// clearStorage();

SplashScreen.preventAutoHideAsync(); // Оставляем экран загрузки

export default function Clients({ navigation, route }) {
  const [clients, setClients] = useState(defultClients);
  const [filterClients, setFilteredClients] = useState(clients);
  const [filter, setFilter] = useState('');

  const loadClients = async () => {
    const storedClients = await getData();
    setClients(storedClients ?? []);
  }

  useEffect (() => {
   loadClients()
  }, []);

  useEffect(() => {
    if (route.params?.newClient) {
      const newClients = [...clients, route.params?.newClient];
      setClients(newClients);
      storeData(newClients);
      navigation.setParams({
        newClients: undefined,
      });
    }
  }, [route.params?.newClient, navigation]);

  useEffect(() => {
    const newFilterClients = clients.filter((client) =>
      client.city.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      client.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    setFilteredClients(newFilterClients);
    console.log('Filter', filterClients);
  }, [filter, clients]);

  const onPressClient = (client) => {
    navigation.navigate('ProfileClient', { client });
  };

  const renderItem = ({ item }) => {
    return <ClientItem client={item} onPress={onPressClient} />;
  };
 // Задержка загрузки приложения для просмотра экрана загрузки
  useEffect(() => {
    const loadApp = async () => {
      // Симуляция загрузки данных
      await new Promise((resolve) => setTimeout(resolve, 5000));
      await SplashScreen.hideAsync(); // Скрываем splash screen
    };

    loadApp();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content" // Стиль текста (например, light-content, dark-content)
        backgroundColor="#FFFFFF" // Цвет фона статус-бара (для Android)
        translucent={false} // Делает статус-бар прозрачным (опционально)
      />
      <View style={styles.headerViewText}>
        <Text style={styles.headerText}>Клиенты</Text>
      </View>
      <SearchClient filter={filter} setFilter={setFilter} />
      <FlatList
        data={filterClients}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id}
      />
      <View style={styles.addNewButton}>
        <ActiveButton
          text="Добавить нового"
          active={true}
          icon={false}
          onPress={() => navigation.navigate('AddClient')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  headerViewText: {
    paddingTop: 48,
  },
  headerText: {
    marginHorizontal: 24,
    fontSize: 34,
    fontWeight: '700',
  },
  addNewButton: {
    marginHorizontal: 24,
    marginBottom: 10,
  },
});
