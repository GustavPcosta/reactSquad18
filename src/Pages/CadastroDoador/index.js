
import './style.css'
import NavBarComponentes from '../../Componentes/NavBar'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from '../../axios/axios';
function Doador(){
    const navigate = useNavigate();
    const [nome,setNome] = useState('')
    const [rg,setRg] = useState('')
    const [cidade, setCidade] = useState('')
    const [telefone, setTelefone] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero_da_casa,setNumeroCasa] = useState('')
    const [cep,setCep] = useState('')
    const [disponibilidade, setDisponibilidade] = useState('')
    const [estado, setEstado] = useState('')
    const [rua, setRua] = useState('')
    const [cpf, setCpf] = useState('')
   
    



    async function handleSubmit(e){
        e.preventDefault();
       
       try {
        if(!nome  || !rg ||!cidade || !telefone || !bairro || !numero_da_casa || !cep || !disponibilidade || !estado || !rua || !cpf){
            alert('preencha todos os campos')
           }

           const response = await axios.post('/doadores/save',{
            nome:nome,
            rg:rg,
            cidade:cidade,
            telefone:telefone,
            bairro:bairro,
            cep:cep,
            disponibilidade:disponibilidade,
            estado:estado,
            rua:rua,
            cpf:cpf,
            numero_casa:numero_da_casa,
            
    
           })
           if(response.data === 200){
            console.log('cadastro realizado com sucesso')
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
            <h3>Cadastro do doador</h3>
            <p className="black-text">Preencha todos os campos<br/></p>
            <div className="card">
                <h5 className="text-center mb-4"></h5>
                <form className="form-card" onSubmit={handleSubmit}>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Nome<span className="text-danger"> *</span></label> <input onChange={(e)=>setNome(e.target.value)} type="text" id="fname" name="fname" placeholder="" onblur="validate(1)"/> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Estado<span className="text-danger"> *</span></label> <input onChange={(e) =>setEstado(e.target.value)} type="text" id="" name="" placeholder="" onblur="validate(3)"/> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                       
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Telefone<span className="text-danger"> *</span></label> <input onChange={(e)=>setTelefone(e.target.value)} type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">RG<span class="text-danger"> *</span></label> <input onChange={(e)=> setRg(e.target.value)} type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                    </div>

                    {/* <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Senha<span className="text-danger"> *</span></label> <input onChange={(e)=>setSenha(e.target.value)} type="number" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div> */}
                    

                    <div className="row justify-content-between text-left">
                       
                       

                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">CEP<span className="text-danger"> *</span></label> <input onChange={(e)=>setCep(e.target.value)} type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>



                        <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Cidade<span class="text-danger"> *</span></label> <input onChange={(e)=> setCidade(e.target.value)} type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                    </div>
                    

                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Rua<span class="text-danger"> *</span></label> <input onChange={(e)=>setRua(e.target.value)} type="text" id="" name="" placeholder="" onblur="validate(3)"/> </div>
                       
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Número da casa<span class="text-danger"> *</span></label> <input onChange={(e)=>setNumeroCasa(e.target.value)} type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Bairro<span class="text-danger"> *</span></label> <input onChange={(e)=>setBairro(e.target.value)} type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">CPF<span class="text-danger"> *</span></label> <input onChange={(e)=>setCpf(e.target.value)} type="text" id="job" name="job" placeholder="" onblur="validate(5)"/> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Disponibilidade<span className="text-danger"> *</span></label> <input onChange={(e)=>setDisponibilidade(e.target.value)} type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> </div>
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


export default Doador