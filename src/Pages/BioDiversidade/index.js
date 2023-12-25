import './style.css'
import NavBarComponentes from '../../Componentes/NavBar'
import garden from '../../assets/garden-4765409_1920.jpg'
import recicle from '../../assets/tire-recycling-1195937_1920.jpg'
import flor from '../../assets/flower-8173078_1920.jpg'
function Biodiversidade(){
    return(
        <div className='component-nav'> 
        <NavBarComponentes/>
        
        <section className="img-background">
        <h1>Biodiversidade</h1>
      </section>




      <main>
  <div className="dflex imagem">
    <img src={garden} alt="Parque"/>
    <div className="text-">  
      <h1>Planeta Terra</h1>
      <p>A biodiversidade de um país é um reflexo da variedade de vida que pode ser encontrada em seu território,
        incluindo plantas, animais, microrganismos e ecossistemas. No Brasil, a biodiversidade é especialmente rica e
        diversificada devido à sua vasta extensão territorial e à presença de diversos biomas, como a Floresta
        Amazônica, o Cerrado, a Mata Atlântica e o Pantanal. O país abriga uma impressionante variedade de espécies
        endêmicas, muitas das quais ainda não foram completamente catalogadas pela ciência. A biodiversidade brasileira desempenha um papel fundamental na manutenção do equilíbrio ecológico global, na preservação da água,na regulação do clima e na oferta de recursos naturais essenciais para a vida humana.</p>
  
    </div>
  </div>

  <div className="dflex">
    <img src={recicle} alt="Imagem"/>
    <div className="text-">
      <h1>Importância</h1>
      <p>A reciclagem é uma prática crucial para a conservação da biodiversidade e a proteção do meio ambiente. O Brasil
        é um dos países que mais gera resíduos sólidos no mundo, e a reciclagem desempenha um papel fundamental na
        redução do impacto ambiental desses resíduos. Ao reciclar materiais como plástico, vidro, papel e metais,
        evitamos que esses materiais acabem em aterros sanitários e lixões, que representam uma ameaça direta para a
        biodiversidade devido à poluição do solo e da água que geram. Além disso, a reciclagem reduz a necessidade de
        extrair novos recursos naturais, preservando ecossistemas sensíveis que seriam afetados pela exploração
        mineral,florestal e outras atividades.</p>
    </div>
  </div>

  <div className="dflex imagem">
    <img src={flor} alt="Planta"/>
    <div className="text-">
      <h1>Ajude o Planeta</h1>
      <p>A importância da reciclagem também se estende à conservação de habitats naturais. Muitas das
        matérias-primas usadas na fabricação de produtos são extraídas de áreas naturais, resultando na degradação e
        destruição de habitats importantes para a biodiversidade. Ao reciclar materiais, diminuímos a demanda por novosrecursos e, assim, reduzimos a pressão sobre esses habitats. Além disso, a reciclagem gera empregos e  conscientização ambiental, incentivando a sociedade a adotar práticas mais sustentáveis.
        Em resumo, a biodiversidade do Brasil é um tesouro que precisa ser protegido e preservado. A reciclagem
        desempenha um papel crucial nesse esforço, ajudando a reduzir o impacto ambiental da produção e do descarte de materiais, conservando habitats naturais e promovendo um estilo de vida mais sustentável. É fundamental que a sociedade e as autoridades continuem a promover e investir em programas de reciclagem para garantir um futuro mais saudável e equilibrado para o país e para o planeta como um todo. </p>
    </div>
  </div>
</main>

<footer>
      <p>&copy; Conecta - Todos os direitos reservados.</p>
    </footer>
</div>
       


       

    )
}

export default Biodiversidade