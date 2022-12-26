export type FunctionReturnAnyWithParams = (...args: any[]) => any;

export type ObjectOrArray = Record<string, any> | any[];

export type NavigationProps = {
  navigate?: FunctionReturnAnyWithParams;
  pop?: FunctionReturnAnyWithParams;
  goBack?: FunctionReturnAnyWithParams;
  addListener?: FunctionReturnAnyWithParams;
};

export type MainNavigatorProps = {
  onNavigationStateChange?: FunctionReturnAnyWithParams;
};

export type LoginScreenProps = {navigation?: any};

export type SignupScreenProps = {navigation?: any};

export type DashboardProps = {
  navigation?: any;
  route: {
    params: {
      email: string;
      mobileNo: string | number;
      password: string;
      id: string | number;
    };
  };
};

export type TextViewProps = {
  children: string | number;
  style?: ObjectOrArray;
  subHeading?: boolean;
  largeTitle?: boolean;
  title?: boolean;
  description?: boolean;
  body?: boolean;
  note?: boolean;
  light?: boolean;
  regular?: boolean;
  medium?: boolean;
  bold?: boolean;
  color?: string;
};
