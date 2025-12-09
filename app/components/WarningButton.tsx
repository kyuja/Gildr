import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
	onPress?: (e: GestureResponderEvent) => void;
	top?: number;
	right?: number;
	size?: number;
};

export default function WarningButton({ onPress}: Props) {
	return (
		<TouchableOpacity
			accessibilityLabel="Warning"
			activeOpacity={0.8}
			onPress={onPress}
			style={[styles.triangle]}
		>
			<Text style={[styles.text]}>!</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	triangle: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(186, 0, 41, 1)',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 6,
		zIndex: 50,
	},
    outline: {
    borderWidth: 1,
    borderColor: 'rgba(7, 7, 7, 0.9)',
   },
	text: {
		color: '#080808ff',
		fontWeight: '800',
        textAlign: 'center'
	},
});
