import React, { Component } from "react";
import "./Formulario.css"
class Formulario extends Component{
    render(){
        return(
            <section>
                <div class="Nome-Home4">
                    <section><a id="contatos">Contatos</a></section>
                </div>
                    <form>   
                    <div>        
                        <label for="nomecompleto">Nome Completo</label>
                        <input type="text" id="nomecompleto" className="bordas" required />
    
                        <label for="email">Email</label>
                        <input type="email" id="email" className="bordas" required placeholder="seuemail@dominio.com"/>
    
                        <label for="telefone">Telefone</label>
                        <input type="tel" id="telefone" className="bordas" required placeholder="(XX) XXXXX-XXXX"/>
    
                        <label for="mensagem">Mensagem</label>
                        <textarea cols="120" rows="8" id="mensagem" className="bordas" required/>
                    </div>
                        <input type="submit" value="Enviar" className="enviar"/>
                    </form>
            </section>
        )
    }
}
export default Formulario