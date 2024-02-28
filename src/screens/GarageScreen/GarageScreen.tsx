import { View, Text, Button } from "react-native"

import { styles } from "./style"

export default function GarageScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.cameraBox}>
                <View style={styles.triangleCorner}></View>
                <View style={[styles.triangleCorner, styles.topRight]}></View>
                <View style={[styles.triangleCorner, styles.bottonRight]}></View>
                <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
            </View>
            <Text>Garagem</Text>

        </View>
    )
}