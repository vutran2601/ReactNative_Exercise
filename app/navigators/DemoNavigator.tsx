import {
    BottomTabScreenProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { Icon } from '../components';
import { translate } from '../i18n';
import {
    DemoCommunityScreen,
    DemoDebugScreen,
} from '../screens';
import { DemoPodcastListScreen } from '../screens/DemoPodcastListScreen';
import { MenuScreen } from '../screens/MenuScreen';
import { spacing } from '../theme';
import { AppStackParamList, AppStackScreenProps } from './AppNavigator';
import { View } from 'react-native';

export type DemoTabParamList = {
    Menu: undefined;
    Shopping: undefined;
    Tools: undefined;
    FindStore: undefined;
    Account: undefined;
};

export type DemoTabScreenProps<T extends keyof DemoTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<DemoTabParamList, T>,
        AppStackScreenProps<keyof AppStackParamList>
    >;

const Tab = createBottomTabNavigator<DemoTabParamList>();

export function DemoNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: [$tabBar],
                tabBarActiveTintColor: '#CFAC2C',
                tabBarInactiveTintColor: '#5A3FC1',
                tabBarLabelStyle: $tabBarLabel,
                tabBarItemStyle: $tabBarItem,
            }}
        >
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            icon="miu"
                            color={focused ? '#CFAC2C' : '#5A3FC1'}
                            size={30}
                            style={{
                                marginBottom: 10
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Shopping"
                component={DemoCommunityScreen}
                options={{
                    tabBarLabel: 'Mua sắm',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            icon="cart"
                            color={focused ? '#CFAC2C' : '#5A3FC1'}
                            size={30}
                            style={{
                                marginBottom: 10
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Tools"
                component={DemoPodcastListScreen}
                options={{
                    tabBarAccessibilityLabel: translate(
                        'demoNavigator.podcastListTab'
                    ),
                    tabBarLabel: 'Công cụ',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                backgroundColor: focused ? '#CFAC2C' : '#5A3FC1',
                                padding: 10,
                                bottom: 2,
                                borderRadius: 50,
                                position: 'absolute'
                            }}
                        >
                            <Icon
                                icon="brush"
                                color= 'white'
                                size={45}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="FindStore"
                component={DemoDebugScreen}
                options={{
                    tabBarLabel: 'Tìm đại lý',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            icon="shop"
                            color={focused ? '#CFAC2C' : '#5A3FC1'}
                            size={30}
                            style={{
                                marginBottom: 10
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Account"
                component={DemoDebugScreen}
                options={{
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            icon="account"
                            color={focused ? '#CFAC2C' : '#5A3FC1'}
                            size={30}
                            style={{
                                marginBottom: 10
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const $tabBar: ViewStyle = {
    backgroundColor: 'white',
    borderTopColor: 'gray',
    borderTopWidth: 0.3,
    height: 90,
    paddingTop: 5,
    paddingLeft: 40,
    paddingRight: 40,
};

const $tabBarItem: ViewStyle = {
    paddingTop: spacing.md,
};

const $tabBarLabel: TextStyle = {
    fontSize: 12,
    fontFamily: 'Arial',
    lineHeight: 16,
    flex: 1,
};
