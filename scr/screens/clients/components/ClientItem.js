import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from "@react-navigation/native";
import StatusOnline from './StatusOnline';

export default function ClientItem({ client, onPress }) {
  if (!client) return null;

  return (
    <TouchableOpacity
      style={[styles.clientButton, styles.shadow]}
      onPress={() => onPress(client)}>
      <View>
        <StatusOnline online={client?.online} />
        <Image source={client.photo} style={styles.clientPhotoMin} />
      </View>
      <View style={styles.clientText}>
          <Text style={styles.clientNameText}>{client?.name}</Text>
          <Text style={styles.clientCityText}>{client?.city}</Text>
      </View>
      <Image
        source={require('../../../../assets/arrowRight.png')}
        style={styles.arrowRight}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  clientButton: {
    flexDirection: 'row',
    height: 92,
    borderRadius: 16,
    backgroundColor: 'white',
    paddingLeft: 16,
    alignItems: 'center',
    marginHorizontal: 24,
    paddingRight: 16,
    marginTop: 16,
  },
  clientPhotoMin: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  clientText: {
    flex: 1,
  },
  clientNameText: {
    paddingLeft: 16,
    fontWeight: '600',
    fontSize: 16,
  },
  clientCityText: {
    paddingLeft: 16,
    paddingTop: 4,
    fontSize: 13,
    fontWeight: '400',
    color: '#A3A3A3',
  },
  arrowRight: {
    height: 14,
    width: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.41,
    elevation: 2,
  },
});
