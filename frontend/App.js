import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import SigninScreen from './screens/Signin';
import AlarmScreen from './screens/Alarm';
import MessageScreen from './screens/SendMessage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReceivedBox from './screens/ReceivedBox';

const Tabs = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4385E0',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
const AlarmStack = createNativeStackNavigator();
function AlarmStackScreen() {
  return (
    <AlarmStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4385E0',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      {/* <AlarmStack.Screen name="Alarm" component={AlarmScreen} /> */}
      <AlarmStack.Screen name="Alarm" component={ReceivedBox} />
    </AlarmStack.Navigator>
  );
}
const AccountStack = createNativeStackNavigator();
function AccountStackScreen() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4385E0',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <AccountStack.Screen name="login" component={LoginScreen} />
      <AccountStack.Screen name="signin" component={SigninScreen} />
    </AccountStack.Navigator>
  );
}

const MessageStack = createNativeStackNavigator();
function MessageStackScreen() {
  return (
    <MessageStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4385E0',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <MessageStack.Screen name="Messege" component={MessageScreen} />
    </MessageStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tabs.Screen
          name="home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#4385E0' : 'grey',
                  }}
                  source={require('./assets/icons/homepage.png')}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="alarm"
          component={AlarmStackScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#4385E0' : 'grey',
                  }}
                  source={require('./assets/icons/bell.png')}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="message"
          component={MessageStackScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#4385E0' : 'grey',
                  }}
                  source={require('./assets/icons/email.png')}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="로그인 하기"
          component={AccountStackScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#4385E0' : 'grey',
                  }}
                  source={require('./assets/icons/enter.png')}
                />
              </View>
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
