import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#01a6b3",
        padding: 10,
        width: "80%",
        borderRadius: 8
    },
    icon: {
        marginRight: 10
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontStyle: "italic"
    }
});