import React from 'react'

const Intro = () => {

    return (
        <div id="intro">
            <div className="nav__msg split">
                <ul>
                    <li>
                        새로운 배움의 즐거움을 만끽하며, 어떤 일이든 꾸준히 즐기면서 도전하다
                        보면 불가능한 것은 없다고 믿습니다. <br />
                        분야를 가리지 않고 항상 적극적으로 배우는 자세를 유지하며,
                        <br />
                        작은 디테일까지 꼼꼼히 신경 쓰는 개발자가 되기 위해 끊임없이
                        노력하겠습니다. <br />
                        매일의 배움과 성장이 곧 저의 가능성을 확장시킨다고 생각합니다.
                    </li>
                </ul>
            </div>
            <div className="sky"></div>
            <div className="black">
                <div className="black__btn">
                    <div className="scroll">Scroll</div>
                    <div className="down__btn"></div>
                </div>
            </div>
            <div className="progress">
                <div className="percent" data-percent={100}>
                    0%
                </div>
            </div>
        </div>
    )
}

export default Intro
