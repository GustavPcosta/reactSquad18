import './style.css'
import NavBarComponentes from '../NavBar';
import axios from '../../axios/axios'
import { useEffect, useState } from 'react'
import editar from '../../assets/icon-editar.png'
import deletar from '../../assets/icon-delete.png'
import ModalEdit from '../ModalEdutAssociacao';
import ModalDeleteAssociacao from '../ModalDeletarAssociacao';
function TabelaAssociacao(){
const [associacao, setAssociacao] = useState([]);
const [open,setOpen] = useState('')
const [openDelete,setOpenDelete] = useState('')
const [associationId, setAssociationId] = useState(null);

    async function ListAssociacao(){

        try {

            const response = await axios.get('/associacoes')
            setAssociacao(response.data)
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

        <div class="container">
        <NavBarComponentes/>
    <div class="row-">
        <div class="col-md-offset-1 col-md-10">
            <div class="panel">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <a href="#" class="btn btn-sm btn-primary pull-left"><i class="fa fa-plus-circle"></i> Lista dos Associadores</a>
                        
                            
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
                                <th>CNPJ</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {associacao.map((associar)=>(


                            <tr key={associar.idAssociacao}>
                    <td>
             <ul class="action-list">
             
    <img className='deletarTable' onClick={()=>handleDelete(associar.idAssociacao)} src={deletar} alt='deletar'></img>
    <img className='deletarTable' onClick={()=>handleEdit(associar.idAssociacao)} src={editar} alt='deletar'>
</img>

    </ul>
</td>
 
<td>
<h4>{associar.idAssociacao}</h4>   
</td> 

<td><h4>{associar.nome}</h4></td>
<td><h4>{associar.cnpj}</h4></td>
<td>
 <div>
    <ModalEdit open={open}
    handleClose={()=>setOpen(false)}
    handleEdit={handleEdit}
    associationId={associationId}
    />
</div>
<td>
<ModalDeleteAssociacao open={openDelete} 
    handleClose={()=>setOpenDelete(false)}
    />
</td>
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