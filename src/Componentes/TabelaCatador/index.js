import './style.css'
import NavBarComponentes from '../NavBar';
import axios from '../../axios/axios'
import { useEffect, useState } from 'react'
import editar from '../../assets/icon-editar.png'
import deletar from '../../assets/icon-delete.png'
import ModalEditCatador from '../ModalEditCatadores';
import ModalDeleteCatador from '../ModalDeletarCatador';
function TabelaAssociacao(){
const [catador, setCatador] = useState([]);
const [open,setOpen] = useState('')
const [openDelete,setOpenDelete] = useState('')
const [associationId, setAssociationId] = useState(null);

    async function ListAssociacao(){

        try {

            const response = await axios.get('/catadores')
            setCatador(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
async function handleEdit(id_associacao){
    setOpen(true)
    setAssociationId(id_associacao)
}

async function handleDelete(){
    setOpenDelete(true)
}
useEffect(()=>{
    ListAssociacao();
},[])
    return(
<div className='container'>
        <NavBarComponentes/>
    <div class="row-">
        <div class="col-md-offset-1 col-md-10">
            <div class="panel">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <a href="#" class="btn btn-sm btn-primary pull-left"><i class="fa fa-plus-circle"></i> Lista dos Catadores</a>
                        
                           
                        </div>
                    </div>

                </div>
                <div class="panel-body table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Ações</th>
                                <th>identificação</th>
                                <th>Nome</th>
                                <th>Estado</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {catador.map((catador)=>(


                            <tr key={catador.idCatador}>
                    <td>
             <ul class="action-list">
             
    <img className='deletarTable' onClick={()=>handleDelete(catador.idCatador)} src={deletar} alt='deletar'></img>
    <img className='deletarTable' onClick={()=>handleEdit(catador.idCatador)} src={editar} alt='deletar'>
</img>

    </ul>
</td>
 
<td>
<h4>{catador.idCatador}</h4>   
</td> 

<td><h4>{catador.nome}</h4></td>
<td><h4>{catador.estado}</h4></td>
<td>
 <div>
    <td>
        <ModalEditCatador open={open}
        handleClose={()=>setOpen(false)}
        />
    </td>
    <td>
        <ModalDeleteCatador open={openDelete} 
        handleClose={()=>setOpenDelete(false)}
        />
    </td>
</div> 
</td>


</tr>

))}
                            
                            
                        </tbody>
                    </table>
                </div>
                <div class="panel-footer">
                   
                </div>
            </div>
        </div>
    </div>
</div>










    )
}

export default TabelaAssociacao