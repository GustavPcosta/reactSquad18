
import './style.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../axios/axios'



function ModalEdit({
    open,
    handleClose,
    handleEdit,
    associationId
    
}){
const [caracteristicas,setCaracteristica] = useState('')
const [nome,setNome] = useState('')
const [cnpj, setCnpj] = useState('')
const [telefone,setTelefone] = useState('')
const [id_associacao,setId] = useState(associationId || '')


// useEffect(() => {
//   if (handleEdit && id_associacao === ''&& associationId) {
//       setId(associationId);
//   }
// }, [handleEdit, associationId,id_associacao]);

async function handleSubmit(e){
    //e.preventDefault();


    try {
        if(id_associacao < 0){
            alert('O identificador tem que ser maior que 0')
            setCaracteristica(' ')
            setTelefone(' ')
            setNome(' ')
            setCnpj(' ')
            setId(' ')
            return;

        }
        const response =  await axios.put(`/associacoes/editar/${id_associacao}`,{
            id_associacao,
            nome,
            caracteristicas,
            cnpj,
            telefone

        })
        if(response.status > 204){
            return;
        }
        console.log(response.data)

        alert('atualizado com  sucesso')
        setCaracteristica(' ')
        setCnpj(' ')
        setNome(' ')
        setTelefone(' ')
        setId(' ')
    } catch (error) {
        console.log(error.response)
    }

}
    return(
      <> 
      { open &&
      <div className='backdrop-associacao'> 
        <div className='modal-associacao '> 
            <h2>Editar Associação</h2>

        <form onSubmit={handleSubmit} className='form-edit'>
        <input 
            type="text" 
            placeholder='Nome'
             value={nome} 
             onChange={(e) => setNome(e.target.value)}
             /> 
            <input 
            type="text" 
            placeholder='característica'
             value={caracteristicas} 
             onChange={(e) => setCaracteristica(e.target.value)}
             />
             <input 
            type="number" 
            placeholder='CNPJ'
             value={cnpj} 
             onChange={(e) => setCnpj(e.target.value)}
             />
             <input 
            type="text" 
            placeholder='Descricao'
             value={telefone} 
             onChange={(e) => setTelefone(e.target.value)}
             />

             <input 
            type="number" 
            placeholder='Passe o identificador'
             value={id_associacao} 
             onChange={(e) => setId(e.target.value)}
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
export default ModalEdit












//   const [show, setShow] = useState(false);
//   const [nome, setNome] = useState('');
//   const [caracteristicas, setCaracteristica] = useState('');
//   const [cnpj, setCnpj] = useState('');
//   const [telefone, setTelefone] = useState('');
//   const navigate = useNavigate();

//   const handleClose = () => setShow(false);

//   const handleSave = async () => {
//     try {
//       if (!nome || !caracteristicas || !cnpj) {
//         alert("Preencha todos os campos");
//         return;
//       }

//       const response = await axios.put(`/associacoes/editar/${idAssociacao}`, {
//         nome: nome,
//         caracteristicas: caracteristicas,
//         cnpj: cnpj,
//         telefone: telefone,
//       });

//       if (response.status === 200) {
//         console.log('Editado com sucesso');
//       } else {
//         console.log('Erro ao editar');
//       }

//       setShow(false); 
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   async function fetchAssociationDetails() {
//     try {
//       if (idAssociacao) {
//         const response = await axios.get(`/associacoes/${idAssociacao}`);
//         const association = response.data;

//         setNome(association.nome);
//         setCaracteristica(association.caracteristicas);
//         setCnpj(association.cnpj);
//         setTelefone(association.telefone);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     fetchAssociationDetails();
//   }, [idAssociacao]);

//   return (
//     <>
      
//       <Button variant="primary" onClick={handleSave}>
//         Atualizar
//       </Button>
      
//     </>
//   );

