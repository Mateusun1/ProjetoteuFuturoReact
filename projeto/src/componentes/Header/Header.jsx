import React, {Component} from "react";
import LogoSquad15 from "../../assents/img/LogoSquad15.svg"
import "./Header.css"
class Header extends Component{
    render(){
        return(
            <section>
                <header>
                <div className="logo">
                    <img src={LogoSquad15}/>
                    <nav>
                        <ul>
                            <li><a>Membros</a></li>
                            <li><a>Trabalhos</a></li>
                            <li><a>Contatos</a></li>
                        </ul>
                    </nav>
                </div>
                </header>
            </section>
        )
    }
}
export default Header;