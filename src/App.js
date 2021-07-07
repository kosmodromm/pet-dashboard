import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header'
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
