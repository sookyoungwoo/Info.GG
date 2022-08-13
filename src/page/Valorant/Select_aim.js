import { Link, useParams } from "react-router-dom";
import "../../styles/AimPoint.scss";
import Nav from "../../components/Nav";
import React, { useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function Select() {
    const clover = "./aim_image/네잎클로버.png";
    const minicross = "./aim_image/미니십자가.png";
    const cross1 = "./aim_image/십자가1.png";
    const cross2 = "./aim_image/십자가2.png";

    
    return (
        <>
            <header>
                <Nav />
            </header>
            <div className="aim">
                <CopyToClipboard text="0;P;c;7;h;0;f;0;0t;9;0l;1;0o;1;0a;1;0f;0;1t;3;1l;1;1o;4;1a;1;1m;0;1f;0">
                    <div className="aim_tit">
                            <div className="aim_div">
                            <img className="aim_img" src={clover} />
                            <p>clover</p>
                        </div>
                    </div> 
                </CopyToClipboard>
                <CopyToClipboard text="0;P;o;1;0t;1;0l;4;0o;1;0a;1;0f;0;1b;0">
                    <div className="aim_tit">
                           <div className="aim_div">
                            <img className="aim_img" src={cross1} />
                            <p>cross</p>
                        </div>
                    </div> 
                </CopyToClipboard>
            </div>
        </>
    )
}