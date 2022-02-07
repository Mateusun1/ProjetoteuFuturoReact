import React, {Component} from "react";
import "./Projetos.css"

import pong from "../Projetos/projetoimage/Pong.svg"
import freeway from "../Projetos/projetoimage/FreeWay.svg"
import barbearialura from "../Projetos/projetoimage/BarbeariaAlura.svg"
import site from "../Projetos/projetoimage/SiteFrontEnd.svg"
class Projetos extends Component{
    render(){
        return(
            <section>
                <h1 className="titulo-projetos">Projetos</h1>
                <div className="container">
                    <div>
                        <div className="jogos">
                            <img src={pong} alt="." />
                            <span className="direta-informações">
                                <h1 className="direita-titulo-projetos">Pong</h1>
                                <p className="direita-sinopse-projetos">Pong é o primeiro videojogo lucrativo da história, dando origem a um novo setor da indústria. Foi de importância fundamental na história do videojogo. Foi criado por Nolan Bushnell e Ted Dabney na forma de um console ligado a um monitor, movido a moedas.</p>
                            </span>
                        </div>
                        <div className="jogos">
                            <span className="esquerda-informações">
                                <h1 className="esquerda-titulo-projetos">FreeWay</h1>
                                <p className="esquerda-sinopse-projetos">Em Freeway, o jogador controlava uma galinha que deveria atravessar uma rodovia cheia de automóveis e de caminhões, com mais de seis pistas. Um jogo simples lançado para o Atari 2600 em 1981.</p>
                            </span>
                            <img src={freeway} alt="." />
                        </div>

                        <div className="jogos">
                            <img src={barbearialura} alt="." />
                            <span className="direta-informações">
                                <h1 className="direita-titulo-projetos">Barbearia Alura</h1>
                                <p className="direita-sinopse-projetos">Site criado em aulas sincronas, para uma barbearia fictícia, contem um sobre, localização, beneficios, produtos e contatos</p>
                            </span>
                        </div>
                        <div className="jogos">
                            <span className="esquerda-informações">
                                <h1 className="esquerda-titulo-projetos">Site FrontEnd</h1>
                                <p className="esquerda-sinopse-projetos">Pagina feita em aula assincrona, sobre uma palestra que havia de ocorrer, nela contém nome dos palestrantes e um formulário pra se inscrever.</p>
                            </span>
                            <img src={site} alt="." />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Projetos