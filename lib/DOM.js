define(['jquery'], ($) => ({
    createButton: (text, className, clickFn) => {
        const btnElem = document.createElement('button')
        btnElem.className = `btn ${className || ''}`
        btnElem.innerText = text
        clickFn && btnElem.addEventListener('click', clickFn)
        return btnElem
    }
}))