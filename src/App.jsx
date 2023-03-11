import { useState } from 'react';
import { Header, Footer, Home } from './Pages';

import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
