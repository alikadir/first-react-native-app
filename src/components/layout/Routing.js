import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import RainbowPage from '../pages/RainbowPage';
import ParallaxPage from '../pages/ParallaxPage';
import ImageGalleryPage from '../pages/ImageGalleryPage';
import PagerPage from '../pages/PagerPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Button, View } from 'react-native';
import { Coffee, Heart, Video } from '../svgs';
import FormPage from '../pages/FormPage';
import ZoomPage from '../pages/ZoomPage';
import ZoomGalleryPage from '../pages/ZoomGalleryPage';
import SvgPage from '../pages/SvgPage';
import EGazetePage from '../pages/EGazetePage';
import NotificationPage from '../pages/NotificationPage';
import WebViewPage from '../pages/WebViewPage';
import ListPage from '../pages/ListPage';
import VideoPage from '../pages/VideoPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = props => (
  <Stack.Navigator initialRouteName="TabNavigator">
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="Home" component={HomePage} />
    <Stack.Screen name="Pager" component={PagerPage} />
    <Stack.Screen name="Zoom" component={ZoomPage} />
    <Stack.Screen name="ZoomGallery" component={ZoomGalleryPage} />
    <Stack.Screen name="Svg" component={SvgPage} />
    <Stack.Screen
      name="EGazete"
      component={EGazetePage}
      options={props => ({
        title: props?.route?.name || 'MyTitle',
        headerStyle: { backgroundColor: '#ffdaad' },
        headerTintColor: '#7d4100',
        headerRight: () => (
          <Button onPress={() => props?.navigation?.goBack()} title="Detail" />
        ),
      })}
    />
    <Stack.Screen name="Notification" component={NotificationPage} />
    <Stack.Screen name="WebView" component={WebViewPage} />
    <Stack.Screen
      name="Form"
      component={FormPage}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      mode="modal"
      headerMode="none"
      name="ImageGallery"
      component={ImageGalleryPage}
      options={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    />
    <Stack.Screen name="List" component={ListPage} />
    <Stack.Screen
      name="Video"
      component={VideoPage}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const TabNavigator = props => (
  <Tab.Navigator tabBarOptions={{ showLabel: false }}>
    <Tab.Screen
      name="Home"
      component={HomePage}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Video width={size} height={size} stroke={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Rainbow"
      component={RainbowPage}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 50,
                width: 75,
                height: 75,
                marginBottom: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#e5e5e5',
              }}>
              <View
                style={{
                  backgroundColor: focused ? 'darkred' : 'red',
                  padding: 15,
                  borderRadius: 50,
                  zIndex: 1,
                }}>
                <Coffee width={size} height={size} stroke="white" />
              </View>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  width: 75,
                  height: 70,
                  top: 17,
                  zIndex: 0,
                }}
              />
            </View>
          );
        },
      }}
    />
    <Tab.Screen
      name="Parallax"
      component={ParallaxPage}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Heart width={size} height={size} stroke={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

const Routing = props => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default Routing;
