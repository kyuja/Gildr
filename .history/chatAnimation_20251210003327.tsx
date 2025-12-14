import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

type ChatAnimationProps = {

export function ChatAnimation({text,style}: {text: string, style?: object}) {
    const slideIn = React.useRef(new Animated.Value(20)).current;
    const opacity = React.useRef(new Animated.Value(0)).current; 

    React.useEffect(() => {
        Animated.parallel([
            Animated.timing(slideIn, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);
    return (
        <Animated.View
        style={[
            styles.messageContainer,
            {
                opacity,
                transform: [{translateY: slideIn}]
            }
        ]}
        >
        <Text>{text}</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        padding: 10,
        marginVertical: 5,
    }
})
