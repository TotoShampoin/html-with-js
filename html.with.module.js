// Copyright 2021 TotoShampoin
// 
// Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, 
// provided that the above copyright notice and this permission notice appear in all copies.

/**
 * A function that calls doument.createElement and receives its attributes, datas, etc... in form of an object argument
 * @param {string} tagName the name of the tag of the HTML element
 * @param {string|HTMLElement|HTMLElement[]} content the content of the HTML element, be it text or another HTML element, or even an array of HTML elements
 * @param {object} options HTML element options that you would normally put line by line in vanilla code
 * @returns {HTMLElement} an HTML element
 */
export default (tagName = "div", content = [], options = {}) => {
    const el = document.createElement(tagName);
    for(let o in options) {
        switch(o) {
            default:
                el[o] = options[o];
                break;
            case "classList":
                if(typeof options.classList === 'string') {
                    el.classList.value = options.classList;
                }
                if(options.classList instanceof Array) {
                    el.classList.add(options.classList);
                }
                break;
            case "dataset":
                for(let d in options.dataset) {
                    el.dataset[d] = options.dataset[d];
                }
                break;
            case "style":
                for(let s in options.style) {
                    el.style[s] = options.style[s];
                    el.style.setProperty(s, options.style[s]);
                }
                break;
        }
    }
    if(typeof content === 'string') {
        el.innerText = content;
    } else if(content instanceof HTMLElement) {
        el.appendChild(content);
    } else if(content instanceof Array) {
        content.forEach(c => {
            if(c instanceof HTMLElement) {
                el.appendChild(c);
            } else throw new Error("invalid content");
        })
    } else throw new Error("invalid content");
    return el;
}
