const svgElement = document.getElementById('mySvg');
const gElement = svgElement.querySelector('g');
const div2Container = document.querySelector(".div2-container");
const box = document.querySelectorAll(".box");

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 60, opacity: 0, stagger: 0.4, delay: 0.4 });
}

contentAnimation();

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var viewportHeight = window.innerHeight;

    if (scrollPosition >= viewportHeight) {
        gElement.setAttribute('stroke', '#161616');
    } else {
        gElement.setAttribute('stroke', 'rgb(234,234,234)');
    }
});

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            div2Container.classList.add("back");
            // box.classList.add("back");
            observer.unobserve(entry.target);
        }
    });
}
const observer = new IntersectionObserver(handleIntersection);
observer.observe(div2Container);

function handleIntersection1(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            box[0].classList.add("back");
            box[1].classList.add("back");
            box[2].classList.add("back");
            observer.unobserve(entry.target);
        }
    });
}
const observer1 = new IntersectionObserver(handleIntersection1);
observer1.observe(box[0]);
observer1.observe(box[1]);
observer1.observe(box[2]);