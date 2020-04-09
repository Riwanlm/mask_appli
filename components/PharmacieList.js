import React, {Component} from 'react';
import {FlatList, Button, View, ActivityIndicator} from "react-native";

class PharmacieList extends Component {
    render() {

        const {
            navigate,
            pharmacies,
            loading,
        } = this.props;

        if (loading) {
            return (<ActivityIndicator size='large'/>);
        }

        return (
            <View style={{ marginTop: 250 }}>
                <Button title='Rechercher' onPress={() => this.props.loadPharmacies()}/>
                <FlatList data={pharmacies}
                          renderItem={({item}) =>
                              <Button
                                  title={item.name}
                                  onPress={() =>
                                      navigate('PharmacieScreen', {pharmacie:item})
                                  }>
                              </Button>}
                          keyExtractor={item => item._id}
                />
            </View>
        );
    }
}

export default PharmacieList;