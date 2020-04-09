import React, {Component} from 'react';
import { View } from "react-native";
import PharmacieListContainer from "../containers/ParmacieListContainer";

class PharmacieListScreen extends Component {
    render() {

        const {navigate} = this.props.navigation;

        return (
            <View>
                <PharmacieListContainer navigate={navigate}/>
            </View>
        );
    }
}

export default PharmacieListScreen;