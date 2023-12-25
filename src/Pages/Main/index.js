
import './style.css';
import NavBarComponentes from '../../Componentes/NavBar';
import Slide from '../../Componentes/CarouselMain';
import reciclar from '../../assets/img-recicle.jpg';
import materiais from '../../assets/batteries-6722619_1920.png';
import monitoramento from '../../assets/recyclable-6638729_1920.png';
import educacao from '../../assets/recycle-6638667_1920.png'
import React, { useState,useEffect } from "react";
function Main() {

  
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsContainerRef = React.useRef(null);

  const totalCards = cardsContainerRef.current?.children.length || 0;

  const prevButtonHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const nextButtonHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const updateCarousel = () => {
    const cardWidth = cardsContainerRef.current?.children[0]?.getBoundingClientRect().width || 0;
    cardsContainerRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  };

  const showInfo = (info, card) => {
    const infoDiv = document.createElement("div");
    infoDiv.className = "info-popup";
    infoDiv.textContent = info;
    const cardRect = card.getBoundingClientRect();
    infoDiv.style.top = `${cardRect.top + window.scrollY - 10}px`;
    infoDiv.style.left = `${cardRect.left}px`;
    document.body.appendChild(infoDiv);
  };

  const hideInfo = () => {
    const infoDiv = document.querySelector(".info-popup");
    if (infoDiv) {
      document.body.removeChild(infoDiv);
    }
  };

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;

    const cardElements = cardsContainer?.querySelectorAll(".card");

    const handleMouseOver = (event) => {
      const cardInfo = event.target.getAttribute("data-info");
      showInfo(cardInfo, event.target);
    };

    const handleMouseOut = () => {
      hideInfo();
    };

    cardsContainer.addEventListener("mouseover", handleMouseOver);
    cardsContainer.addEventListener("mouseout", handleMouseOut);

    return () => {
      cardsContainer.removeEventListener("mouseover", handleMouseOver);
      cardsContainer.removeEventListener("mouseout", handleMouseOut);
    };
  }, [currentIndex]); 

  useEffect(() => {
    updateCarousel();
  }, [currentIndex, totalCards]);





  return (
    <div className="Main">
      <NavBarComponentes/>
      
      <Slide/>
    
     
     <section className='university-section'>
     <div className="body-inside-section">
        <span className="text">
          Transformar é um dos lemas mais importante que carregamos conosco. Ressignificamos toneladas
          de materiais descartáveis todos os meses, onde produtos que iriam parar em aterros ou lixões, ganham uma
          nova forma, retornando para a indústria e posteriormente para o mercado.</span>
        <hr />
      </div>
      <div class="d-flex">
        <img src={reciclar} alt='reciclar'/>
      </div>

     </section>

     <div className="services">
      <h4>Segmentos para uma reciclagem</h4>
      <div className="carousel-">
        <div className="cards-container" ref={cardsContainerRef}>
          <div className="card">
            <img src={materiais} alt="NOWledge além das fronteiras!"/>
            <strong>Coleta de Materiais</strong>
            <p>Identificação de materiais recicláveis: Determine quais materiais serão reciclados em sua casa como
              papel, vidro, plástico, metal, eletrônicos, etc..</p>
          </div>

          <div className="card">
            <img src={monitoramento} alt="NOWledge além das fronteiras!"/>
            <strong>Monitoramento e Avaliação</strong>
            <p>Acompanhamento de métricas: Teremos a quantidade de materiais reciclados e monitoramento o progresso do
              programa ao longo do tempo, como empresa de sofware.</p>
          </div>

          <div className="card">
            <img src={educacao} alt="NOWledge além das fronteiras!"/>
            <strong>Educação e Conscientização</strong>
            <p>Campanhas de conscientização: Desenvolvemos campanhas de sensibilização para educar a comunidade sobre a
              importância da reciclagem e como fazê-lo corretamente.</p>
          </div>

        </div>
         <div className="nav-buttons">
          <button className="prev-button  mainbutton" onClick={prevButtonHandler}>&lt;</button>
          <button className="next-button  mainbutton" onClick={nextButtonHandler}>&gt;</button>
        </div> 
      </div>
      <h4 className="subtitle-">Se interessou no nosso trabalho?</h4>
      <span><b>Faça o cadastro</b></span>
      <button className="insert manibutton">
        <a href="./menu" className="link-insert">Cadastre-se Aqui</a></button>
    </div>
    <div id="map"></div>
<div className="maps-all">
  <iframe
    className="map"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d87297.67453519991!2d-39.37476213502549!3d-14.766291926303651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1691583232937!5m2!1spt-BR!2sbr"
    width="1390"
    height="450"
    style={{ border: '0' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

<section>
      <div class="last-card">
        <div class="last-card-body">
          <strong>Abra sua mente para as novas oportunidades</strong>
          <p>Receba diariamente nossos resumos de como você pode fazer seus descartes de resíduos.</p>
        </div>
        <div class="last-form">
          <form class="form-last">
            <div class="form-input">
              <input placeholder="Digite o seu nome" required/>
              <input placeholder="Digite o seu email" required/>
            </div>
            <button id="enviarButton" type="button">Receba gratuitamente!</button>
          </form>
        </div>
      </div>
    </section>
    <footer>
      <p>&copy; Conecta - Todos os direitos reservados.</p>
    </footer>
   </div>
  );
}

export default Main;
