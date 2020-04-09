import React, {Component} from 'react';
import { Text, View, SafeAreaView, ScrollView} from 'react-native';
import PharmacieFormContainer from "../containers/PharmacieFormContainer";


class AddScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                <ScrollView>
                    <Text>Ajouter une pharmacie</Text>
                    <View>
                        <PharmacieFormContainer/>
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}


export default AddScreen;