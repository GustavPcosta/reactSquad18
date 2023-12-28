import './style.css'
import {useState,useEffect} from 'react'
import axios from '../../axios/axios';
import NavBarComponentes from '../NavBar';
import ModalDeleteDoador from '../ModalDeletarDoador';
import ModalEditDoadores from '../ModalEditDoadores';
import editar from '../../assets/icon-editar.png'
import deletar from '../../assets/icon-delete.png'
function TabelaDoador(){

    const [doador, setDoador] = useState([]);
    const [open,setOpen] = useState('')
    const [openDelete,setOpenDelete] = useState('')
    const [associationId, setAssociationId] = useState(null)



    async function ListarDoadores(){

        try {

            const response = await axios.get('/doadores')
            setDoador(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
async function handleEdit(idDoador){
    setOpen(true)
    setAssociationId(idDoador)
}

async function handleDelete(){
    setOpenDelete(true)
}
useEffect(()=>{
    ListarDoadores();
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
                            <a href="#" class="btn btn-sm btn-primary pull-left"><i class="fa fa-plus-circle"></i> Lista dos Doadores</a>
                        
                           
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
                            {doador.map((doadores)=>(


                            <tr key={doadores.idCatador}>
                    <td>
             <ul class="action-list">
             
    <img className='deletarTable' onClick={()=>handleDelete(doadores.idCatador)} src={deletar} alt='deletar'></img>
    <img className='deletarTable' onClick={()=>handleEdit(doadores.idCatador)} src={editar} alt='deletar'>
</img>

    </ul>
</td>
 
<td>
<h4>{doadores.idDoador}</h4>   
</td> 

<td><h4>{doadores.nome}</h4></td>
<td><h4>{doadores.estado}</h4></td>
<td>
 <div>
    <td>
        <ModalEditDoadores open={open}
        handleClose={()=>setOpen(false)}
        />
    </td>
    <td>
        <ModalDeleteDoador open={openDelete} 
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

export default TabelaDoador