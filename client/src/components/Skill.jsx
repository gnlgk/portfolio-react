import React from 'react'

const Skill = () => {
    return (
        <div id="skill">
            <div className="sec__title split">Skill(2024)</div>
            <div className="sec__msg split">
                <ul>
                    <li className="desc2">
                        이곳에서는 제가 보유한 다양한 기술과 역량을 소개합니다. 저는 끊임없는
                        학습과 도전을 통해 얻은 기술들로 문제를 해결하고 혁신적인 결과물을
                        만들어내고자 노력하고 있습니다. 각 기술의 아이콘 위에 마우스를 올리시면
                        숙련도를 퍼센트로 확인하실 수 있습니다.
                    </li>
                </ul>
            </div>
            <div className="skillWrap">
                <div className="skill">
                    <div className="front">
                        <span className="num">01.</span>
                        <h3>html</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={90}>
                            0%
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="front">
                        <span className="num">02.</span>
                        <h3>css</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={90}>
                            0%
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="front">
                        <span className="num">03.</span>
                        <h3>java script</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={80}>
                            0%
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="front">
                        <span className="num">04.</span>
                        <h3>php</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={70}>
                            0%
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="front">
                        <span className="num">05.</span>
                        <h3>jQuery</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={90}>
                            0%
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="front">
                        <span className="num">06.</span>
                        <h3>python</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={60}>
                            0%
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="front">
                        <span className="num">07.</span>
                        <h3>react</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={70}>
                            0%
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="front">
                        <span className="num">08.</span>
                        <h3>vue</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={60}>
                            0%
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="front">
                        <span className="num">09.</span>
                        <h3>sass</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={90}>
                            0%
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="front">
                        <span className="num">10.</span>
                        <h3>node.js</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={70}>
                            0%
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="front">
                        <span className="num">11.</span>
                        <h3>mongo DB</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={80}>
                            0%
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="front">
                        <span className="num">12.</span>
                        <h3>github</h3>
                    </div>
                    <div className="back">
                        <p className="percent" data-percent={80}>
                            0%
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skill
