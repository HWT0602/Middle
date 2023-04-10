import Header from "../components/Buy/Header.jsx"
import Footer from "../components/Buy/Footer";
import Best from "../components/Buy/Best";
import Guitar from "../components/Buy/Guitar";
import Bass from "../components/Buy/Bass";
import '../components/Buy/index.css'

function Buy(){
    return(
        <div>
            <Header/>
            <Best/>
            <Guitar/>
            <Bass/>
            <Footer/>
        </div>
    );
}

export default Buy;