function help(){
    console.log("dc(FUNC) = document.addEventListener('DOMContentLoaded', FUNC)")
    console.log("cl(DOM, FUNCTION) = DOM.addEventListener('click', FUNCTION)\nch(DOM, FUNCTION) = DOM.addEventListener('change', FUNCTION)")
    console.log("gid() = document.getElementById\ngclass() = document.getElementsByClassName\ngtag() = document.getElementsByTagName\ngquery() = document.querySelector\ngqall() = document.querySelectorAll")
    console.log("c() = console.log")
    console.log("cssvar(name, arg) = change css variable (that goes by name) value")
    console.log("cr(TYPE, PARENT) = return an new element (of TYPE) that is nested inside a parent")
}



function dc(arg){document.addEventListener('DOMContentLoaded', arg)}

function cl(dom, func){dom.addEventListener('click', func)}
function ch(dom, func){dom.addEventListener('change', func)}

function gid(arg){return document.getElementById(arg)}
function gclass(arg){return document.getElementsByClassName(arg)}
function gtag(arg){return document.getElementsByTagName(arg)}
function gquery(arg){return document.querySelector(arg)}
function gqall(arg){return document.querySelectorAll(arg)}

function c(arg){console.log(arg)}

function cssvar(name, arg){document.documentElement.style.setProperty(name, arg)}

function cr(type, dom){
    return dom.appendChild(document.createElement(type))
}