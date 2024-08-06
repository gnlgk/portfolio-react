import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Lenisani = () => {

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);

    const targets = gsap.utils.toArray(".split");
    let SplitClient = new SplitType(targets, { type: "lines, words, chars" });
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;

    gsap.set("#intro .nav__msg .char", { opacity: 0 })
    gsap.set("#header .logo", { opacity: 0 })
    gsap.set("#header .menu ul li", { opacity: 0 })
    gsap.set("#intro .black", { opacity: 0 })
    gsap.set(".progress .percent", { opacity: 0 })

    const progressBar = document.querySelector('.progress .percent');

    const tl = gsap.timeline({
        onUpdate: function () {
            const progress = tl.progress() * 100;
            progressBar.textContent = `${Math.round(progress)}%`;
        },
        onComplete: function () {
            lenis.stop();
        }
    });

    const timerId = setTimeout(() => {

        tl.to(".progress .percent", { opacity: 1, ease: "power2.inOut" }, "ab")
        tl.to("#intro .nav__msg .char", { opacity: 1, stagger: 0.05, ease: "power2.inOut" }, "ab")
        tl.to("#header .logo", { opacity: 1, color: "#000", duration: 2 })
        tl.to("#intro .nav__msg .char", { opacity: 0, stagger: 0.02, ease: "power2.inOut" })
        tl.fromTo("#header .logo", { rotation: 180 }, { rotation: 360, duration: 2, ease: "power2.inOut" })
        tl.to("#header .menu ul li", { opacity: 1, color: "#000", stagger: 0.01, ease: "power2.inOut" }, "cc")
        tl.to("#intro .black", { opacity: 0.8, duration: 1, ease: "power2.inOut" }, "cc")

            .eventCallback("onComplete", () => {
                lenis.start();
            });
    }, 2000);

    // about

    const anim2 = gsap.timeline();

    gsap.utils.toArray(".sec__title .word").forEach(item => {
        anim2.fromTo(item, {
            opacity: 0.1,
        }, {
            opacity: 1,
            ease: "none",
            // delay: 1,
            scrollTrigger: {
                trigger: item,
                start: "top 70%",
                end: "top 30%",
                scrub: 1,
                markers: false
            }
        })
    });



    gsap.set(".about .sec__title .char", { opacity: 0, y: 20 })

    const ani1 = gsap.timeline();
    ani1.to(".about .sec__title .char", { stagger: 0.01, duration: 0.5, y: 0, opacity: 1, ease: "power3.out" })

    ScrollTrigger.create({
        animation: ani1,
        trigger: ".about .sec__title .char",
        start: "-1000% center",
        end: "bottom top",
        toggleActions: "restart none none none",
        markers: false
    });


    gsap.set(".about .sec__msg .char", { opacity: 0, y: 10, rotationz: 10 })

    const ani2 = gsap.timeline();
    ani2.to(".about .sec__msg .char", { stagger: 0.01, duration: 0.2, rotationz: 0, y: 0, opacity: 1, ease: "power3.out" })
    ScrollTrigger.create({
        animation: ani2,
        trigger: ".about .sec__msg .char",
        start: "top center",
        end: "bottom top",
        markers: false
    });



    gsap.set(".foto_begin", { opacity: 0 })

    const ani3 = gsap.timeline();
    ani3.to(".foto_begin", { opacity: 1, duration: 5, ease: "power3.out" })
    ScrollTrigger.create({
        animation: ani3,
        trigger: ".foto_begin",
        start: "top center",
        end: "bottom top",
        markers: false
    });

    // foto_begin

    let foto_begin = gsap.timeline
        ({
            scrollTrigger:
            {
                trigger: ".foto_begin",
                start: "10% center",
                end: "25% top",
                scrub: 1,
                // markers: false,
            }
        });

    foto_begin.to(".img_begin3",
        {
            rotateZ: "-60deg",
            translateX: "-180%",
            translateY: "40%",
            opacity: 0,
        });

    let foto_begin_2 = gsap.timeline
        ({
            scrollTrigger:
            {
                trigger: ".foto_begin",
                start: "30% 40%",
                end: "45% top",
                scrub: 1,
                //markers: false,
            }
        });

    foto_begin_2.to(".img_begin2",
        {
            rotateZ: "60deg",
            translateX: "180%",
            translateY: "40%",
            opacity: 0,
        });

    // skill

    gsap.set("#skill .sec__msg .char", { opacity: 0, y: 10, rotationz: 10 })
    gsap.set("#skill .skill", { opacity: 0, y: 10, rotationz: 10 })

    const skillcnt = gsap.timeline();
    skillcnt.to("#skill .sec__msg .char", { stagger: 0.01, duration: 0.2, rotationz: 0, y: 0, opacity: 1, ease: "power3.out" })
        .to("#skill .skill", { duration: 2, rotationz: 0, y: 0, opacity: 1, ease: "power3.inOut" })
    ScrollTrigger.create({
        animation: skillcnt,
        trigger: "#skill .sec__msg .char",
        start: "top center",
        end: "bottom top",
        markers: false
    });

    const skillElements = document.querySelectorAll(".skill");

    skillElements.forEach(skillElement => {
        skillElement.addEventListener("mouseenter", () => {
            const skill = skillElement.querySelector(".percent");
            const finalPercent = skill.dataset.percent;

            gsap.fromTo(skill, {
                textContent: "0%"
            }, {
                textContent: finalPercent + "%",
                snap: "textContent",
                scrollTrigger: {
                    trigger: skill.parentNode,
                    start: "top bottom-=20%",
                    end: "bottom top",
                    toggleActions: "play none none none",
                },
                ease: "none",
                duration: 1
            });
        });
    });

    // site

    const horizontal = document.querySelector("#site");
    const sections = gsap.utils.toArray("#site > section");
    const title = document.querySelector("#site > .title");
    const img = document.querySelectorAll("#site .imgWrap");
    const circle = document.querySelectorAll("#site .circle");
    const one = document.querySelectorAll("#site .one");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: horizontal,
            start: "top top",
            end: () => "+=" + (horizontal.offsetWidth - window.innerWidth),
            pin: true,
            scrub: 1,
            // snap: {
            //     snapTo: 1 / (sections.length - 1),
            //     inertia: false,
            //     duration: { min: 0.1, max: 0.1 }
            // },
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: self => {
                const progress = self.progress;
                const titleX = progress * (horizontal.scrollWidth - title.clientWidth);
                const imgX = progress * (horizontal.scrollWidth - title.clientWidth) / 2;
                const circleX = progress * (horizontal.scrollWidth - title.clientWidth) / 3;
                console.log(titleX)
                gsap.to(title, { x: -titleX, ease: "none" });
                gsap.to(img, { x: -circleX, ease: "none" });
                gsap.to(circle, { x: -imgX, ease: "none" });
                gsap.to(one, { x: -imgX, ease: "none" });

            }
        }
    });

    gsap.to(one, { scale: 0.5, duration: 5, ease: "none", yoyo: true, repeat: -1 });
    gsap.to(img, { opacity: .8, duration: 3, ease: "none", yoyo: true, repeat: -1 });


    gsap.set("#site .sec__msg .char", { opacity: 0, y: 10, rotationz: 10 })

    const horicnt = gsap.timeline();
    horicnt.to("#site .sec__msg .char", { stagger: 0.01, duration: 0.2, rotationz: 0, y: 0, opacity: 1, ease: "power3.out" })
    ScrollTrigger.create({
        animation: horicnt,
        trigger: "#site .sec__msg .char",
        start: "top center",
        end: "bottom top",
        markers: false
    });

    //contact

    gsap.set(".contact .char", { opacity: 0, y: "50%" })

    const ani5 = gsap.timeline();
    ani5.to(".contact .char", { stagger: 0.03, duration: 1, y: 0, opacity: 1, ease: "power3.out" })

    ScrollTrigger.create({
        animation: ani5,
        trigger: ".contact .char",
        start: "top center",
        end: "bottom top",
        markers: false
    });
}

export default Lenisani
