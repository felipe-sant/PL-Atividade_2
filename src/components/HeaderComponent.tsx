import { Component } from "react";
import logo from "../images/heartLogo.svg";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={ logo } alt=""/>
                    <h1>Pet Lovers</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Pedro augusto</a></li>
                        <li><a href="#">Pedro augusto</a></li>
                        <li><a href="#">Pedro augusto</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;
