import './sass/app.css';
import Header from './components/header';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function App() {

  return (
    <div className="app">
      <Header />

    </div>
  );
}

export default App;
