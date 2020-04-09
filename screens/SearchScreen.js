import React, {Component} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PharmacieListScreen from "./PharmacieListScreen";
import PharmacieScreen from "./PharmacieScreen";


const Stack = createStackNavigator();

class SearchScreen extends Component {

    render() {

        return (
            <Stack.Navigator>
                <Stack.Screen name='PharmacieListScreen' component={PharmacieListScreen}/>
                <Stack.Screen name='PharmacieScreen' options={{title:'Pharmacie'}} component={PharmacieScreen}/>
            </Stack.Navigator>
        );
    }
}

export default SearchScreen;