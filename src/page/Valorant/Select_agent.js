import Nav from "../../components/Nav";
import "../../styles/Select_agent.scss";
import { Link } from "react-router-dom";
export default function Select() {



    const Duelist = [
        {
            neon: "./agent_image/neon.png",
            reyna: "./agent_image/reyna.png",
            raze: "./agent_image/raze.png",
            yoru: "./agent_image/yoru.png",
            jett: "./agent_image/jett.png",
            phoenix: "./agent_image/phoenix.png"
        }
    ];
    const Sentinel = [
        {
            killjoy: "./agent_image/killjoy.png",
            cypher: "./agent_image/cypher.png",
            sage: "./agent_image/sage.png",
            chamber: "./agent_image/chamber.png"
        }
    ];
    const Controller = [
        {
            viper: "./agent_image/viper.png",
            omen: "./agent_image/omen.png",
            brim: "./agent_image/astra.png",
            astra: "./agent_image/brim.png"
        }
    ];
    const Initiator = [
        {
            britch: "./agent_image/britch.png",
            sova: "./agent_image/sova.png",
            sky: "./agent_image/sky.png",
            faid: "./agent_image/kayo.png",
            kayo: "./agent_image/fade.png"
        }
    ];
    return (
        <>
            <header>
                <Nav />
            </header>
            <div className="agent">
                <div className="duelist">
                    <p className="agent_role">
                        <div className="line"></div>
                        <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png"/>
                        <h3>타격대</h3>
                    </p>
                    <Link to="/Select/JPlace" style={{ textDecoration: 'none', color: 'white' }}>
                        <img className="agent5" src={Duelist[0].jett} />
                    </Link>
                    <img className="agent1" src={Duelist[0].neon} />
                    <img className="agent2" src={Duelist[0].reyna} />
                    <img className="agent3" src={Duelist[0].raze} />
                    <img className="agent4" src={Duelist[0].yoru} />
                    <img className="agent6" src={Duelist[0].phoenix} />
                </div>
             
                <div className="sentinel">
                    <p className="agent_role">
                        <div className="line"></div>
                        <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt72ffc2e48d4a7a58/5eaa06852b79652f27c31ff6/Sentinel.png"/>
                        <h3>감시자</h3>
                    </p>
                    <img className="agent7" src={Sentinel[0].killjoy} />
                    <img className="agent8" src={Sentinel[0].cypher} />
                    <img className="agent9" src={Sentinel[0].sage} />
                    <img className="agent10" src={Sentinel[0].chamber} />
                </div>
           
                <div className="controller">
                    <p className="agent_role">
                        <div className="line"></div>
                        <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png"/>
                        <h3>전략가</h3>
                    </p>
                    <Link to="/Select/VPlace" style={{ textDecoration: 'none', color: 'white' }}>
                        <img className="agent11" src={Controller[0].viper} />
                    </Link>
                    <img className="agent12" src={Controller[0].omen} />
                    <img className="agent13" src={Controller[0].brim} />
                    <img className="agent14" src={Controller[0].astra} />
                </div>
     
                <div className="initiator">
                    <p className="agent_role">
                        <div className="line"></div>
                        <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2965c8a8dce0467d/5eaa0685e6f6795e530a1cbe/Initiator.png"/>
                        <h3>척후대</h3>
                    </p>
                    <img className="agent15" src={Initiator[0].britch} />
                    <img className="agent16" src={Initiator[0].sova} />
                    <img className="agent17" src={Initiator[0].sky} />
                    <img className="agent18" src={Initiator[0].faid} />
                    <img className="agent19" src={Initiator[0].kayo} />
                </div>
            </div>
        </>
    )
}