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
            kayo: "./agent_image/faid.png"
        }
    ];
    return (
        <>
            <header>
                <Nav />
            </header>
            <div className="agent">
                <div className="duelist">
                    <h3>타격대</h3>
                    <img className="agent1" src={Duelist[0].neon} />
                    <img className="agent2" src={Duelist[0].reyna} />
                    <img className="agent3" src={Duelist[0].raze} />
                    <img className="agent4" src={Duelist[0].yoru} />
                    <Link to="/Select/Place" style={{ textDecoration: 'none', color: 'white' }}>
                        <img className="agent5" src={Duelist[0].jett} />
                    </Link>
                    <img className="agent6" src={Duelist[0].phoenix} />
                </div>
                <hr />
                <div className="sentinel">
                    <h3>감시자</h3>
                    <img className="agent7" src={Sentinel[0].killjoy} />
                    <img className="agent8" src={Sentinel[0].cypher} />
                    <img className="agent9" src={Sentinel[0].sage} />
                    <img className="agent10" src={Sentinel[0].chamber} />
                </div>
                <hr />
                <div className="controller">
                    <h3>전략가</h3>
                    <img className="agent11" src={Controller[0].viper} />
                    <img className="agent12" src={Controller[0].omen} />
                    <img className="agent13" src={Controller[0].brim} />
                    <img className="agent14" src={Controller[0].astra} />
                </div>
                <hr />
                <div className="initiator">
                    <h3>척후대</h3>
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