import React, { Component } from "react";
import { View } from "react-native";
import PharmacieItemContainer from "../containers/PharmacieItemContainer";

class PharmacieScreen extends Component {
    render() {

        const {pharmacie} = this.props.route.params;

        return (
            <View>
                <PharmacieItemContainer pharmacie={pharmacie}/>
            </View>
        );
    }
}

export default PharmacieScreen;