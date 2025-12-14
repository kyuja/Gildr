import React from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

type Props = {
  label: string;
} & TextInputProps;

export function InputField({ label, ...inputProps }: Props) {
  return (
    <View style={styles.fieldWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#888"
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fieldWrapper: {
    marginBottom: 16,
  },
  label: {
    color: "#f3f3f3",
    marginBottom: 4,
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#f3f3f3",
    backgroundColor: "#ffffffff",
  },
});