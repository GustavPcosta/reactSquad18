import './style.css'
import NavBarComponentes from '../../Componentes/NavBar'
 function FaleConosco(){
    return (
        <div className="container">
            <NavBarComponentes/>
        <div className=" text-center mt-5  second-container">

            <h1 >Fale Conosco</h1>
                
            
        </div>

    
    <div className="row ">
      <div className="col-lg-7 mx-auto">
        <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
       
            <div className = "container">
                <form id="contact-form" role="form">

            

            <div className="controls">

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_name">Nome*</label>
                            <input id="form_name" type="text" name="name" class="form-control" placeholder="" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_lastname">Sobrenome *</label>
                            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder=" " required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_email">Email *</label>
                            <input id="form_email" type="email" name="email" className="form-control" placeholder="" required="required" data-error="Valid email is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_need">Assunto que deseja *</label>
                            <select id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                            <option value="" selected disabled></option>
                                <option value="" selected disabled>Selecione</option>
                                <option >Problema ao efetuar o cadastro em nossa comunidade</option>
                                <option >Quer ter mais informação de como pode ser nosso parceiro</option>
                                <option >Quer saber mais sobre a gente</option>
                                <option >Outros</option>
                            </select>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label for="form_message">Deixe a sua mensagem *</label>
                            <textarea id="form_message" name="message" className="form-control" placeholder="Escreva de maneira breve o assunto que deseja e responderemos assim que puder." rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                
                            </div>

                        </div>


                    <div class="col-md-12">
                        
                        <input type="submit" className="btn btn-success btn-send  pt-2 btn-block
                            " value="enviar" />
                    
                </div>
          
                </div>


        </div>
         </form>
        </div>
            </div>


    </div>
       

    </div>
    

</div>
</div>

    )
 }

 export default FaleConosco