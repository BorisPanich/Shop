import * as React from 'react';
import { Route } from 'react-router-dom';
import './u0-scss/app.scss';
import { Header } from './u3-components/Header/Header';
import { Cart } from './u5-pages/Cart';
import { Home } from './u5-pages/Home';

export const path = {
  HOME: '/',
  CART: '/cart'
}

function App() {

  const items = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="App">
      <div className="header">
        <Header />
        <div className="content">
          <Route exact path={path.HOME} render={() => <Home />} />
          <Route exact path={path.CART} render={() => <Cart />} />
        </div>
      </div>
    </div>
  );
}

export default App;
