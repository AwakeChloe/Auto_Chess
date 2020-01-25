import { Actions, Router, Scene, Stack } from 'react-native-router-flux'
import Login from './pages/login'
import EnterProfile from './pages/enter_profile'
import React from 'react';
import * as scenes from './common/scenes'

const App = () => (
  <Router>
    <Stack key="root">
        <Scene key={scenes.LOGIN} type={'reset'} component={Login} />
        <Scene key={scenes.ENTER_PROFILE} type={'reset'} component={EnterProfile} />
    </Stack>
  </Router>
);

export default App
