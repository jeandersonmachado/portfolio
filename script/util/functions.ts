interface Options {
    background?: string;
    transform?: string;
    transitionDelay?: string;
    visibility?: string;
    width?: string;
    heitgh?: string;
    backgroundColor?: string;
    opacity?: string;
    transition?: string;
}

type InputElement = HTMLDivElement | HTMLSpanElement | HTMLButtonElement;

export function options(element: InputElement, values?: Options): void {
    values?.background !== undefined ? (element.style.background = values?.background) : element.style.background;
    values?.transform !== undefined ? (element.style.transform = values?.transform) : element.style.transform;
    values?.transitionDelay !== undefined
        ? (element.style.transitionDelay = values?.transitionDelay)
        : element.style.transitionDelay;
    values?.visibility !== undefined ? (element.style.visibility = values?.visibility) : element.style.visibility;
    values?.width !== undefined ? (element.style.width = values?.width) : element.style.width;
    values?.heitgh !== undefined ? (element.style.height = values?.heitgh) : element.style.height;
    values?.backgroundColor !== undefined
        ? (element.style.backgroundColor = values?.backgroundColor)
        : element.style.backgroundColor;
    values?.opacity !== undefined ? (element.style.opacity = values?.opacity) : element.style.opacity;
    values?.transition !== undefined ? (element.style.transition = values?.transition) : element.style.transition;
}
