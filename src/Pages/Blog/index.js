import './style.css'
import tremBlog from '../../assets/trens-solar.webp'
import carroBlog from '../../assets/nissan-leaf.webp'
import algasBlog from '../../assets/macroalgas.jpg'
import telhadoBlog from '../../assets/telhado-verde.jpeg'
import elicoBlog from '../../assets/eolico.jpeg'
import NavBar from '../../Componentes/NavBar'
function Blog(){
    return(
      <div className='body-card'>
      <NavBar/>
{/* `url(${process.env.PUBLIC_URL}${cardBackgroundImage})` */}
<section class="info">
        {/* <img src="https://codetheweb.blog/assets/img/icon2.png"/> */}
         <h2 className='blog-title'>Confira as principais notícias sobre sustentabilidade</h2> 
      </section>
      <section className="cards-wrapper">
        <div className="card-grid-space">
          
          <a class="card--" href="https://codetheweb.blog/2017/10/06/html-syntax/" style={{ '--bg-img': `url(${process.env.PUBLIC_URL}${tremBlog})`  }}>
            <div>
              <h1>Trem com teto solar</h1>
              <p>Lorem ipsum dolor sit amet. Ex impedit blanditiis aut cupiditate ratione non quos rerum sit.</p>
              <div className="date">6 Oct 2017</div>
              <div className="tags">
                <div className="tag">Saber mais</div>
              </div>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          
          <a className="card--" href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/" style={{ '--bg-img': `url(${process.env.PUBLIC_URL}${carroBlog})` }}>
            <div>
              <h1>Carro elétrico</h1>
              <p>Lorem ipsum dolor sit amet. Ex impedit blanditiis aut cupiditate ratione non quos rerum sit.</p>
              <div className="date">9 Oct 2017</div>
              <div className="tags">
                <div className="tag">Saber mais</div>
              </div>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          
          <a className="card--" href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/" style={{ '--bg-img':`url(${process.env.PUBLIC_URL}${algasBlog})` }}>
            <div>
              <h1>Micro algas</h1>
              <p>Lorem ipsum dolor sit amet. Ex impedit blanditiis aut cupiditate ratione non quos rerum sit.</p>
              <div className="date">14 Oct 2017</div>
              <div className="tags">
                <div className="tag">Saber mais</div>
              </div>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          
          <a className="card--" href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/" style={{ '--bg-img':`url(${process.env.PUBLIC_URL}${telhadoBlog})` }}>
            <div>
              <h1>Teto verde</h1>
              <p>Lorem ipsum dolor sit amet. Ex impedit blanditiis aut cupiditate ratione non quos rerum sit.</p>
              <div className="date">14 Oct 2017</div>
              <div className="tags">
                <div className="tag">Saber mais</div>
              </div>
            </div>
          </a>
        </div>


        <div className="card-grid-space">
         
          <a className="card--" href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/" style={{ '--bg-img':`url(${process.env.PUBLIC_URL}${elicoBlog})` }}>
            <div>
              <h1>Parque eólico</h1>
              <p>Lorem ipsum dolor sit amet. Ex impedit blanditiis aut cupiditate ratione non quos rerum sit.</p>
              <div className="date">14 Oct 2017</div>
              <div className="tags">
                <div className="tag">Saber mais</div>
              </div>
            </div>
          </a>
        </div>
    
      </section>


      </div>
    )
}

export default Blog