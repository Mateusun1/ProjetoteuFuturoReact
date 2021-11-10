import React, {Component} from "react";
import Pong from "../../assents/img/Pong.svg"
import Freeway from "../../assents/img/Freeway.svg"
import Barbearia from "../../assents/img/BarbeariaAlura.svg"
import "./Projetos.css"
class Projetos extends Component{
    render(){
        return(
            <section>
                <section class="Nome-Home2">Trabalhos</section>
                    <div class="trabalhos">
                            <div class="imagem-trabalhos">
                                <img src={Pong} alt="Imagem do PingPong"/>
                            </div>
                            <div class="imagem-trabalhos">
                                <img src={Freeway} alt="Imagem do Freeway"/>
                            </div>
                            <div class="imagem-trabalhos">
                                <img src={Barbearia} alt="Imagem do Barbearia"/>
                            </div>
                    </div>
            </section>
        )
    }
}
export default Projetos