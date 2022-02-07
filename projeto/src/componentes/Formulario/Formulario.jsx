import React, { Component } from "react";
import "./Formulario.css"
class Formulario extends Component{
    render(){
        return(
            <section>
                <h1 className="titulo-form">Formulário</h1>
                <div className="container">
                    <form className="form">
                        <label className="label-form" for="nome">Nome:</label>
                        <input className="input-form" type="text" id="nome" placeholder="Nome Completo" />
                        
                        <label className="label-form" for="email">Email:</label>
                        <input className="input-form" type="email" id="email" placeholder="seuemail@dominio.com" />
 
                        <label className="label-form" for="telefone">Telefone:</label>
                        <input className="input-form" type="text" id="telefone" placeholder="(XX)X XXXX-XXXX" />

                        <label className="label-form" for="mensagem">Mensagem:</label>
                        <textarea className="textarea-form" id="mensagem" rows={5} cols={33} />
                    </form>
                    <button className="button-form">Enviar</button>
                </div>
            </section>
        )
    }
}
export default Formulario