import Nav from "../../../../components/Nav"
import "../../../../styles/Select_Position.scss";
export default function Bind() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <div className="Select_Position">
                <button className="defense">수비</button>
                <button className="attack">공격</button>
            </div>
        </>
    )
}