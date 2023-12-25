import './style.css'
import NavBarComponentes from '../../Componentes/NavBar';
import { useState } from 'react';
import axios from '../../axios/axios';
import { useNavigate } from 'react-router-dom';
function CadastroEmpresa(){
    const [caracteristica_empresa, setEmpresa] = useState('');
    const [nome,setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const navigate = useNavigate();


    async function handleSubmit(e){
        e.preventDefault();
        try {
            if(!caracteristica_empresa || !nome || !cnpj){
                console.log('todos os campos devem ser preenchido')
            }

            const response  = await axios.post('/empresa/save',{
                caracteristica_empresa: caracteristica_empresa,
                nome:nome,
                cnpj:cnpj
                
            });
            if(response.data === 200){
                console.log('empresa cadastrada ')
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
            <h3>Cadastro da Empresa</h3>
            <p className="black-text">Preencha todos os campos<br/></p>
            <div className="card">
                <h5 className="text-center mb-4"></h5>
                <form className="form-card" onSubmit={handleSubmit}>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Nome da empresa<span className="text-danger"> *</span></label> <input onChange={(e) => setNome(e.target.value)} type="text" id="fname" name="fname" placeholder="" onblur="validate(1)"/> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Cnpj<span class="text-danger"> *</span></label> <input onChange={(e) => setCnpj(e.target.value)} type="text" id="lname" name="lname" placeholder="" onblur="validate(2)"/> </div>
                    </div>

                    <div className="row justify-content-between text-left">
                        

                        
                    </div>


                    <div className="row justify-content-between text-left">
                        
                        
                        
                        
                    </div>
                    <div className="row justify-content-between text-left">
                        
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Característica  da empresa<span className="text-danger"> *</span></label> <input onChange={(e) =>setEmpresa(e.target.value)} type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> </div>
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

export default CadastroEmpresa;