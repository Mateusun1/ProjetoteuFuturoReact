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
                                <img src={Pong}/>
                            </div>
                            <div class="imagem-trabalhos">
                                <img src={Freeway}/>
                            </div>
                            <div class="imagem-trabalhos">
                                <img src={Barbearia}/>
                            </div>
                    </div>
            </section>
        )
    }
}
export default Projetos