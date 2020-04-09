import React, {Component} from 'react';
import { View, Text, Image } from "react-native";


class PharmacieItem extends Component {

    render() {

        const {pharmacie} = this.props;

        return (
            <View style={{alignItems: 'center'}}>
                <Image
                    source={require('../assets/logo.png')} style={{width: 200, height: 200, marginBottom: 20, marginTop: 150}}
                />
                <Text style={{fontSize: 20, marginBottom: 20, marginTop: 100 }}>
                    Bienvenu à la pharmacie {pharmacie.name}
                </Text>
                <Text style={{fontSize: 15, marginBottom: 20}}>
                    Adresse: {pharmacie.address}
                </Text>
                <Text style={{fontSize: 15, marginBottom: 20}}>
                    Masques disponibles: {pharmacie.mask}
                </Text>
            </View>
        );
    }
}
export default PharmacieItem;