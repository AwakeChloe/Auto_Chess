import store from './redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './router';

const AppContainer: React.FC = () => {
  return (
    <Provider store={store}>
       <AppRouter/>
    </Provider>
  );
};

export default AppContainer;
