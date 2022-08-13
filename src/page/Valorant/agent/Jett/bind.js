import Nav from "../../../../components/Nav"
import "../../../../styles/Select_Position.scss";
export default function Bind() {
    return (
        <body className="map_bind">
            <header>
                <Nav />
            </header>
            <div className="Map_body">
                <div className="map_name">
                    맵
                </div>
                <div className="background_mapimage">
                    <img src ="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8538036a309525ae/5ebc470bfd85ad7411ce6b50/bind-featured.png"/>
                </div>

                <div className="Select_Position">
                    <button className="defense">수비</button>
                    <button className="attack">공격</button>
                </div>
            </div> 
        </body>
    )
}