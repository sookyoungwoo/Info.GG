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
                    <span className="map_name_span">바인드</span>
                </div>
                <div className="mapbutton_tit">
                    <div className="background_mapimage">
                        <img src ="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8538036a309525ae/5ebc470bfd85ad7411ce6b50/bind-featured.png"/>
                    </div>
                    <div className="Select_Position">
                        <div className="defense_div">
                            <button className="defense">수비</button>
                        </div>
                        <div className="attack_div">
                            <button className="attack">공격</button>
                        </div>
                    </div>
                </div>
            </div> 
        </body>
    )
}