import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({ title, onPress, variant = 'primary', style, textStyle }: Props) {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.button, isPrimary ? styles.primary : styles.outline, style]}
    >
      <Text style={[styles.text, isPrimary ? styles.textPrimary : styles.textOutline, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 220,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#ffffff',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
  },
  text: {
    fontWeight: '700',
    fontSize: 30,
  },
  textPrimary: {
    color: '#5a0b0b',
  },
  textOutline: {
    color: '#ffffff',
  },
});
