import { Link }  from 'react-router-dom'
import './index.scss';

function Index() {
  return (
    <div className="home">
      <Link to= "/acai"> Açai </Link>
      <Link to="/signo"> Signo </Link>
      <Link to="/sorveteria"> Sorveteria </Link>
    </div>
  );
}

export default Index;
