function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locoscroll()




var cur = document.querySelector("#cursor")
var pg1 = document.querySelector("#page1-con")
function cursorEffect() {
    pg1.addEventListener("mousemove", function (dets) {

        /* pure js 
        cur.style.left= dets.x + "px"
        cur.style.top= dets.y + "px"*/

        gsap.to(cur, {
            x: dets.x,

            y: dets.y
        })
    })
    pg1.addEventListener("mouseenter", function () {
        gsap.to(cur, {
            scale: 1,

            opacity: 1
        })
    })
    pg1.addEventListener("mouseleave", function () {
        gsap.to(cur, {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffect()
function pg2Animation() {



    gsap.to(" #page2 .boundingelem", {
        y: '0',

        stagger: 0.2,
        duration: 1,
        // ease: Expo.easeInOut
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 35%",
            end: "top 5%",
            markers: false,
            scrub: 2
        }
    })
    gsap.to("#line", {
        width: '100%',
        duration: 1.4,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 35%",
            end: "top 0%",
            // markers:true,
            scrub: 2
        }
        // ease: Expo.easeInOut
    }
    )


}

pg2Animation();

function pg3animation() {
    gsap.to(".pg3boundingelem", {
        y: '0',

        stagger: 0.2,
        duration: 1,

        // ease: Expo.easeInOut

        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 65%",
            markers: false

        }
    })
}
pg3animation()
function pg4animation() {
    gsap.to("#page4 .boundingelem", {
        y: '0',

        stagger: 0.2,
        duration: 1,
        // ease: Expo.easeInOut
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 35%",
            end: "top 5%",
            // markers:true,
            scrub: 2
        }
    })
    gsap.to("#line", {
        width: '100%',
        duration: 1.4,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 35%",
            end: "top 0%",
            // markers:true,
            scrub: 2
        }
        // ease: Expo.easeInOut
    }
    )
}
pg4animation()

function swiper() {
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,

        disableOnInteraction: true,
    },
});

}
swiper()
function loader() {
    var tl = gsap.timeline()
tl.from("#loader h2", {
    x: 100,
    opacity: 0,
    duration: 0.5,
    delay:0.5,
    stagger: 0.2
})
tl.to("#loader h2", {
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
})
tl.to("#loader",{
    opacity:0,
    duration:0.2
})
tl.from("#page1-con h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.2

})
tl.to("#loader",{
    display:"none"
})
}
loader()
