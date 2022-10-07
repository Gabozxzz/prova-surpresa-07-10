import { Link }  from 'react-router-dom'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Link to= "/acai"> Açai </Link>
      <Link to="/signo"> Signo </Link>
      <Link to="/sorveteria"> Sorveteria </Link>
    </div>
  );
}

export default App;
