import { Link } from "react-router-dom";
import "../../../../styles/Select_map.scss";
import Nav from "../../../../components/Nav";

const bind = "../map_image/바인드.png";
const breeze = "../map_image/브리즈.png";
const split = "../map_image/스플릿.png";
const icebox = "../map_image/아이스박스.png";
const ascent = "../map_image/어센트.png";
const pearl = "../map_image/펄.png";
const fracture = "../map_image/프랙처.png"
const haven = "../map_image/헤이븐.png"

export default function Select() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <div className="map">
                <Link to="/Select/VPlace/Viper_bind" style={{ textDecoration: 'none', color: 'white' }}><img src={bind} /></Link>
                <img src={breeze} />
                <img src={split} />
                <img src={icebox} />
                <img src={ascent} />
                <img src={pearl} />
                <img src={fracture} />
                <img src={haven} />
            </div>
            <div className="agent_name">
                바이퍼
            </div>
        </>


    )
}