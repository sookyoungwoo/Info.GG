import Nav from "../../components/Nav";
import "../../styles/Select_agent.scss";
export default function Select() {

    const neon = "./agent_image/neon.png";
    const reyna = "./agent_image/reyna.png";
    const raze = "./agent_image/raze.png";
    const yoru = "./agent_image/yoru.png";
    const jett = "./agent_image/jett.png";
    const phoenix = "./agent_image/phoenix.png"

    const killjoy = "./agent_image/killjoy.png";
    const cypher = "./agent_image/cypher.png";
    const sage = "./agent_image/sage.png";
    const chamber = "./agent_image/chamber.png";

    const viper = "./agent_image/viper.png";
    const omen = "./agent_image/omen.png";
    const brim = "./agent_image/astra.png";
    const astra = "./agent_image/brim.png";

    const britch = "./agent_image/britch.png";
    const sova = "./agent_image/sova.png";
    const sky = "./agent_image/sky.png";
    const faid = "./agent_image/kayo.png";
    const kayo = "./agent_image/faid.png";
    return (
        <>
            <header>
                <Nav />
            </header>
            <div className="agent">
                <div className="duelist">
                    <h3>타격대</h3>
                    <img className="agent1" src={neon} />
                    <img className="agent2" src={reyna} />
                    <img className="agent3" src={raze} />
                    <img className="agent4" src={yoru} />
                    <img className="agent5" src={jett} />
                    <img className="agent6" src={phoenix} />
                </div>
                <hr />
                <div className="sentinel">
                    <h3>감시자</h3>
                    <img className="agent7" src={killjoy} />
                    <img className="agent8" src={cypher} />
                    <img className="agent9" src={sage} />
                    <img className="agent10" src={chamber} />
                </div>
                <hr />
                <div className="controller">
                    <h3>전략가</h3>
                    <img className="agent11" src={viper} />
                    <img className="agent12" src={omen} />
                    <img className="agent13" src={brim} />
                    <img className="agent14" src={astra} />
                </div>
                <hr />
                <div className="initiator">
                    <h3>척후대</h3>
                    <img className="agent15" src={britch} />
                    <img className="agent16" src={sova} />
                    <img className="agent17" src={sky} />
                    <img className="agent18" src={faid} />
                    <img className="agent19" src={kayo} />
                </div>
            </div>
        </>
    )
}