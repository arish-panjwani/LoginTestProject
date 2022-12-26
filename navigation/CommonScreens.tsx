import {DASHBOARD_SCREEN_KEY, SIGNUP_SCREEN_KEY} from '@navigation/Routes';
import Dashboard from '@screens/Dashboard/Dashboard';
import SignupScreen from '@screens/SignUp/SignupScreen';
import React from 'react';

const CommonScreensMap: any = {
  [SIGNUP_SCREEN_KEY]: SignupScreen,
  [DASHBOARD_SCREEN_KEY]: Dashboard,
};

export function renderCommonScreens(Stack: any) {
  return Object.keys(CommonScreensMap)?.map(screenKey => {
    const screen = CommonScreensMap[screenKey];
    return (
      <Stack.Screen
        key={screenKey}
        name={screenKey}
        component={screen}
        options={{
          headerShown: false,
        }}
      />
    );
  });
}
