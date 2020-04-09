import React, {Component} from 'react';
import { View, TextInput, Button } from "react-native";

class PharmacieForm extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', address: '', latitude: '', longitude: '', mask: '' };
    }

    onSubmit() {
        console.log(this.state.name);
        console.log(this.state.address);
        console.log(this.state.latitude);
        console.log(this.state.longitude);
        console.log(this.state.mask);

        this.props.addPharmacie({
            name: this.state.name,
            address: this.state.address,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            mask: this.state.mask
        });
        this.setState({ name: '', address: '', latitude: '', longitude: '', mask: '' });
    }

    render() {
        return (
            <View>
                <TextInput value={this.state.name} onChangeText={text => this.setState({ name: text })} placeholder='Nom'/>
                <TextInput value={this.state.address} onChangeText={text => this.setState({ address: text })} placeholder='Adresse'/>
                <TextInput value={this.state.latitude} onChangeText={text => this.setState({ latitude: text })} placeholder='Latitude'/>
                <TextInput value={this.state.longitude} onChangeText={text => this.setState({ longitude: text })} placeholder='Longitude'/>
                <TextInput value={this.state.mask} onChangeText={text => this.setState({ mask: text })} placeholder='Masques disponibles'/>
                <Button title='Enregistrer' onPress={() => this.onSubmit()}/>
            </View>
        );
    }
}

export default PharmacieForm;