import './style.css'
import NavBarComponentes from '../../Componentes/NavBar'
import { useState, } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from '../../axios/axios'
function Catador(){
const navigate = useNavigate();
const [nome,setNome] = useState('')
const [rg,setRg] = useState('')
const [cidade, setCidade] = useState('')
const [telefone, setTelefone] = useState('')
const [bairro, setBairro] = useState('')
const [numero_da_casa,setNumeroCasa] = useState('')
const [cep,setCep] = useState('')
const [disponibilidade, setDisponibilidade] = useState('')
const [endereco, setEndereco] = useState('')
const [estado, setEstado] = useState('')
const [cpf, setCpf] = useState('')





async function handleSubmit(e){
    e.preventDefault();
    


    try {

if(!nome || !rg || !cidade || !telefone ||!endereco||!estado || !bairro || !numero_da_casa || !cep || !disponibilidade || !cpf) {
 return;
}

const response = await axios.post('/catadores/save',{
    nome: nome,
    rg: rg,
    cidade: cidade,
    telefone: telefone,
    bairro: bairro,
    cpf: cpf,
    disponibilidade: disponibilidade,
    numero_da_casa: numero_da_casa,
    cep:cep,
    estado:estado,
    endereco: endereco

});
if(response.data === 200){
    console.log('catador cadastrado com sucesso')
    return;
}
navigate('/')
    } catch (error) {
        console.log(error)
    }
}
    return(
        <div className='body-'>
        <NavBarComponentes/>
        <div className="container-fluid px-1 py-5 mx-auto  body">
    <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Cadastro do Catador</h3>
            <p className="black-text">Preencha todos os campos<br/></p>
            <div className="card">
                <h5 className="text-center mb-4"></h5>
                <form className="form-card" onSubmit={handleSubmit}>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Nome<span className="text-danger"> *</span></label> <input onChange={(e) =>setNome(e.target.value)} type="text" id="fname" name="fname" placeholder="" onblur="validate(1)"/> </div>



                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">RG<span class="text-danger"> *</span></label> <input onChange={(e) => setRg(e.target.value)} type="number" id="lname" name="lname" placeholder="" onblur="validate(2)"/> </div>

                        
                       
                        
                       
                    
                    </div>
                    
                   
                    <div className="row justify-content-between text-left">
                          <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Bairro<span className="text-danger"> *</span></label> 
                          <input onChange={(e) => setBairro(e.target.value)} type="text" id="" name="" placeholder="" onblur="validate(3)"/> </div>  



                          <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Telefone<span class="text-danger"> *</span></label> 
                          <input onChange={(e) => setTelefone(e.target.value)} type="number" id="lname" name="lname" placeholder="" onblur="validate(2)"/> </div>


                          <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Número da casa<span class="text-danger"> *</span></label> 
                          <input onChange={(e) => setNumeroCasa(e.target.value)} type="number" id="lname" name="lname" placeholder="" onblur="validate(2)"/> </div>


                          {/* <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Número da casa<span class="text-danger"> *</span></label> 
                          <input onChange={(e) => setNumeroCasa(e.target.value)} type="number" id="lname" name="lname" placeholder="" onblur="validate(2)"/> </div> */}


                          <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">CEP<span class="text-danger"> *</span></label> 
                          <input onChange={(e) => setCep(e.target.value)} type="number" id="lname" name="lname" placeholder="" onblur="validate(2)"/> </div>


                    </div>


                    <div className="row justify-content-between text-left">
                        
                        <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Cidade<span class="text-danger"> *</span></label>
                         <input onChange={(e) => setCidade(e.target.value)} type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                        
                       
                        <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Estado<span class="text-danger"> *</span></label> 
                        <input onChange={(e) =>setEstado(e.target.value)} type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Endereço<span class="text-danger"> *</span></label> 
                        <input onChange={(e) =>setEndereco(e.target.value)} type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                    </div>
                    <div className="row justify-content-between text-left">

                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">CPF<span class="text-danger"> *</span></label> 
                    <input onChange={(e) => setCpf(e.target.value)} type="number" id="lname" name="lname" placeholder="" onblur="validate(2)"/> </div>



                    


                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Disponibilidade<span className="text-danger"> *</span></label> <input onChange={(e) =>setDisponibilidade(e.target.value)} type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="form-group col-sm-6"> <button type="submit" className="btn-block btn-primary">Enviar</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
    
    )
}

export default Catador