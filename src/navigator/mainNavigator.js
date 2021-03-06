import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile220349Navigator from '../features/UserProfile220349/navigator';
import Tutorial220348Navigator from '../features/Tutorial220348/navigator';
import NotificationList220320Navigator from '../features/NotificationList220320/navigator';
import Settings220319Navigator from '../features/Settings220319/navigator';
import Settings220311Navigator from '../features/Settings220311/navigator';
import UserProfile220309Navigator from '../features/UserProfile220309/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile220349: { screen: UserProfile220349Navigator },
Tutorial220348: { screen: Tutorial220348Navigator },
NotificationList220320: { screen: NotificationList220320Navigator },
Settings220319: { screen: Settings220319Navigator },
Settings220311: { screen: Settings220311Navigator },
UserProfile220309: { screen: UserProfile220309Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
