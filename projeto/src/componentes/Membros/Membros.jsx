import React,{ Component} from "react";
import Matheus from "../../assents/img/Matheus.svg"
import Paola from "../../assents/img/Paola.svg"
import Julio from "../../assents/img/Julio.svg"
import TT from "../../assents/img/Twitter.svg"
import Insta from "../../assents/img/Instagram.svg"
import Git from "../../assents/img/Git.svg"
import WPP from "../../assents/img/WPP.svg"

import "./Membros.css"
class Membros extends Component{  
    render(){
        return(
            <section className="PapelParede">
                <section className="Nome-Home">Equipe</section>
                    <div className="Portfolio">
                        <div className="CardLeft">
                            <img src={Matheus} alt="Avatarzinho do Matheus"/>
                            <p className="Nome">Matheus</p>
                            <p className="Profissao">Desenvolvedor Front-end</p>
                            <p className="Usuario"><img className="Icons" src={TT} alt="Icon do Twitter"/>Mateusun_</p>
                            <p className="Usuario"><img className="Icons" src={Insta} alt="Icon do Instagram"/>Mateusun_</p>
                            <p className="Usuario"><img className="Icons" src={Git} alt="Icon do Git"/>Mateusun1</p>
                            <p className="Numero"><img className="Icons" src={WPP} alt="Icon do Whatsapp"/>(54) 9 8158-2900</p>
                        </div>  
                        <div class="CardMeio">
                            <img src={Paola} alt="Avatarzinho da Paola"/>
                                <p class="Nome">Paola</p>
                                <p className="Profissao">Desenvolvedora Front-end</p>
                                <p className="Usuario"><img className="Icons" src={TT} alt="Icon do Twitter"/></p>
                                <p className="Usuario"><img className="Icons" src={Insta} alt="Icon do Instagram"/></p>
                                <p className="Usuario"><img className="Icons" src={Git} alt="Icon do Git"/></p>
                                <p className="Numero"><img className="Icons" src={WPP} alt="Icon do Whatsapp"/></p>
                        </div> 
                        <div class="CardRight">
                            <img src={Julio} alt="Avatarzinho do Julio"/>
                                <p class="Nome">Julio</p>
                                <p className="Profissao">Desenvolvedor Front-end</p>
                                <p className="Usuario"><img className="Icons" src={TT} alt="Icon do Twitter"/></p>
                                <p className="Usuario"><img className="Icons" src={Insta} alt="Icon do Instagram"/></p>
                                <p className="Usuario"><img className="Icons" src={Git} alt="Icon do Git"/></p>
                                <p className="Numero"><img className="Icons" src={WPP} alt="Icon do Whatsapp"/></p>
                        </div>                   
                    </div>
            </section>
        )
    }
}
export default Membros