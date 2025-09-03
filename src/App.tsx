

import Home from './pages/Home';
import Footer from './components/Footer';
import PhoneFloatingButton from './components/PhoneFloatingButton';


function App() {
  return (
    <>
      <Home />
      <Footer />
      <PhoneFloatingButton phoneNumber="7272701358" displayNumber="(727) 270-1358" tooltip="Call MGM Aluminum now!" />
    </>
  );
}

export default App;
