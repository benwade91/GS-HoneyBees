// sliding text event loop
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1
    }
})
// logo event loop
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: 1
    }
})
// honeybee event loop
let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        start: '30%',
        end: '80%',
        scrub: 1
    }
})
// home event loop
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '300%',
        scrub: 1,
        pin: true,
        pinSpacing: false
    }
})



tl.fromTo(".sliding-text", {y:0}, {y:-200});
tl4.fromTo(".honeybee", {left: '20%', top: '180vh'}, {left: '100%', top: '150%', opacity: .4})

// controls logo based on windo size
if(window.innerWidth > 600){
    tl2.fromTo(".logo", {scale: 8}, {scale: 1, top: '6vh', left: '4vw', x: '10%'})
}else{
    tl2.fromTo(".logo", {scale: 6}, {scale: 1, top: '6vh', left: '10vw'})
}
