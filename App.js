import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Animal from './Animal';
import Cat from './Cat';
import Dog from './Dog';
import CssColors from './CssColors';
import { HookForm } from './HookForm';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name='Home'
          component={Animal}/>
        <Stack.Screen
          name="Cat"
          component={Cat}
          options={{title: 'Meow'}}/>
        <Stack.Screen 
          name='Dog'
          options={{title: 'Woof'}}
          component={Dog} />
        <Stack.Screen
          name="CssColors"
          component={CssColors} />
        <Stack.Screen 
          name='HookForm' 
          component={HookForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
