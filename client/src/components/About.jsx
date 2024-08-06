import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const About = () => {

    // useEffect(() => {
    //     const anim2 = gsap.timeline();

    //     gsap.utils.toArray(".sec__title .word").forEach(item => {
    //         anim2.fromTo(item, {
    //             opacity: 0.1,
    //         }, {
    //             opacity: 1,
    //             ease: "none",
    //             // delay: 1,
    //             scrollTrigger: {
    //                 trigger: item,
    //                 start: "top 70%",
    //                 end: "top 30%",
    //                 scrub: 1,
    //                 markers: false
    //             }
    //         })
    //     });



    //     gsap.set(".about .sec__title .char", { opacity: 0, y: 20 })

    //     const ani1 = gsap.timeline();
    //     ani1.to(".about .sec__title .char", { stagger: 0.01, duration: 0.5, y: 0, opacity: 1, ease: "power3.out" })

    //     ScrollTrigger.create({
    //         animation: ani1,
    //         trigger: ".about .sec__title .char",
    //         start: "-1000% center",
    //         end: "bottom top",
    //         toggleActions: "restart none none none",
    //         markers: false
    //     });


    //     gsap.set(".about .sec__msg .char", { opacity: 0, y: 10, rotationz: 10 })

    //     const ani2 = gsap.timeline();
    //     ani2.to(".about .sec__msg .char", { stagger: 0.01, duration: 0.2, rotationz: 0, y: 0, opacity: 1, ease: "power3.out" })
    //     ScrollTrigger.create({
    //         animation: ani2,
    //         trigger: ".about .sec__msg .char",
    //         start: "top center",
    //         end: "bottom top",
    //         markers: false
    //     });



    //     gsap.set(".foto_begin", { opacity: 0 })

    //     const ani3 = gsap.timeline();
    //     ani3.to(".foto_begin", { opacity: 1, duration: 5, ease: "power3.out" })
    //     ScrollTrigger.create({
    //         animation: ani3,
    //         trigger: ".foto_begin",
    //         start: "top center",
    //         end: "bottom top",
    //         markers: false
    //     });

    //     // foto_begin

    //     let foto_begin = gsap.timeline
    //         ({
    //             scrollTrigger:
    //             {
    //                 trigger: ".foto_begin",
    //                 start: "10% center",
    //                 end: "25% top",
    //                 scrub: 1,
    //                 // markers: false,
    //             }
    //         });

    //     foto_begin.to(".img_begin3",
    //         {
    //             rotateZ: "-60deg",
    //             translateX: "-180%",
    //             translateY: "40%",
    //             opacity: 0,
    //         });

    //     let foto_begin_2 = gsap.timeline
    //         ({
    //             scrollTrigger:
    //             {
    //                 trigger: ".foto_begin",
    //                 start: "30% 40%",
    //                 end: "45% top",
    //                 scrub: 1,
    //                 //markers: false,
    //             }
    //         });

    //     foto_begin_2.to(".img_begin2",
    //         {
    //             rotateZ: "60deg",
    //             translateX: "180%",
    //             translateY: "40%",
    //             opacity: 0,
    //         });

    // })
    return (
        <div id="about">
            <div className="about">
                <div className="sec__title split">About(2024)</div>
                <div className="sec__msg split">
                    <ul>
                        <li className="desc1">
                            After earning a degree in computer science and working in the
                            semiconductor field for 8 years, I used government subsidies to return
                            to my roots as a developer.
                            <br /> I am now working on projects with talented individuals and
                            constantly improving my skills.
                        </li>
                        <li className="desc2">
                            복잡한 문제를 마주할 때마다, 한 걸음 물러서서 단위 테스트를 통해
                            코드를 한 줄씩
                            <br />
                            꼼꼼히 검토하는 것을 중요하게 생각합니다. <br />
                            문제를 해결한 후 느끼는 성취감과 즐거움은 저에게 큰 동기부여가 됩니다.
                        </li>
                    </ul>
                </div>
                <div className="foto_begin">
                    <div className="img_begin1" />
                    <div className="img_begin2" />
                    <div className="img_begin3" />
                </div>
            </div>
        </div>

    )
}

export default About
