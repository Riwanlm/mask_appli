import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AddScreen from './screens/AddScreen';
import { Ionicons} from '@expo/vector-icons';
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import { Provider } from 'react-redux';
import reducers from './reducers/index';


const Tab = createBottomTabNavigator();
const store = createStore(reducers, applyMiddleware(thunk));


export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'ios-home';
                        } else if (route.name === 'Search') {
                            iconName = 'ios-search';
                        }else if (route.name === 'Add') {
                            iconName = 'ios-add-circle';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
                               tabBarOptions={{
                                   showLabel: false,
                                   activeTintColor: 'black',
                                   inactiveTintColor: 'black',
                               }}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Search" component={SearchScreen} />
                    <Tab.Screen name="Add" component={AddScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

