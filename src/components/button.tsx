import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

interface ButtonProps {
    onPress: () => void;
    title?: string | React.ReactElement;
}

export default function Button({ onPress, title = "Mostrar Productos" }: ButtonProps) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    );
}

// Resto del código...

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
});
