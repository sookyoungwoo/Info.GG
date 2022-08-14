import "../styles/Nav.scss"
import { Link } from "react-router-dom";

export default function Select() {
    return (
        <>
            <nav className="NavBar">
                <div className="NavBar_Logo">
                    <p>Info.GG</p>
                </div>
                <ul className="NavBar_Menu">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><li>홈</li></Link>
                    <div className="dropdown">
                        <li className="drop_Menu">발로란트</li>
                        <div className="dropdown-content">
                            <Link to="/Select" style={{ textDecoration: 'none', color: 'white' }}><p>요원별 꿀팁</p></Link>
                            <Link to="/Aim" style={{ textDecoration: 'none', color: 'white' }}><p>조준점</p></Link>
                        </div>
                    </div>
                    <div className="dropdown" id="dropdown2">
                        <li className="drop_Menu">피드백</li>
                        <div className="dropdown-content">
                            <Link to="/Lecture" style={{ textDecoration: 'none', color: 'white' }}><p>무료강의</p></Link>
                            <Link to="/Chat" style={{ textDecoration: 'none', color: 'white' }}><p>채팅</p></Link>
                        </div>
                    </div>
                    <div className="dropdown" id="dropdown3">
                        <li className="drop_Menu">아시아서버 용어</li>
                        <div className="dropdown-content">
                            <Link to="/japan" style={{ textDecoration: 'none', color: 'white' }}><p>일본어</p></Link>
                            <Link to="/english" style={{ textDecoration: 'none', color: 'white' }}> <p>영어</p></Link>
                        </div>
                    </div>
                </ul>
            </nav>
        </>
    )
}