import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import SimpleSlider from "../components/Home/Roundimg";
import Service from "../components/Home/Service";

function Home() {
    return(
        <div>
            <Header/>
            <div className="content">
                <img className="mainimg" src="/img/main.jpg" alt="main" />
            </div>
            <SimpleSlider/>
            <Service/>
            <Footer/>
        </div>
    );
}

export default Home;