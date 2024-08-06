import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const headercolor = () => {

    const siteWidth = document.querySelector('#site').offsetWidth - window.innerWidth;

    gsap.fromTo(".logo", { rotation: 360 }, {
        rotation: 540,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: false
        }
    });

    const headerToWhite = gsap.timeline();
    headerToWhite.fromTo("#header h1", { color: "#000" }, { color: "#fff", ease: "power1.out" });
    headerToWhite.fromTo("#header .menu ul li", { color: "#000" }, { color: "#fff", ease: "power1.out" }, 0);

    const headerToBlack = gsap.timeline();
    headerToBlack.fromTo("#header h1", { color: "#fff" }, { color: "#000", ease: "power1.out" });
    headerToBlack.fromTo("#header .menu ul li", { color: "#fff" }, { color: "#000", ease: "power1.out" }, 0);

    // console.log(siteWidth)

    ScrollTrigger.create({
        animation: headerToWhite,
        trigger: '#about',
        start: "top 5%",
        end: "top 5%",
        scrub: 0.1,
        markers: false,
        onEnter: () => { console.log('Enter about'); },
        onLeave: () => { console.log('Leave about'); }
    });

    ScrollTrigger.create({
        animation: headerToBlack,
        trigger: '#site',
        start: "top 5%",
        end: "top 5%",
        scrub: 0.1,
        markers: false,
        onEnter: () => { console.log('Enter site'); },
        onLeave: () => { console.log('Leave site'); }
    });

    ScrollTrigger.create({
        animation: headerToWhite,
        trigger: '#comment',
        start: "top 5%",
        end: "top 5%",
        scrub: 0.1,
        markers: false,
        onEnter: () => console.log('Enter comment'),
        onLeave: () => console.log('Leave comment')
    });

    ScrollTrigger.create({
        animation: headerToBlack,
        trigger: '#contact',
        start: "top 5%",
        end: "top 5%",
        scrub: 0.1,
        markers: false,
        onEnter: () => { console.log('Enter contact'); },
        onLeave: () => { console.log('Leave contact'); }
    });


}

export default headercolor
