import { Actions, Router, Scene, Stack } from 'react-native-router-flux'
import Login from './pages/login'
import EnterProfile from './pages/enter_profile'
import React from 'react';
import * as scenes from './common/scenes'
import GameGuide from './pages/game_guide'

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key={scenes.GAME_GUIDE} type={'replace'} component={GameGuide} />
      <Scene key={scenes.LOGIN} back type={'push'} component={Login} />

      <Scene key={scenes.ENTER_PROFILE} type={'reset'} component={EnterProfile} />
    </Stack>
  </Router>
);

export default App
