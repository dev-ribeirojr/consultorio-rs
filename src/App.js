import './sass/app.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header';
import Home from './pages/home';


AOS.init();
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
