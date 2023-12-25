import './style.css'
import NavBarComponentes from '../../Componentes/NavBar'
import maquina from '../../assets/maquina-reciclar-transformed.jpeg'
import construtor from '../../assets/construtor-3.jpg'
import recicle from '../../assets/recicle-img.jpg'
function Sobre(){
    return(
        <div>
            <NavBarComponentes/>
            <section className="img-background-">
        <h1>Sobre Nós</h1>
      </section>
    
      <main>
        <div className="dflex-">
    
          <div className="text--">
            <h1>Quem Somos</h1>
            <p>A <strong>Conect Coleta</strong> recicla está presente para somar no mercado brasileiro de reciclagem e
              ajudar a sua
              empresa a se tornar mais sustentável e menos prejudicial ao meio ambiente. Nosso foco está no mercado de
              logística reversa, reciclagem e sucata, atuando nos seguintes segmentos:</p>
          </div>
          <img src={maquina} alt="Imagem de Maquina de fabrica"/>
        </div>
    
        <div className="dflex- imagem">
          <img src={construtor} alt="Imagem de um construtor num maquina de formação de vidro"/>
          <div className="text--">
            <h1>Nossa missão</h1>
            <p>Com alternativas inteligentes, inovadoras e completas, oferecemos o descarte adequado de produtos visando
              minimizar o impacto ambiental e também oferecemos acessibilidade para catadores de resíduos, empresas e aos
              moraradores no qual atravéis de um aplicativo celular mostramos pessoas que fazem descartes de matériais que
              são
              apropriado para fazer reciclagem</p>
          </div>
        </div>
    
        <div className="dflex-">
          <div className="text--">
            <h1>Por que escolher a Conect Coleta</h1>
            <p>A <strong>Conect Coleta</strong> acredita no impacto social positivo que a reciclagem tem e ajudamos
              empresas, catadores e aos moradores a se tornarem menos prejudiciais ao meio ambiente. Agregamos valor a sua
              empresa e ajudamos a inovar credibilidade ao seu produto. </p>
          </div>
          <img src={recicle} alt="Imagem de um pequeno espaço da fabrica"/>
        </div>
    
        <section className="university-section-">
          <div className="body-inside-section-">
            <h4>Quer saber mais? Entre em contato</h4>
            <p>Somos a solução ideal para tornar seu negócio mais sustentável. Experiência, transparência e personalidade:
              conte conosco para que sua empresa gere impacto socioambiental positivo.</p>
            <button className="button-btn-">
              <a href="mailto:email@planetar.com.br">Fale conosco</a>
            </button>
            <hr />
          </div>
    
        </section>
      </main>
    
      <footer>
      <p>&copy; Conecta - Todos os direitos reservados.</p>
    </footer>
        </div>
        
        
    )
}

export default Sobre