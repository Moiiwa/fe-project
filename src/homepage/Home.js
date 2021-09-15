import './components/homepage.css'
import Title from "./components/Title";
import SidePanel from "./components/SidePanel";
import img from "../static/img.png";

function Home(){
    return (
        <div className="Home">
            <Title />
            <img id="cross"src={img} />
            <SidePanel />
        </div>
    );
}

export default Home