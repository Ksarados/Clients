import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
//import { user } from './AvatarPerson';

export default function BioDisription({ client }) {
  if (!client) return null;

  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.textHead}>Биография</Text>
      <ScrollView>
        <Text style={styles.description}>{client?.bio}</Text>
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
  descriptionContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 72,
  },
  textHead: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#A3A3A3',
  },
});
