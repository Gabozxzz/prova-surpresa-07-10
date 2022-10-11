import { Link } from 'react-router-dom'
import './index.scss';
import '../../common/index.scss'

function Index() {
  return (
    <div className="home">
      <div className="div-links">
        <div className="div-link">
          <Link to="/acai"> Açai </Link>
        </div>
        <hr/>
        <div className="div-link">
          <Link to="/signo"> Signo </Link>
        </div>
        <hr/>
        <div className="div-link">
          <Link to="/sorveteria"> Sorveteria </Link>
        </div>
        <hr/>
        <div className="div-link">
          <Link to="/salario"> Salário </Link>
        </div>
        <hr/>
        <div className="div-link">
          <Link to="/abastecimento"> Abastecimento </Link>
        </div>
        <hr/>
        <div className="div-link">
          <Link to="/temperatura"> Temperatura </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
