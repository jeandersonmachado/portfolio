import { options } from "./util/functions.js";
const spanContainer = document.querySelector(".span_container");
const span = document.querySelectorAll(".span_container span");
const logo = document.querySelector("#logo");
const navigator = document.getElementById("navigator");
const navigatorLi = document.querySelectorAll("#navigator div");
const menuContainer = document.querySelector("#menu_container");
const cursorBorder = document.querySelector("#cursorBorder");
const cross = document.querySelector("#cross");
const spanWrapperSpan = document.querySelector("#span_wrapper span");
const sectionImg = document.querySelectorAll(".section_img_son");
const aboutMe = document.querySelectorAll(".about_me div");
const menu = document.querySelector("#menu");
document.addEventListener("DOMContentLoaded", () => {
    let value = 0;
    let mouseX = 0;
    let mouseY = 0;
    let circlePositionX = 0;
    let circlePositionY = 0;
    let animation = 0;
    logo.addEventListener("click", () => {
        location.reload();
    });
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    let mediaQuery = window.matchMedia("(max-width: 1199px)");
    function handleMediaQueryChange(event) {
        if (event.matches) {
            function cancelAnimate() {
                cancelAnimationFrame(animation);
            }
            cancelAnimate();
            spanContainer.addEventListener("click", () => {
                elementConfiguration();
            });
            options(cursorBorder, {
                visibility: "hidden",
            });
            sectionImg.forEach((iten) => {
                iten.addEventListener("mousemove", () => {
                    cross.style.visibility = "hidden";
                    cross.style.transform = `translate(${mouseX - 7.5}px, ${mouseY - 7.5}px)`;
                });
            });
            sectionImg.forEach((iten) => {
                iten.addEventListener("mouseout", () => {
                    cross.style.visibility = "hidden";
                });
            });
        }
        else {
            options(cursorBorder, {
                visibility: "unset",
            });
            // Getting the values of mouse position
            document.addEventListener("mousemove", (e) => {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });
            sectionImg.forEach((iten) => {
                iten.addEventListener("mousemove", () => {
                    cross.style.visibility = "unset";
                    cross.style.transform = `translate(${mouseX - 7.5}px, ${mouseY - 7.5}px)`;
                });
            });
            sectionImg.forEach((iten) => {
                iten.addEventListener("mouseout", () => {
                    cross.style.visibility = "hidden";
                });
            });
            aboutMe.forEach((iten) => {
                iten.addEventListener("mouseover", () => {
                    cursorBorder.style.setProperty("--size", "100px");
                    options(cursorBorder, {
                        opacity: "0",
                        backgroundColor: "unset",
                    });
                });
            });
            sectionImg.forEach((iten) => {
                iten.addEventListener("mouseover", () => {
                    cursorBorder.style.setProperty("--size", "80px");
                    cursorBorder.style.border = "1.5px solid white";
                    options(cursorBorder, {
                        opacity: "1",
                        backgroundColor: "unset",
                    });
                });
            });
            sectionImg.forEach((iten) => {
                iten.addEventListener("mouseout", () => {
                    cursorBorder.style.setProperty("--size", "15px");
                    cursorBorder.style.border = "unset";
                    options(cursorBorder, {
                        opacity: "1",
                        backgroundColor: "white",
                    });
                });
            });
            aboutMe.forEach((iten) => {
                iten.addEventListener("mouseleave", () => {
                    cursorBorder.style.setProperty("--size", "15px");
                    options(cursorBorder, {
                        opacity: "1",
                        backgroundColor: "white",
                    });
                });
            });
            logo.addEventListener("mouseover", () => {
                cursorBorder.style.setProperty("--size", "100px");
                options(cursorBorder, {
                    opacity: "0",
                    backgroundColor: "unset",
                });
            });
            logo.addEventListener("mouseout", () => {
                cursorBorder.style.setProperty("--size", "15px");
                options(cursorBorder, {
                    opacity: "1",
                    backgroundColor: "white",
                });
            });
            // Styling the navigator menu
            menu.addEventListener("mouseover", () => {
                cursorBorder.style.setProperty("--size", "80px");
                cursorBorder.style.border = "unset";
                cursorBorder.style.background = "rgba(128, 0, 128, 0.289)";
            });
            menu.addEventListener("mouseout", () => {
                cursorBorder.style.setProperty("--size", "15px");
                // cursorBorder.style.border = "2px solid #606060";
                cursorBorder.style.background = "white";
            });
            spanContainer.addEventListener("click", () => {
                elementConfiguration();
            });
            ///////////////////////////////////////////////////
            menuContainer.addEventListener("mousemove", () => {
                cancelAnimate();
                const spanContainerLeft = menuContainer.getBoundingClientRect().left + 60;
                const spanContainerTop = menuContainer.getBoundingClientRect().top + 60;
                let cursorMoveX = ((mouseX - menuContainer.getBoundingClientRect().left) / 120 - 0.6).toFixed(2);
                let cursorMoveY = ((mouseY - menuContainer.getBoundingClientRect().top) / 120 - 0.6).toFixed(2);
                cursorBorder.style.setProperty("--size", "80px");
                cursorBorder.style.border = "1px solid white";
                cursorBorder.style.backgroundColor = "unset";
                options(span[0], {
                    transform: "translate(0px) rotate(-45deg)",
                });
                options(span[2], {
                    transform: "translate(0px) rotate(45deg)",
                });
                options(spanContainer, {
                    transform: `translate(${+cursorMoveX * 110}%, ${+cursorMoveY * 110}%)`,
                });
                options(cursorBorder, {
                    transform: `translate(${spanContainerLeft + +cursorMoveX * 40}px, ${spanContainerTop + +cursorMoveY * 40}px)`,
                });
            });
            menuContainer.addEventListener("mouseover", () => {
                options(span[0], {
                    transform: "translate(0px) rotate(-45deg)",
                });
                options(span[2], {
                    transform: "translate(0px) rotate(45deg)",
                });
            });
            menuContainer.addEventListener("mouseout", () => {
                startAnimate();
                cursorBorder.style.setProperty("--size", "15px");
                cursorBorder.style.border = "unset";
                cursorBorder.style.backgroundColor = "white";
                options(span[0], {
                    transform: "translate(-20px) rotate(-45deg)",
                });
                options(span[2], {
                    transform: "translate(20px) rotate(45deg)",
                });
                options(spanContainer, {
                    transform: `translate(0px, 0px)`,
                });
            });
            // Start animation
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
            spanWrapperSpan.addEventListener("click", () => {
                elementConfiguration();
            });
            spanWrapperSpan.addEventListener("mouseover", () => {
                cancelAnimationFrame(animation);
                const spanContainerBorderLeft = spanContainer.getBoundingClientRect().left;
                const spanContainerBorderTop = spanContainer.getBoundingClientRect().top;
                cursorBorder.style.setProperty("--size", "80px");
                cursorBorder.style.border = "1px solid white";
                cursorBorder.style.backgroundColor = "unset";
                options(cursorBorder, {
                    transition: "0.4s ease-out",
                });
                options(cursorBorder, {
                    transform: `translate(${spanContainerBorderLeft + 25}px, ${spanContainerBorderTop + 25}px)`,
                });
            });
            spanWrapperSpan.addEventListener("mouseout", () => {
                cursorBorder.style.setProperty("--size", "15px");
                cursorBorder.style.border = "unset";
                cursorBorder.style.backgroundColor = "white";
                options(cursorBorder, {
                    transition: "left 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out,background-color 0.15s ease-out, transform 0.3s ease-out, opacity 0.5s ease",
                });
                startAnimate();
            });
        }
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    //options
    function elementConfiguration() {
        if (value === 0) {
            options(navigator, {
                background: "linear-gradient(344deg, rgba(9,0,34,1) 4%, rgba(75,11,119,1) 100%)",
                transform: "translate(0, 0)",
            });
            options(navigatorLi[0], {
                transform: "translate(0, 0)",
                transitionDelay: "0.3s",
                visibility: "visible",
            });
            options(navigatorLi[1], {
                transform: "translate(0, 0)",
                transitionDelay: "0.4s",
                visibility: "visible",
            });
            options(navigatorLi[2], {
                transform: "translate(0, 0)",
                transitionDelay: "0.5s",
                visibility: "visible",
            });
            options(navigatorLi[3], {
                transform: "translate(0, 0)",
                transitionDelay: "0.6s",
                visibility: "visible",
            });
            options(span[0], {
                width: "35px",
                backgroundColor: "white",
                transform: "translate(0px) rotate(-45deg)",
            });
            options(span[2], {
                width: "35px",
                backgroundColor: "white",
                transform: "translate(0px) rotate(45deg)",
            });
            menuContainer.addEventListener("mouseout", () => {
                span[0].style.transform = "translate(0px) rotate(-45deg)";
                span[2].style.transform = "translate(0px) rotate(45deg)";
            });
            spanWrapperSpan.addEventListener("mouseout", () => {
                span[0].style.transform = "translate(0px) rotate(-45deg)";
                span[2].style.transform = "translate(0px) rotate(45deg)";
            });
            navigatorLi.forEach((el) => {
                el.addEventListener("click", () => {
                    options(navigator, {
                        transform: "translateY(-100%)",
                    });
                    options(navigatorLi[0], {
                        transitionDelay: "unset",
                        transform: "translateY(-100%)",
                    });
                    options(navigatorLi[1], {
                        transitionDelay: "unset",
                        transform: "translateY(-100%)",
                    });
                    options(navigatorLi[2], {
                        transitionDelay: "unset",
                        transform: "translateY(-100%)",
                    });
                    options(navigatorLi[3], {
                        transitionDelay: "unset",
                        transform: "translateY(-100%)",
                    });
                    options(span[0], {
                        width: "10px",
                        backgroundColor: "white",
                        transform: "translate(0px) rotate(-45deg)",
                    });
                    options(span[2], {
                        width: "10px",
                        backgroundColor: "white",
                        transform: "translate(0px) rotate(45deg)",
                    });
                    span[0].style.transform = "translate(-20px) rotate(-45deg)";
                    span[2].style.transform = "translate(20px) rotate(45deg)";
                    value = 0;
                });
            });
            value = 1;
        }
        else {
            options(navigator, {
                transform: "translateY(-100%)",
            });
            options(navigatorLi[0], {
                transitionDelay: "unset",
                transform: "translateY(-100%)",
            });
            options(navigatorLi[1], {
                transitionDelay: "unset",
                transform: "translateY(-100%)",
            });
            options(navigatorLi[2], {
                transitionDelay: "unset",
                transform: "translateY(-100%)",
            });
            options(navigatorLi[3], {
                transitionDelay: "unset",
                transform: "translateY(-100%)",
            });
            options(span[0], {
                width: "10px",
                backgroundColor: "white",
                transform: "translate(0px) rotate(-45deg)",
            });
            options(span[2], {
                width: "10px",
                backgroundColor: "white",
                transform: "translate(0px) rotate(45deg)",
            });
            options(spanContainer, {});
            menuContainer.addEventListener("mouseout", () => {
                span[0].style.transform = "translate(-20px) rotate(-45deg)";
                span[2].style.transform = "translate(20px) rotate(45deg)";
            });
            spanWrapperSpan.addEventListener("mouseout", () => {
                span[0].style.transform = "translate(-20px) rotate(-45deg)";
                span[2].style.transform = "translate(20px) rotate(45deg)";
            });
            value = 0;
        }
    }
});
