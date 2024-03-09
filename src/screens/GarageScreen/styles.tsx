import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#1e1e20",
        justifyContent: "center",
        alignItems: "center"
    },
    cameraBox: {
        position: "relative",
        width: 350,
        height: "90%",
        borderWidth: 2,
        overflow: "hidden",
        borderColor: "#fff",
        borderRadius: 7
    },
    triangleCorner: {
        position: "absolute",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderTopWidth: 20,
        borderTopColor: "#fff",
        borderRightWidth: 20,
        borderRightColor: "transparent"
    },
    topRight: {
        right: 0,
        transform: [{ rotate: "90deg" }]
    },
    bottomRight: {
        bottom: 0,
        right: 0,
        transform: [{ rotate: "180deg" }]
    },
    bottomLeft: {
        bottom: 0,
        transform: [{ rotate: "-90deg" }]
    },

});