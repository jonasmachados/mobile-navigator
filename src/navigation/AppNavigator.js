import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ContactDetailScreen from "../screens/ContactDetailScreen";
import { FaHome, FaUser } from "react-icons/fa";
import * as ConstantsToStyle from "../utils/ConstantsToStyle";
import { Text, StyleSheet, View } from 'react-native';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      drawerStyle: {
        backgroundColor: ConstantsToStyle.BACKGROUND_COLOR,

      },
      drawerInactiveBackgroundColor:  ConstantsToStyle.PRIMARY_COLOR,
      drawerActiveBackgroundColor: ConstantsToStyle.PRIMARY_COLOR,
      activeBackgroundColor: ConstantsToStyle.ACCENT_COLOR,
      inactiveBackgroundColor: ConstantsToStyle.BACKGROUND_COLOR,
      getFocused: ({ route }) => route.name === 'ContactDetail',

    })}
  >
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        drawerLabel: ({ focused }) => (
          <View style={[styles.drawerLabel, { backgroundColor: focused ?
           ConstantsToStyle.HOVER_COLOR : 'transparent' }]}>
            <Text style={styles.labelText}>Home</Text>
          </View>
        ),
        drawerIcon: ({ color, size }) => (
          <FaHome color={ConstantsToStyle.TEXT_COLOR} size={30} />
        ),
      }}
    />

    <Drawer.Screen
      name="ContactDetail"
      component={ContactDetailScreen}
      options={{
        drawerLabel: ({ focused }) => (
          <View style={[styles.drawerLabel, { backgroundColor: focused 
          ? ConstantsToStyle.HOVER_COLOR : 'transparent' }]}>
            <Text style={styles.labelText}>Contact Detail</Text>
          </View>
        ),
        drawerIcon: ({ color, size }) => (
          <FaUser color={ConstantsToStyle.TEXT_COLOR} size={30} />
        )
      }}
    />
  </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerLabel: {
    borderRadius: 5,
  },
  labelText: {
    color: ConstantsToStyle.TEXT_COLOR,
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default AppNavigator;
