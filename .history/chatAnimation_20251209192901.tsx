import React from 'react';
import {Animated, Text, StyleSheet} from 'react-native';

function ChatAnimation({text:}) {
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

const styles = StyleSheet.create({});
    messageContainer: {
        // Add your styles here
    }
});