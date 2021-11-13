import logo from './logo.svg';

import './App.css';
import './Styles/Variables/index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import {store,persistor} from './Redux/Store';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Routes from './Routes'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Content>
            <Routes />
          </Content>
          <Footer />
        </div>
      </PersistGate>
    </Provider >

  );
}

export default App;
