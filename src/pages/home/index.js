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
        <hr/>
        <div className="div-link">
          <Link to="/orcamento"> Orcamento </Link>
        </div>
        <hr/>
        <div className="div-link">
          <Link to="/ingresso"> Ingresso </Link>
        </div>
        <hr/>
        <div className="div-link">
          <Link to="/iniciofim"> Início-Fim </Link>
        </div>
        <hr/>
        <div className="div-link">
          <Link to="/linhatam"> Linha </Link>
        </div>
        <hr/>
        <div className="div-link">
          <Link to="/retangulo"> Retângulo </Link>
        </div>
        <hr/>
        <div className="div-link">
          <Link to="/cafe"> Café </Link>
        </div>
        <hr/>
        <div className="div-link">
          <Link to="/juros"> Juros </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
