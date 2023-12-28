import './style.css'
import NavBarComponentes from '../NavBar'
import catador from '../../assets/catador-reciclagem.jpg'
import doador from '../../assets/doador.jpg'
import empresa from '../../assets/empresa3.jpg'
function Menu(){
    return(
        <div className='body'>

            <div className="container-">
            <NavBarComponentes/>
        <div className="row">
            <div className="subtitle">
                <h1>Escolha o tipo de cadastro</h1>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="profile-card">
                    <div className="profile-img">
                        <img src={catador} alt="Team Image" />
                    </div>
                    <div className="profile-content">
                        <h2 className="title">
                            <a href="./catador" class="link">Catador</a>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div class="profile-card">
                    <div className="profile-img">
                        <img src={doador} alt="Team Image" />
                    </div>
                    <div className="profile-content">
                        <h2 class="title">
                            <a href="./doador" class="link">Doador</a>
                        </h2>
                         <ul className="social-link">
                            <li><a href="./cadastro.html" class="fa fa-facebook"></a></li>
                            <li><a href="#" class="fa fa-google"></a></li>
                            <li><a href="#" class="fa fa-twitter"></a></li>
                            <li><a href="#" class="fa fa-youtube"></a></li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="profile-card">
                    <div className="profile-img">
                        <img src={empresa} alt="Team Image" />
                    </div>
                    <div className="profile-content">
                        <h2 className="title">
                            <a href="./empresa" class="link">Associação</a>
                        </h2>
                        
                    </div>
                   
                    
                </div>
            </div>
        </div>
    </div>
    <footer className='footerMenu'>
      <p>&copy; Conecta - Todos os direitos reservados.</p>
    </footer>

        </div>
        
        
    )
}


export default Menu