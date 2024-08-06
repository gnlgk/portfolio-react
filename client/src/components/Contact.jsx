import React from 'react'
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact split">
                Contact
                <br /> me
            </div>
            <div className="text__info">
                <div>
                    <h5>You can also find me on</h5>
                    <ul>
                        <li>
                            <Link to="">Github</Link>
                        </li>
                        <li>
                            <Link to="">Facebook</Link>
                        </li>
                        <li>
                            <Link to="">Instagram</Link>
                        </li>
                        <li>
                            <Link to="">Figma</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>
                        <Link to="">fdcwrt@gmail.com</Link>
                    </p>
                    <p>CERTIFICATE</p>
                    <p className="kor">정보처리 기능사</p>
                    <p className="kor">웹디자인 기능사</p>
                    <p className="kor">컴퓨터활용능력 1급</p>
                </div>
            </div>
        </div>

    )
}

export default Contact
