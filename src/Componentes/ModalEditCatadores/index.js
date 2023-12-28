
import './style.css'
import { useState, useEffect } from 'react'
//import { useParams } from 'react-router-dom'
import axios from '../../axios/axios'



function ModalEditCatador({
    open,
    handleClose,
    handleEdit,
    associationId
    
}){
const [cidade,setCidade] = useState('')
const [nome,setNome] = useState('')
const [telefone,setTelefone] = useState('')
const [rg,setRg] = useState('')
const [estado,setEstado] = useState('')
const [disponibilidade,setDisponibilidade] = useState('')
const [numero_da_casa,setCasa] = useState('')
const [cpf,setCpf] = useState('')
const [bairro,setBairro] = useState('')
const [cep,setcep] = useState(' ')
const [endereco,setEndereco] = useState('')
const [idAssociacao,setId] = useState(associationId || '')


// useEffect(() => {
//   if (handleEdit && id_associacao === ''&& associationId) {
//       setId(associationId);
//   }
// }, [handleEdit, associationId,id_associacao]);

async function handleSubmit(e){
    //e.preventDefault();


    try {
        if(idAssociacao < 0){
            alert('O identificador tem que ser maior que 0')
            
        setCidade(' ')
        setNome(' ')
        setTelefone(' ')
        setEstado(' ')
        setId(' ')
        setDisponibilidade(' ')
        setCpf(' ')
        setEndereco(' ')
        setEndereco(' ')
        setcep(' ')
        setRg(' ')
        setBairro(' ')

            return;

        }
        const response =  await axios.put(`/catadores/editar/${idAssociacao}`,{

            idAssociacao,
            nome,
            telefone,
            cep,
            endereco,
            bairro,
            cidade,
            estado,
            disponibilidade,
            numero_da_casa,
            rg,
            cpf


        })

        if(response.status > 204){
            return;
        }
        console.log(response.data)

        alert('atualizado com  sucesso')
        setCidade(' ')
        setNome(' ')
        setTelefone(' ')
        setEstado(' ')
        setId(' ')
        setDisponibilidade(' ')
        setCpf(' ')
        setEndereco(' ')
        setEndereco(' ')
        setcep(' ')
        setRg(' ')
        setBairro(' ')
    } catch (error) {
        console.log(error.response)
    }

}
    return(
      <> 
      { open &&
      <div className='backdrop-catador'> 
        <div className='modal-catador modal-add-catador'> 
            <h2>Editar Catador</h2>

        <form onSubmit={handleSubmit} className='form-edit-catador'>
        <input 
            type="text" 
            placeholder='Nome'
             value={nome} 
             onChange={(e) => setNome(e.target.value)}
             /> 
            <input 
            type="text" 
            placeholder='característica'
             value={disponibilidade} 
             onChange={(e) => setDisponibilidade(e.target.value)}
             />
             <input 
            type="number" 
            placeholder='CPF'
             value={cpf} 
             onChange={(e) => setCpf(e.target.value)}
             />
             <input 
            type="text" 
            placeholder='Endereço'
             value={endereco} 
             onChange={(e) => setEndereco(e.target.value)}
             />

             <input 
            type="number" 
            placeholder='Passe a identificação'
             value={idAssociacao} 
             onChange={(e) => setId(e.target.value)}
             />  

            <input 
            type="text" 
            placeholder='Estado'
             value={estado} 
             onChange={(e) => setEstado(e.target.value)}
             /> 


            <input 
            type="number" 
            placeholder='Digite o seu telefone'
             value={telefone} 
             onChange={(e) => setTelefone(e.target.value)}
             /> 


            <input 
            type="number" 
            placeholder='Número da residência'
             value={numero_da_casa} 
             onChange={(e) => setCasa(e.target.value)}
             /> 


            <input 
            type="number" 
            placeholder='rg'
             value={rg} 
             onChange={(e) => setRg(e.target.value)}
             /> 



            <input 
            type="text" 
            placeholder='Cidade'
             value={cidade} 
             onChange={(e) => setCidade(e.target.value)}
             /> 


            <input 
            type="number" 
            placeholder='CEP'
             value={cep} 
             onChange={(e) => setcep(e.target.value)}
             /> 



            <input 
            type="text" 
            placeholder='Bairro'
             value={bairro} 
             onChange={(e) => setBairro(e.target.value)}
             /> 
            <div className='btn-buttons'> 
            <button className='color-green'>Salvar</button>
            <button className='color-redd' onClick={handleClose}>Cancelar</button>
            </div>
        </form>


        </div>
      </div>

      }

      </>
    )
}
export default ModalEditCatador













