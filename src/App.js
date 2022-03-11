
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import './App.css';
import NavBar from './pages/NavBar/NavBar';
import Footer from './pages/Footer/Footer';
import Router from './components/Router/Router';



function App() {
  
  const store = generateStore();

  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Router />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
