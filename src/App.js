import logo from './logo.svg';
import './App.css';
import './Styles/Variables/index.css'
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Routes from './Routes'

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Content>
        <Routes/>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
