import './App.css';
import './Styles/Variables/index.css'
import ReduxProvider from './Components/ReduxProvider';
import Loading from './Components/Loading/index';
import Routes from './Routes'

function App() {
  return (
    <ReduxProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes />
        <Loading />
      </div>
    </ReduxProvider>
  );
}

export default App;
