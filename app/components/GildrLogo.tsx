import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function GildrLogo({ size = 40 }: { size?: number }) {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.text, { fontSize: size }]}>Gildr</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f3f3f3',
    fontWeight: '800',
    fontStyle: 'italic',
    // approximate the Figma drop shadow
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    // tighten tracking slightly to match design
    letterSpacing: -0.4,
  },
});
