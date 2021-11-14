import './App.css';
import './Styles/Variables/index.css'
import ReduxProvider from './Components/ReduxProvider';
import Notification from './Components/Notification';
import Loading from './Components/Loading/index';
import Routes from './Routes'

function App() {
  return (
    <ReduxProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes >
          <Notification />
          <Loading />
        </Routes>
      </div>
    </ReduxProvider>
  );
}

export default App;
