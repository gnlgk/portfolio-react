import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Site = () => {
    const [click, setClick] = useState(false);

    const working = () => {
        setClick(!click);
        alert("작업중입니다.");
    }
    return (
        <div id="site">
            <span className="title">portfolio</span>
            <section className="sec4__cont1">
                <div className="sec__title split">Site(2024)</div>
                <div className="sec__msg split">
                    <ul>
                        <li className="desc1">
                            1. PHP를 이용한 연예인 사진 모음 사이트
                            <br />
                            2. React를 이용한 뮤직 사이트
                            <br />
                            3. Vue를 이용한 영화 사이트
                            <br />
                            4. React, node를 이용한 드라이브스루 사이트
                            <br />
                        </li>
                        <li className="desc2">
                            이곳에서는 제가 참여한 프로젝트와 그 성과를 만나보실 수 있습니다.
                            <br />웹 개발 분야에서 다양한 프로젝트를 수행하며, 세심한 부분까지
                            신경 써서 독창적이고 효율적인 결과물을 완성했습니다.
                        </li>
                    </ul>
                </div>
            </section>
            <section className="sec4__cont2">
                <div className="imgWrap">
                    <div className="img" />
                </div>
                <div className="circle">
                    <p>Project01</p>
                    <p>
                        PHP를 이용한 연예인 <br />
                        사진 모음 사이트입니다.
                    </p>
                    <p>html / css / javascript</p>
                    <Link to="http://wlsdks.dothome.co.kr/" target="_blank">
                        <span>VIEW</span>
                        <div className="arrow" />
                    </Link>
                </div>
                <div className="one">
                    <Link to="https://github.com/gnlgk/formyceleb" target="_blank">
                        Github
                    </Link>
                </div>
            </section>
            <section className="sec4__cont3">
                <div className="imgWrap">
                    <div className="img" />
                </div>
                <div className="circle">
                    <p>Project02</p>
                    <p>
                        React와 Python을
                        <br /> 이용한 커피 사이트입니다.
                    </p>
                    <p>react.js / javascript</p>
                    <Link to="https://coffee-api-rosy.vercel.app/" target="_blank">
                        <span>VIEW</span>
                        <div className="arrow" />
                    </Link>
                </div>
                <div className="one">
                    <Link to="https://github.com/gnlgk/coffee-api" target="_blank">
                        Github
                    </Link>
                </div>
            </section>
            <section className="sec4__cont4">
                <div className="imgWrap">
                    <div className="img" />
                </div>
                <div className="circle">
                    <p>Project03</p>
                    <p>
                        Vue와 API를
                        <br /> 이용한 영화 사이트입니다.
                    </p>
                    <p>vue.js / javascript</p>
                    <Link to="https://vue-movie-virid.vercel.app/" target="_blank">
                        <span>VIEW</span>
                        <div className="arrow" />
                    </Link>
                </div>
                <div className="one">
                    <Link to="https://github.com/gnlgk/vue-movie" target="_blank">
                        Github
                    </Link>
                </div>
            </section>
            <section className="sec4__cont5">
                <div className="imgWrap">
                    <div className="img" />
                </div>
                <div className="circle">
                    <p>Project04</p>
                    <p>
                        React와 Python을
                        <br /> 이용한 뮤직 사이트입니다.
                    </p>
                    <p>react.js / javascript</p>
                    <Link to="https://music-youtube-chi.vercel.app/" target="_blank">
                        <span>VIEW</span>
                        <div className="arrow" />
                    </Link>
                </div>
                <div className="one">
                    <Link to="https://github.com/gnlgk/Music-youtube" target="_blank">
                        Github
                    </Link>
                </div>
            </section>
            <section className="sec4__cont6">
                <div className="imgWrap">
                    <div className="img" />
                </div>
                <div className="circle">
                    <p>Project05</p>
                    <p>
                        리액트와 노드를 이용한 <br />
                        드라이브스루 사이트입니다.
                    </p>
                    <p>react.js / node.js</p>
                    <Link to="" onClick={working}>
                        <span>VIEW</span>
                        <div className="arrow" />
                    </Link>
                </div>
                <div className="one">
                    <Link to="" onClick={working}>
                        Github
                    </Link>
                </div>
            </section>
        </div>

    )
}

export default Site
