/**
 * Console.log all the descriptions of our functions
 */
function alframeworkhelp() {
    c("dc(FUNC) = document.addEventListener('DOMContentLoaded', FUNC)")
    c("cl(DOM, FUNCTION) = DOM.addEventListener('click', FUNCTION)\nch(DOM, FUNCTION) = DOM.addEventListener('change', FUNCTION)")
    c("gid() = document.getElementById\ngclass() = document.getElementsByClassName\ngtag() = document.getElementsByTagName\ngquery() = document.querySelector\ngqall() = document.querySelectorAll")
    c("c() = console.log")
    c("cssvar(name, arg) = change css variable (that goes by name) value")
    c("cr(TYPE, PARENT) = return an new element (of TYPE) that is nested inside a parent")
}


//SHORTER
/**
 * Shorter DOMContentLoaded
 * @param {Function} arg //function
 */
function dc(arg) { document.addEventListener('DOMContentLoaded', arg) }

/**
 * Shorter version of AddEventListener 'Click'
 * @param {Element} dom 
 * @param {function} func 
 */
function cl(dom, func) { dom.addEventListener('click', func) }
/**
 * Shorter version of AddEventListener 'Change'
 * @param {Element} dom 
 * @param {function} func 
 */
function ch(dom, func) { dom.addEventListener('change', func) }


/**
 * Get an DOM element with its ID
 * @param {string} arg 
 * @returns {Element}
 */
function gid(arg) { return document.getElementById(arg) }
/**
 * Get an DOM element with its CLASS
 * @param {string} arg 
 * @returns {Element}
 */
function gclass(arg) { return document.getElementsByClassName(arg) }
/**
 * Get an DOM element with its TAG
 * @param {string} arg 
 * @returns {Element}
 */
function gtag(arg) { return document.getElementsByTagName(arg) }
/**
 * Simpler QuerySelector
 * @param {string} arg 
 * @returns {Element}
 */
function gquery(arg) { return document.querySelector(arg) }
/**
 * Simpler QuerySelectorAll
 * @param {string} arg 
 * @returns Elements
 */
function gqall(arg) { return document.querySelectorAll(arg) }

/**
 * Short console.log
 * @param {*} arg 
 */
function c(arg) { console.log(arg) }

/**
 * Change a CSS variable
 * @param {string} name 
 * @param {string} arg 
 */
function cssvar(name, arg) { document.documentElement.style.setProperty(name, arg) }

/**
 * Create an element of a type and place it inside another element
 * @param {string} type 
 * @param {Element} dom 
 * @returns {Element}
 */
function cr(type, dom) { return dom.appendChild(document.createElement(type)) }






//AlfJAX
/**
 * AJAX POST request using JSON
 * @param {string} url target. "folder/exemple.php"
 * @param {Object} data data to send. {key1: value1, key2: value2}
 * @param {function} [optional] function to do when success, arg will be the response. (e)=>{console.log(e)}
 */
function alfjax(url, data, success=()=>{console.log('AlfJAX was successful')}) {
    data = Object.keys(data).map(function (key) {return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);}).join('&');
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.send(data);
    xhr.onload = function (e) {
        if (xhr.statusText == 'OK') {
            success(JSON.parse(xhr.response))
        } else {
            console.error(xhr.statusText)
        }
    }
}
//I took the code from https://wickedev.com/use-vanilla-javascript-to-make-ajax-request/ and did some modifications to it.
//That taught me well and i'm glad i learned AJAX, XML and JSON

