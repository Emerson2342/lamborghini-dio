import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

import { AntDesign } from "@expo/vector-icons"

export function BuyButton() {
    return (
        <TouchableOpacity
            style={styles.button}
        >
            <AntDesign
                style={styles.icon}
                name="shoppingcart" size={24} color="white" />
            <Text style={styles.buttonText}>Buy This</Text>

        </TouchableOpacity>
    );
}