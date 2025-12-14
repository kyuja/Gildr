import React from 'react';
import {Animated} from 'react-native';

function ChatAnimation() {
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
            StyleSheet.messageContainer,
            {
                opacity,
                transform: [{translateY: slideIn}]
            }
        ]}
        >
        <Text>{text}</Text>
        </Animated.View>
    )
);
}