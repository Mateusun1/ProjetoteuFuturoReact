import React, { Component } from "react";
import LogoSquadG from "../../assents/img/LogoSquadGrande.svg"
import "./Footer.css"
class Footer extends Component{
    render(){
        return(
            <section>
                <footer>
                    <img src={LogoSquadG}/>
                    <p>&copy;Copyright SQUAD 15 - 2021</p>
                </footer>
            </section>
        )
    }
}
export default Footer