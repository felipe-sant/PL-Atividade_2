import { Component } from "react";
import Header from "../components/HeaderComponent";
import Main from "../components/homeComponent";
import Footer from "../components/FooterComponent";

class Home extends Component {
    render() {
        return (
            <main>
                <Header />
                <div className="mainBackground">
                    <Main />
                </div>
                <Footer />
            </main>
        )
    }
}

export default Home;