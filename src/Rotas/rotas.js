import {Routes, Route} from 'react-router-dom';
import Main from '../Pages/Main';
import Biodiversidade from '../Pages/BioDiversidade';
import Sobre from '../Pages/SobreNos';
import Menu from '../Componentes/MenuCadastro';
import CadastroEmpresa from '../Pages/CadastroEmpresa';
import Catador from '../Pages/CadatadorCadastro';
import CadastroDoador from '../Pages/CadastroDoador';
import Blog from '../Pages/Blog';
import FaleConosco from '../Pages/FaleConosco';
import Login from '../Pages/Login';
function MainRouts(){
    return(
        <Routes>
            <Route path="/" element={<Main />}/>
            {<Route path="/bio" element={<Biodiversidade />}/> }
            {<Route path="/sobre" element={<Sobre />}/> }
            {<Route path="/menu" element={<Menu />}/> }
            {<Route path="/empresa" element={<CadastroEmpresa />}/> }
            {<Route path="/catador" element={<Catador />}/> }
            {<Route path="/doador" element={<CadastroDoador/>}/> }
            {<Route path="/blog" element={<Blog/>}/> }
            {<Route path="/faleConosco" element={<FaleConosco/>}/> }
            {<Route path="/login" element={<Login/>}/> }
        </Routes>
    )
}

export default MainRouts;