import React from 'react';
import { Text, View, Button, Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  ClientsScreen  from './pages/Customers'
import  ProjectScreen  from './pages/Projects'
import  HomeScreen  from './pages/Home'

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='home' component={HomeScreen} options={{ tabBarLabel: 'Teste', tabBarIcon: makeIconRender('home') }} />
        <Tab.Screen name="Cadastro de Clientes" component={ClientsScreen} options={{ tabBarLabel: 'Clientes', tabBarIcon: makeIconRender1('add-user') }} />
        <Tab.Screen name="Projetos Solar" component={ProjectScreen} options={{ tabBarIcon: makeIconRender('cog') }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function goBack() {
  <Text>Certo</Text>
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

function makeIconRender1(name) {
  return ({ color, size }) => (
    <Entypo name={name} color={color} size={size} />
  );
}
