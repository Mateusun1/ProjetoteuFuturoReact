import React,{ Component} from "react";
import Matheus from "../../assents/img/Matheus.svg"
import Paola from "../../assents/img/Paola.svg"
import Julio from "../../assents/img/Julio.svg"
import "./Membros.css"
class Membros extends Component{
    render(){
        return(
            <section>
                <section className="Nome-Home">Membros</section>
                    <div className="Portfolio">
                        <div className="imagens">
                            <img src={Matheus} alt="Avatarzinho do Matheus"/>
                            <p className="Nome-destaque">Matheus</p>
                        </div>  
                        <div class="imagens">
                        <img src={Paola} alt="Avatarzinho da Paola"/>
                        <p class="Nome-destaque">Paola</p>
                    </div> 
                    <div class="imagens">
                        <img src={Julio} alt="Avatarzinho do Julio"/>
                        <p class="Nome-destaque">Julio</p>
                    </div>                   
                    </div>
            </section>
        )
    }
}
export default Membros