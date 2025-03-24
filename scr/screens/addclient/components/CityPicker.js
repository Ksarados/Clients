import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function CityPicker({ text, onChangeText }) {
  return (
    <View>
      <Text style={styles.textEdit}>{text}</Text>
      <View style={styles.container}>
        <RNPickerSelect
          onValueChange={(value) => onChangeText(value)}
          items={[
            { label: "Москва", value: "Москва" },
            { label: "Санкт-Петербург", value: "Санкт-Петербург" },
            { label: "Екатеринбург", value: "Екатеринбург" },
            { label: "Иваново", value: "Иваново" },
            { label: "Краснодар", value: "Краснодар" },
            { label: "Красноярск", value: "Красноярск" },
            { label: "Нижний Новгород", value: "Нижний Новгород" },
            { label: "Новосибирск", value: "Новосибирск" },
            { label: "Сочи", value: "Сочи" },
          ]}
          placeholder={{ label: "Выберите город...", value: null }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  textEdit: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 7,
  },
});
