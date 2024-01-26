//SHORTER
/**
 * Shorter DOMContentLoaded
 * @param {Function} Code //function
 */
function dc(arg) { document.addEventListener('DOMContentLoaded', arg) }

/**
 * Shorter version of AddEventListener 'Click'
 * @param {Element} DOMElement 
 * @param {function} Function 
 */
function cl(dom, func) { dom.addEventListener('click', func) }
/**
 * Shorter version of AddEventListener 'Change'
 * @param {Element} DOMElement 
 * @param {function} Function
 */
function ch(dom, func) { dom.addEventListener('change', func) }


/**
 * Get an DOM element with its ID
 * @param {string} Id
 * @returns {Element}
 */
function gid(arg) { return document.getElementById(arg) }
/**
 * Get an DOM element with its CLASS
 * @param {string} Class
 * @returns {Element}
 */
function gclass(arg) { return document.getElementsByClassName(arg) }
/**
 * Get an DOM element with its TAG
 * @param {string} Tag
 * @returns {Element}
 */
function gtag(arg) { return document.getElementsByTagName(arg) }
/**
 * Simpler QuerySelector
 * @param {string}
 * @returns {Element}
 */
function gquery(arg) { return document.querySelector(arg) }
/**
 * Simpler QuerySelectorAll
 * @param {string}
 * @returns Elements
 */
function gqall(arg) { return document.querySelectorAll(arg) }

/**
 * Short console.log
 * @param {*} Thing_to_console.log
 */
function c(arg) { console.log(arg) }

/**
 * Change a CSS variable
 * @param {string} Name_of_the_Variable 
 * @param {string} Value_of_the_variable 
 */
function cssvar(name, arg) { document.documentElement.style.setProperty(name, arg) }

/**
 * Create an element of a type and place it inside another element
 * @param {string} type 
 * @param {Element} DOMElement 
 * @returns {Element}
 */
function cr(type, dom) { return dom.appendChild(document.createElement(type)) }


