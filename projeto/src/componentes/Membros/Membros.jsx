import React,{ Component} from "react";
import Matheus from "../Membros/Equipe/Matheus.svg"
import Paola from "../Membros/Equipe/Paola.svg"
import Julio from "../Membros/Equipe/Julio.svg"

import linkedin from "../Membros/Redes Sociais/linkedin.svg"
import instagram from "../Membros/Redes Sociais/instagram.svg"
import github from "../Membros/Redes Sociais/github.svg"
import whatsapp from "../Membros/Redes Sociais/whatsapp.svg"

import "./Membros.css"
class Membros extends Component{  
    render(){
    
        return(
            <section>
                <div className="container painel-membros">
                    <h1 className="titulo-membros">Equipe</h1> 
                    <div className="equipe">
                        <div className="painel-equipe">
                            <div className="painel-img-equipe">
                                <img className="img-equipe" src={Matheus} alt="."/>
                            </div>
                            <div className="painel-nome-profissao">
                                <h1 className="painel-nome">Matheus de Almeida Muller</h1>
                                <h2 className="painel-profissao">Desenvolvedor Full Stack Jr</h2>
                            </div>
                            <div>
                                <div className="redes-sociais">
                                    <a href="https://www.linkedin.com/in/matheus-de-almeida-341b73211/"><img src={linkedin} alt="linkedin icon" /></a>
                                    <a href="https://www.instagram.com/mateusun_/"><img src={instagram} alt="Instagram icon" /></a>
                                    <a href="https://github.com/Mateusun1"><img className="github" src={github} alt="GitHub icon" /></a>
                                    <a href="https://api.whatsapp.com/send?phone=5554981582900"><img  className="zap" src={whatsapp} alt="whatsapp icon" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="painel-equipe">
                            <div className="painel-img-equipe">
                                <img className="img-equipe" src={Paola} alt="."/>
                            </div>
                            <div className="painel-nome-profissao">
                                <h1 className="painel-nome">Paola Facchin</h1>
                                <h2 className="painel-profissao">Desenvolvedora Front End</h2>
                            </div>
                            <div>
                                <div className="redes-sociais">
                                    <a href="https://br.linkedin.com/in/paolafacchin"><img src={linkedin} alt="linkedin icon" /></a>
                                    <a href="https://www.instagram.com/paola_facchin"><img src={instagram} alt="Instagram icon" /></a>
                                    <a href="https://github.com/paola-facchin"><img className="github" src={github} alt="GitHub icon" /></a>
                                    <a href="https://api.whatsapp.com/send?phone=5554996454109"><img  className="zap" src={whatsapp} alt="whatsapp icon" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="painel-equipe">
                            <div className="painel-img-equipe">
                                <img className="img-equipe" src={Julio} alt="."/>
                            </div>
                            <div className="painel-nome-profissao">
                                <h1 className="painel-nome">Julio</h1>
                                <h2 className="painel-profissao">Desenvolvedor Front End</h2>
                            </div>
                            <div>
                                <div className="redes-sociais">
                                    <a href="https://br.linkedin.com/in/julio-boeno-dal-zotto"><img src={linkedin} alt="linkedin icon" /></a>
                                    <a href="https://www.instagram.com/juliobdz/"><img src={instagram} alt="Instagram icon" /></a>
                                    <a href="https://github.com/Juliodalzotto"><img className="github" src={github} alt="GitHub icon" /></a>
                                    <a href="https://api.whatsapp.com/send?phone=5551991819026"><img  className="zap" src={whatsapp} alt="whatsapp icon" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Membros