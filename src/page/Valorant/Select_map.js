import { Link } from "react-router-dom";
import "../../styles/Select_map.scss";
import Nav from "../../components/Nav";
export default function Select() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <div className="map">
                <img className="bind" src="./map_image/바인드.png"></img>
                <img className="breeze" src="./map_image/브리즈.png"></img>
                <img className="split" src="./map_image/스플릿.png"></img>
                <img className="icebox" src="./map_image/아이스박스.png"></img>
                <img className="ascent" src="./map_image/어센트.png"></img>
                <img className="pearl" src="./map_image/펄.png"></img>
                <img className="fracture" src="./map_image/프랙처.png"></img>
                <img className="haven" src="./map_image/헤이븐.png"></img>
            </div>
        </>


    )
}