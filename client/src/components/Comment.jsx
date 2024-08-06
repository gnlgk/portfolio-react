import React, { useEffect, useState } from 'react'
import img1 from '../assets/img/i1.jpg';
import img2 from '../assets/img/i2.jpg';
import img3 from '../assets/img/i3.jpg';
import img4 from '../assets/img/i4.jpg';
import img5 from '../assets/img/i5.jpg';
import img6 from '../assets/img/i6.jpg';
import img7 from '../assets/img/i7.jpg';
import img8 from '../assets/img/i8.jpg';
import img9 from '../assets/img/i9.jpg';
import img10 from '../assets/img/i10.jpg';
import img11 from '../assets/img/i11.jpg';
import img12 from '../assets/img/i12.jpg';
import img13 from '../assets/img/i13.jpg';
import img14 from '../assets/img/i14.jpg';
import img15 from '../assets/img/i15.jpg';
import img16 from '../assets/img/i16.jpg';



const Comment = () => {
    const backgroundArr = [
        img1, img2, img3, img4, img5, img6,
        img7, img8, img9, img10, img11, img12,
        img13, img14, img15, img16
    ];
    const [click, setClick] = useState(false);

    const working = () => {
        setClick(!click);
        alert("작업중입니다.");
    }

    useEffect(() => {

        const bgImages = document.querySelectorAll(".item__content");

        bgImages.forEach((bgImage, index) => {
            if (index < bgImages.length - 1) {
                const randomIndex = Math.floor(Math.random() * backgroundArr.length);
                bgImage.style.backgroundImage = `url(${backgroundArr[randomIndex]})`;
            }
        });
    }, []);



    return (
        <div id="comment">
            <div className="title">
                <div className="sec__title split">Comment</div>
                <div className="sec__msg split">
                    <ul>
                        <li className="desc2">
                            포트폴리오를 보시고 의견이나 피드백을 남겨주시면 감사하겠습니다.
                            궁금한 점이나 질문이 있으시면 자유롭게 댓글을 남겨 주세요. 여러분의
                            소중한 의견을 기다리고 있습니다.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="masonry">
                <div className="item">
                    <div className="item__content">
                        <div className="text">정말 깔끔하게 잘하셨네요! 멋집니다!</div>
                        <div className="date">2024.08.01 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--small">
                        <div className="text">사이트가 너무 이쁩니다.</div>
                        <div className="date">2024.07.30 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--medium">
                        <div className="text">멋져요! 애니메이션 효과도 부드럽게 잘 넣으셔서 보는 재미가 있어요</div>
                        <div className="date">2024.07.28 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--small">
                        <div className="text">정말 잘 만드셨네요! 잘 보고 갑니다!</div>
                        <div className="date">2024.07.25 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--medium">
                        <div className="text">정보가 정말 유용해요. 고마워요!</div>
                        <div className="date">2024.07.23 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content">
                        <div className="text">참고가 됐습니다ㅎㅎ</div>
                        <div className="date">2024.07.20 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--large">
                        <div className="text">잘 봤습니다! 제가 만들고 싶은 스타일이라서 흥미롭게 봤네요 ㅎㅎ 부드러운 애니메이션 멋지네요.</div>
                        <div className="date">2024.07.18 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--medium">
                        <div className="text">디자인과 기능이 정말 훌륭합니다!</div>
                        <div className="date">2024.07.15 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--small">
                        <div className="text">보기 편하고 잘 정리되어 있네요!</div>
                        <div className="date">2024.07.10 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content">
                        <div className="text">와, 페이지 로딩 속도가 정말 빠르네요.</div>
                        <div className="date">2024.07.05 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--large">
                        <div className="text">사용자 경험이 정말 훌륭합니다. 고생 많으셨어요!</div>
                        <div className="date">2024.07.02 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content">
                        <div className="text">컬러 조합이 너무 이쁘네요.</div>
                        <div className="date">2024.06.30 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--small">
                        <div className="text">페이지가 너무 직관적이고 깔끔해요.</div>
                        <div className="date">2024.06.25 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--large">
                        <div className="text">폰트 선택이 정말 좋습니다!</div>
                        <div className="date">2024.06.20 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--medium">
                        <div className="text">직관적이고 보기 편해요. 감사합니다!</div>
                        <div className="date">2024.06.15 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--small">
                        <div className="text">멋진 작업이네요!</div>
                        <div className="date">2024.06.10 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content item__content--medium">
                        <div className="text">모바일에서도 잘 작동해요. 멋져요!</div>
                        <div className="date">2024.06.05 누군가가</div>
                    </div>
                </div>
                <div className="item">
                    <div className="item__content">
                        <div className="text">훌륭한 작업입니다. 큰 도움이 되었어요.</div>
                        <div className="date">2024.06.01 누군가가</div>
                    </div>
                </div>

                <div className="item last">
                    <div className="item__content item__content--small">
                        <div className="cmt_h">댓글쓰기</div>
                        <input type="text" placeholder="글은 200글자 이내로 작성해주세요!" />
                        <input type="text" placeholder="이름" />
                        <button type="submit" onClick={working}>등록</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Comment
