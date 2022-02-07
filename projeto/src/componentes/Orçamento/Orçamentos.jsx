import React, { Component } from "react";
import "./Orçamentos.css"
import Orçament from "./imageOrçament.svg"

class Orçamento extends Component{
    render(){
        return(
            <section className="orçamento">
                <div className="container orçamentos">
                    <div className="sobre-orçamento">
                        <h1 className="titulo-orçamento">Faça Seu Orçamento!</h1>
                        <p className="paragrafo-orçamento">Caso tenha curtido a nossa Landing Page, nós do SQUAD15, ficaremos agradecidos caso queiram fazer um orçamentos conosco, clique no botão abaixo para entrar em mais detalhes!</p>
                        <button className="botao-orçamento">Clique Aqui!</button>
                    </div>
                    <div className="orçament-image">
                        <img className="img-orçamento" src={Orçament} alt="icone de orçamento" />
                    </div>
                </div>
            </section>
        )
    }
}
export default Orçamento