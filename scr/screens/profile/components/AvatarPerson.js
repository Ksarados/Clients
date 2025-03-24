import React from "react";
import { Text, Image, View, Dimensions, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function AvatarUser({ client }) {
  if (!client) return null;

  return (
    <View style={styles.avatar}>
      <View style={styles.photoView}>
        <Image style={styles.photo} source={client?.photo} />
      </View>
      <View style={styles.name}>
        <Text style={styles.textName}>{client?.name}</Text>
        <Text style={styles.cityName}>{client?.city}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
  },
  photoView: {
    alignItems: "center",
  },
  photo: {
    width: SCREEN_WIDTH - 110 * 2,
    height: "auto",
    aspectRatio: 1, // высота равнется ширине
    marginTop: 8,
    borderRadius: 500,
  },
  name: {
    alignItems: "center",
  },
  textName: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "700",
  },
  cityName: {
    fontSize: 13,
    color: "#A3A3A3",
    paddingTop: 4,
  },
});
