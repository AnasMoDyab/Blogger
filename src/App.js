import logo from './logo.svg';
import './App.css';
import Home from './container/Home';
import { Route} from 'react-router-dom';


function App() {
  return (
    <>
    
    <Route exact path="/">
        <Home />
      </Route>

  
    </>
  );
}

export default App;
