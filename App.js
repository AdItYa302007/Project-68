import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import    Facebook    from    './Screens/fb';
import Instagram  from './Screens/in';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';



export default function App() {
  return (
    <View style={styles.container}>

      <AppContainer/>

    </View>
  );
}

const TabNavigator= createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
})

const AppContainer =createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
