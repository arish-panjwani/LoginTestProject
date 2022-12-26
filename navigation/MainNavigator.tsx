import {renderCommonScreens} from '@navigation/CommonScreens';
import {LOGIN_SCREEN_KEY} from '@navigation/Routes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@screens/Login/LoginScreen';
import React from 'react';
import {MainNavigatorProps} from '@resources/Types';

const MainStack = createStackNavigator();

const MainNavigator = React.forwardRef(
  (props: MainNavigatorProps, ref: any) => {
    return (
      <NavigationContainer ref={ref}>
        <MainStack.Navigator>
          <MainStack.Screen
            name={LOGIN_SCREEN_KEY}
            component={LoginScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
              animationEnabled: false,
            }}
          />
          {renderCommonScreens(MainStack)}
        </MainStack.Navigator>
      </NavigationContainer>
    );
  },
);

export default MainNavigator;

MainNavigator.propTypes = {};
