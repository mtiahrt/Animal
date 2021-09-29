import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HookForm } from './HookForm';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Provider as PaperProvider } from 'react-native-paper';

import {HeaderTitleContext} from './Contexts/HeaderContext';

import Animal from './Animal';
import Cat from './Cat';
import Dog from './Dog';
import CssColors from './CssColors';
import AppHeader from './AppHeader';

const Tab = createBottomTabNavigator();

export default function App() {
  const [headerTitle, setHeaderTitle] = useState('');

  const updateMenuTitle = e => {
    setHeaderTitle(e.target.match(/.+?(?=-)/).pop());
  }

  const setIconValue = ({ route }) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;
      if(route.name === 'Home') {
        iconName = focused 
          ? 'home-sharp'
          : 'home-outline';
      }else if (route.name === 'Cat'){
        iconName = focused 
        ? 'md-logo-octocat'
        : 'md-logo-octocat'
      }else if (route.name === 'Dog'){
        iconName = focused 
        ? 'md-paw'
        : 'md-paw'
      }else if (route.name === 'CssColors'){
        iconName = focused 
        ? 'logo-css3'
        : 'logo-css3'
      }else if (route.name === 'HookForm'){
        iconName = focused 
        ? 'md-person-add'
        : 'md-person'
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    }
  })
  
  return (
    <PaperProvider>
      <NavigationContainer>
        <HeaderTitleContext.Provider value={headerTitle}>
        <AppHeader title={headerTitle}/>
        <Tab.Navigator 
          screenListeners={{
            tabPress: updateMenuTitle
          }}
          screenOptions={setIconValue}>
          <Tab.Screen name='Home' component={Animal} />
          <Tab.Screen name='Cat' component={Cat} />
          <Tab.Screen name='Dog' component={Dog} />
          <Tab.Screen name='CssColors' component={CssColors} />
          <Tab.Screen name='HookForm' component={HookForm} />
        </Tab.Navigator>
        </HeaderTitleContext.Provider>
        </NavigationContainer>
    </PaperProvider>
  );
};
