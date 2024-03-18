document.addEventListener("DOMContentLoaded", () => {
    const spanContainer = document.querySelector(".span_container");
    const span = document.querySelectorAll(".span_container span");
    const logo = document.querySelector("#logo");
    const navigator = document.querySelector("#navigator");
    const navigatorLi = document.querySelectorAll("#navigator li");
    const menuContainer = document.querySelector("#menu_container");
    const cursorBorder = document.querySelector("#cursorBorder");
    const spanWrapperSpan = document.querySelector("#span_wrapper span");
    const circle = document.querySelector(".circle");
    const cloud = document.querySelector(".cloud");
    const button1 = document.querySelector(".button1");
    const about_me = document.querySelector(".about_me div");

    let value = 0;
    let mouseX = 0;
    let mouseY = 0;
    let circlePositionX = 0;
    let circlePositionY = 0;
    let animation = 0;

    logo.addEventListener("click", () => {
        location.reload();
    })

    about_me.addEventListener("mouseover", () => {
        cursorBorder.style.setProperty("--size", "100px");
        cursorBorder.style.opacity = "0";
    })

    about_me.addEventListener("mouseleave", () => {
        cursorBorder.style.setProperty("--size", "40px");
        cursorBorder.style.opacity = "1";
    })

    logo.addEventListener("mouseover", () => {
        cursorBorder.style.setProperty("--size", "100px");
        cursorBorder.style.opacity = "0";
    })
    logo.addEventListener("mouseout", () => {
        cursorBorder.style.setProperty("--size", "40px");
        cursorBorder.style.opacity = "1";
    })

    document.addEventListener("mousemove", (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    navigatorLi.forEach((nav) => {
        nav.addEventListener('mouseover', () => {
            cursorBorder.style.setProperty("--size", "80px");
            cursorBorder.style.border = "unset"
            cursorBorder.style.background = "rgba(128, 0, 128, 0.289)";
        })
    })

    navigatorLi.forEach((nav) => {
        nav.addEventListener('mouseout', () => {
            cursorBorder.style.setProperty("--size", "40px");
            cursorBorder.style.border = "2px solid #606060"
            cursorBorder.style.background = "unset";
        })
    })

    const menuConfiguration = () => {
        if (value === 0) {
            navigator.style.background = "linear-gradient(344deg, rgba(9,0,34,1) 4%, rgba(75,11,119,1) 100%)";
            navigator.style.transform = "translate(0, 0)"
            navigatorLi[0].style.transform = "translateY(0)";
            navigatorLi[0].style.transitionDelay = "0.3s";
            navigatorLi[0].style.visibility = "visible";
            navigatorLi[1].style.transform = "translateY(0)";
            navigatorLi[1].style.transitionDelay = "0.4s";
            navigatorLi[1].style.visibility = "visible";
            navigatorLi[2].style.transform = "translateY(0)";
            navigatorLi[2].style.transitionDelay = "0.5s";
            navigatorLi[2].style.visibility = "visible";
            span[0].style.transform = "translateX(0) rotate(-45deg)";
            span[0].style.width = "60px"
            span[2].style.transform = "translateX(0) rotate(45deg)";
            span[2].style.width = "60px"
            span[0].style.backgroundColor = "white"
            span[2].style.backgroundColor = "white"
            menuContainer.addEventListener("mouseout", () => {
                span[0].style.transform = "translate(0px) rotate(-45deg)";
                span[2].style.transform = "translate(0px) rotate(45deg)";

            });

            value = 1;
        } else {
            navigator.style.transform = "translateY(-100%)"
            navigatorLi[0].style.transitionDelay = "unset";
            navigatorLi[0].style.transform = "translateY(-100%)";
            navigatorLi[1].style.transitionDelay = "unset";
            navigatorLi[1].style.transform = "translateY(-100%)";
            navigatorLi[2].style.transitionDelay = "unset";
            navigatorLi[2].style.transform = "translateY(-100%)";
            span[0].style.transform = "translateX(0) rotate(-45deg)";
            span[0].style.width = "20px"
            span[2].style.transform = "translateX(0) rotate(45deg)";
            span[2].style.width = "20px"
            span[0].style.backgroundColor = "white"
            span[2].style.backgroundColor = "white"
            menuContainer.addEventListener("mouseout", () => {
                span[0].style.transform = "translate(-30px) rotate(-45deg)";
                span[2].style.transform = "translate(30px) rotate(45deg)";

            });
            value = 0;

        }
    }
    spanContainer.addEventListener("click", () => {
        menuConfiguration()
    });

    console.log(value);

    menuContainer.addEventListener("mousemove", () => {
        cancelAnimate()

        menuContainer.style.transform = "matrix(1.5, 0, 0, 1.5, 0, 0)";
        spanContainer.style.transform = "matrix(0.33, 0, 0, 0.33, 0, 0)";
        cursorBorder.style.setProperty("--size", "80px");
        const spanContainerLeft = menuContainer.getBoundingClientRect().left + 75;
        const spanContainerTop = menuContainer.getBoundingClientRect().top + 75;
        let cursorMoveX = (((mouseX - menuContainer.getBoundingClientRect().left) / 100) - 0.75).toFixed(2);
        let cursorMoveY = (((mouseY - menuContainer.getBoundingClientRect().top) / 100) - 0.75).toFixed(2);

        // mover span container ao colocar o mouse sobre menuContainer

        spanContainer.style.transform = `matrix(0.33, 0, 0, 0.33, 0, 0) translate(${(+cursorMoveX * 40)}px, ${+cursorMoveY * 40}px)`;
        cursorBorder.style.transform = `translate(${(spanContainerLeft + +cursorMoveX * 40)}px, ${spanContainerTop + +cursorMoveY * 40}px)`;

    });

    spanContainer.addEventListener("mouseover", () => {
        cancelAnimate()

        menuContainer.style.transform = "matrix(1.5, 0, 0, 1.5, 0, 0)";
        spanContainer.style.transform = "matrix(0.33, 0, 0, 0.33, 0, 0)";
        cursorBorder.style.setProperty("--size", "80px");
        const spanContainerLeft = menuContainer.getBoundingClientRect().left + 75;
        const spanContainerTop = menuContainer.getBoundingClientRect().top + 75;
        let cursorMoveX = (((mouseX - menuContainer.getBoundingClientRect().left) / 100) - 0.75).toFixed(2);
        let cursorMoveY = (((mouseY - menuContainer.getBoundingClientRect().top) / 100) - 0.75).toFixed(2);
        span[0].style.transform = "translate(0px) rotate(-45deg)";
        span[2].style.transform = "translate(0px) rotate(45deg)";
        // mover span container ao colocar o mouse sobre menuContainer

        spanContainer.style.transform = `matrix(0.33, 0, 0, 0.33, 0, 0) translate(${(+cursorMoveX * 40)}px, ${+cursorMoveY * 40}px)`;
        cursorBorder.style.transform = `translate(${(spanContainerLeft + +cursorMoveX * 40)}px, ${spanContainerTop + +cursorMoveY * 40}px)`;

    });
    menuContainer.addEventListener("mouseover", () => {
        span[0].style.transform = "translate(0px) rotate(-45deg)";
        span[2].style.transform = "translate(0px) rotate(45deg)";
    });

    menuContainer.addEventListener("mouseout", () => {
        startAnimate()
        menuContainer.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
        spanContainer.style.transform = "matrix(0.5, 0, 0, 0.5, 0, 0)";
        span[0].style.transform = "translate(-30px) rotate(-45deg)";
        span[2].style.transform = "translate(30px) rotate(45deg)";
        cursorBorder.style.setProperty("--size", "40px");
    });
    function loop() {
        circlePositionX += (mouseX - circlePositionX) / 3;
        circlePositionY += (mouseY - circlePositionY) / 3;
        cursorBorder.style.transform = `translate(${circlePositionX}px, ${circlePositionY}px)`;
        animation = requestAnimationFrame(loop);
    }

    function startAnimate() {
        loop();
    }
    startAnimate();

    function cancelAnimate() {
        cancelAnimationFrame(animation);
    }

    spanWrapperSpan.addEventListener('mouseover', () => {
        cancelAnimationFrame(animation);
        const spanContainerBorderLeft = spanContainer.getBoundingClientRect().left;
        const spanContainerBorderTop = spanContainer.getBoundingClientRect().top;
        cursorBorder.style.setProperty("--size", "80px");
        cursorBorder.style.transition = "0.4s ease-out"
        cursorBorder.style.transform = `translate(${spanContainerBorderLeft + 25}px, ${spanContainerBorderTop + 25}px)`
    })

    spanWrapperSpan.addEventListener('mouseout', () => {
        cursorBorder.style.setProperty("--size", "40px");
        cursorBorder.style.transition = "left 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out,background-color 0.15s ease-out, transform 0.3s ease-out, opacity 0.5s ease"
        startAnimate();
    })

    about_me.addEventListener('mousemove', () => {
        gsap.to(about_me, {
            ease: "ease",
            xPercent: 15,
        });
    })
    about_me.addEventListener('mouseout', () => {
        gsap.to(about_me, {
            duration: 1,
            ease: "elastic.out(1,0.3)",
            yPercent: 0,
            xPercent: 0,
        });
    })
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);