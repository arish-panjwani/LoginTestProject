import TextView from '@components/TextView/TextView';
import {LOGIN_SCREEN_KEY} from '@navigation/Routes';
import {Colors} from '@resources/Colors';
import {CommonStyles} from '@resources/CommonStyles';
import {Strings} from '@resources/Strings';
import {DashboardProps, FunctionReturnAnyWithParams} from '@resources/Types';
import React, {useCallback} from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';

const {
  flexOne,
  marginHorizontalSeven,
  marginTopFive,
  marginTopFour,
  paddingHorizontalThree,
  paddingVerticalOne,
  borderRadiusThreeHalf,
  alignSelfCenter,
  marginTopThree,
  marginBottomSix,
  textAlignCenter,
} = CommonStyles;

const {
  DASHBOARD,
  LOGOUT,
  EMAIL,
  LOGIN_SUCCESS,
  PROFILE_DETAILS,
  MOBILE_NUMBER,
} = Strings;

const {white, textColor, primaryColor} = Colors;

const Dashboard = (props: DashboardProps) => {
  const {navigation, route} = props;

  const onLogoutPress: FunctionReturnAnyWithParams = useCallback(() => {
    navigation.navigate(LOGIN_SCREEN_KEY);
  }, [navigation]);

  const renderUserDataView: FunctionReturnAnyWithParams = useCallback(() => {
    const {params} = route;
    const {email, mobileNo} = params;

    return (
      <View>
        <TextView
          color={textColor}
          body
          style={[alignSelfCenter, textAlignCenter, marginTopFour]}>
          {LOGIN_SUCCESS}
        </TextView>
        <TextView
          // color={primaryColor}
          title
          medium
          style={[alignSelfCenter, textAlignCenter, marginTopFour]}>
          {PROFILE_DETAILS}
        </TextView>
        <View
          style={[
            paddingHorizontalThree,
            paddingVerticalOne,
            marginTopFive,
            {backgroundColor: white},
            borderRadiusThreeHalf,
          ]}>
          <TextView>{`${EMAIL}: ${email}`}</TextView>
          <TextView
            style={marginTopThree}>{`${MOBILE_NUMBER}: ${mobileNo}`}</TextView>
        </View>
      </View>
    );
  }, [route]);

  return (
    <>
      <SafeAreaView style={[marginHorizontalSeven, flexOne]}>
        <TextView medium subHeading style={[marginTopThree, alignSelfCenter]}>
          {DASHBOARD}
        </TextView>
        {renderUserDataView()}
      </SafeAreaView>
      <TouchableOpacity onPress={onLogoutPress}>
        <TextView
          color={primaryColor}
          title
          style={[marginBottomSix, alignSelfCenter]}>
          {LOGOUT}
        </TextView>
      </TouchableOpacity>
    </>
  );
};

export default Dashboard;
