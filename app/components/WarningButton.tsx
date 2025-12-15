import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Svg, { Polygon } from "react-native-svg";

type Props = {
	onPress?: (e: GestureResponderEvent) => void;
	top?: number;
	right?: number;
	size?: number;
};

export default function WarningButton({ onPress}: Props) {
	const triangleSize = 90;        
 	const half = triangleSize / 2;
	
	return (
		<TouchableOpacity
			accessibilityLabel="Warning"
			activeOpacity={0.8}
			onPress={onPress}
			style={[styles.triangle, { width: triangleSize, height: triangleSize }]}
		>
			<Svg width={triangleSize} height={triangleSize}>
				<Polygon
					points={`${half},0 0,${triangleSize} ${triangleSize},${triangleSize}`}
					fill="rgba(186, 0, 41, 1)"
					stroke="rgba(186, 0, 41, 1)"
					strokeWidth = {2}
					strokeLinejoin="round" 
				/>
			</Svg>
			<Text style={[styles.text]}>!</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	triangle: {
        borderStyle: "solid",
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 50,
		bottom: 40,
    	right: 30,
		paddingBottom: 30,
	},
    outline: {
    borderWidth: 1,
    borderColor: 'rgba(7, 7, 7, 0.9)',
   },
	text: {
		position: "absolute",
		paddingBottom: 10,
		fontSize: 40,
		color: '#080808ff',
		fontWeight: '800',
        textAlign: 'center'
	},
});
