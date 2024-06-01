
import './App.css';
import { Header } from './components/header';
import Home from './pages/home';

function App() {
  return (
    <div className="App min-h-screen max-h-fit">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
