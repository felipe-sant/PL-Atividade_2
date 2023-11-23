import { Component } from "react";
import Header from "../components/HeaderComponent";
import Main from "../components/MainComponent";
import Footer from "../components/FooterComponent";

class Home extends Component {
    render() {
        return (
            <main>
                <Header />
                <Main />
                <Footer />
            </main>
        )
    }
}

export default Home;