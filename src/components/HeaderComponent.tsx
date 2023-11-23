import { Component } from "react";
import logo from "../images/heartLogo.svg";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={ logo } alt=""/>
                    <h1><a href="/">Pet Lovers</a></h1>
                </div>
                <nav>
                    <ul>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;
