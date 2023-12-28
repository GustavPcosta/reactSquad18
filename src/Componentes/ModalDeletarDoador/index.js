import './style.css'
import axios from '../../axios/axios'
import {useState} from 'react'

function ModalDeleteDoador({open,handleClose}){
const [idDoador, setId] = useState('')

async function handleSubmit(e){
    //e.preventDefault();
    try {
        const response = await axios.delete(`/doadores/deletar/${idDoador}`,{
            idDoador
        })
        if(response.status > 204){
            alert("Deletado com sucesso!")
            setId(' ')
        }
        console.log(response.data)
    } catch (error) {
        console.log(error.response)
    }
}









    return(
     <>
     { open &&
        <form onSubmit={handleSubmit} className='delete-area'>
        

        <div>
        
        </div>
        <div className='body-delete'>
        <h4>Deletar Doador</h4>
        <input value={idDoador} onChange={(e) => setId(e.target.value)} type="number" placeholder='Insira o identificador de exclusão'></input>
        <div className='content-button'>
        <button className='btn-confirmar'>Confirmar</button>
        <button className='btn-cancelar' onClick={handleClose}>Cancelar</button>
        </div>
        </div>
        
     </form>
     }
     
     
     
     
     
     
     </>
    )
}

export default ModalDeleteDoador