import React, {Component} from 'react';
import { Text, Image, ScrollView, SafeAreaView} from 'react-native';



class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                <ScrollView>
                    <Image source={require('../assets/smiley.png')} style={{ width: 400, height: 400}}/>
                    <Text style={{ fontSize: 80, textAlign: 'center' }}>I Need A Mask</Text>
                    </ScrollView>
            </SafeAreaView>
        );
    }
}

export default HomeScreen;