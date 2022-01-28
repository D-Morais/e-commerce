import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainRoutes from './routes'

const App = () => {
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  
  if(localCart !== null) {
    store.dispatch({type: 'CHANGE_CART', localCart})
  }

  return (
    <Provider store={store}>
      <MainRoutes>
      </MainRoutes>
    </Provider>
  );
}

export default App;