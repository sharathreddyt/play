import { RootNavigator } from '../navigation/RootNavigation';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'ScreenOne' })],
});
const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('ScreenOne'),
);

const initialRoute = RootNavigator.router.getStateForAction(initialState);

export default (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
  }

  return nextState || state;
};
