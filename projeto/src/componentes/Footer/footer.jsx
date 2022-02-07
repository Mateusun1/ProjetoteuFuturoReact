import React, {Component} from "react"
import "./footer.css"

import FooterLogo from "../Footer/LogoFooter.svg"
class Footer extends Component{
    render(){
        return(
            < section className="container footer">
                <img className="img-footer" src={FooterLogo} alt="" />
            </section>
        )
    }
}
export default Footer