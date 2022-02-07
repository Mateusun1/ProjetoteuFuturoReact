import React, {Component} from "react";
import Logo from "../Header/HeaderImage/Logo.png"
import "./Header.css"
class Header extends Component{
    render(){
        return(
            <section className="Header">
               <header className="container header">
                   <nav className="navegaçao">
                       <img className="logo-site" src={Logo} alt="logo do site"/>
                       <ul className="lista-navegaçao">
                           <li className="lista-pai"><a className="lista-filho" href="#a">Equipe</a></li>
                           <li className="lista-pai"><a className="lista-filho" href="#a">Projetos</a></li>
                           <li className="lista-pai"><a className="lista-filho" href="#a">Contatos</a></li>
                       </ul>
                   </nav>
               </header>
            </section>
        )
    }
}
export default Header;