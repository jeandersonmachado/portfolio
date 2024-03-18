const listener = function (el, event,) {
    el.addEventListener(event, () => {

    })
}
const jeanderson = {
    transform: 2,
    translate: 1
}

const listener2 = function (value, { nome, idade }) {
    value.style.transitionDelay = jeanderson.transform;
}

